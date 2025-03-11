import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from './auth-service';
import { JwtAuthStrategy } from './jwt-strategy'; // Ensure strategy is imported
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth-conroller';
import { DataSource } from 'typeorm';
import { UsersRepository } from 'src/users/users.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/users/users.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Users]),
        UsersModule,
        PassportModule.register({ defaultStrategy: 'jwt' }), // Register passport strategy
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get<string>('JWT_SECRET'),
                signOptions: { expiresIn: '60m' },
            }),
        }),
    ],
    providers: [AuthService, JwtAuthStrategy], // Ensure JwtAuthStrategy is provided
    controllers: [AuthController],
    exports: [AuthService], // Export AuthService for other modules
})
export class AuthModule { }