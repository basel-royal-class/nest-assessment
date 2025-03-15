import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { LoginDto, UsersDto } from 'src/users/users.dto';
import { Users } from 'src/users/users.entity';
export declare class AuthService {
    private userRepository;
    private jwtService;
    constructor(userRepository: Repository<Users>, jwtService: JwtService);
    hashPassword(password: string): Promise<string>;
    comparePasswords(password: string, hashedPassword: string): Promise<boolean>;
    register(createUserDto: UsersDto): Promise<Users>;
    login(loginDto: LoginDto): Promise<{
        accessToken: string;
        user: {
            id: number;
            email: string;
            name: string;
        };
    }>;
}
