import { AuthService } from './auth-service';
import { LoginDto, UsersDto } from 'src/users/users.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(createUserDto: UsersDto): Promise<import("../users/users.entity").Users>;
    login(loginDto: LoginDto): Promise<{
        accessToken: string;
        user: {
            id: number;
            email: string;
            name: string;
        };
    }>;
}
