import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcryptjs';
import { Repository } from 'typeorm';
import { LoginDto, UsersDto } from 'src/users/users.dto';
import { Users } from 'src/users/users.entity';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Users)
        private userRepository: Repository<Users>,
        private jwtService: JwtService,
    ) { }

    // Hash password before saving user
    async hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, 10);
    }

    // Compare passwords
    async comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(password, hashedPassword);
    }

    // User registration (Sign-up)
    async register(createUserDto: UsersDto): Promise<Users> {
        const { password, ...userData } = createUserDto;
        const hashedPassword = await this.hashPassword(password);

        const newUser = this.userRepository.create({
            ...userData,
            password: hashedPassword,
        });

        return await this.userRepository.save(newUser);
    }

    // User login (Sign-in)
    async login(loginDto: LoginDto) {
        const { email, password } = loginDto;
        const user = await this.userRepository.findOne({ where: { email } });

        if (!user) {
            throw new Error('Invalid credentials');
        }

        const isPasswordValid = await this.comparePasswords(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid credentials');
        }

        // Generate JWT token
        const payload = { email: user.email, sub: user.id };
        const accessToken = this.jwtService.sign(payload); // Generate JWT

        return {
            accessToken,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
            },
        }; // Return the generated token
    }
}
