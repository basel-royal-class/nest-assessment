import { Module } from '@nestjs/common';
import { Users } from './users.entity';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UsersService } from './users.service';
import { AuthModule } from 'src/auth/auth-module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: 'USERS_REPOSITORY',
      useFactory: (dataSource: DataSource) => new UsersRepository(dataSource),
      inject: [DataSource],
    },
  ],
  exports: ['USERS_REPOSITORY'],
})
export class UsersModule { }
