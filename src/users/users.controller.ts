import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersDto } from './users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService:UsersService) {

  }
  @Post()
  async create(@Body() usersDto:UsersDto ){
    return this.usersService.create(usersDto.name,usersDto.email);
  }
  @Get('find')
  async findOne(@Param('email') email:string){
    return this.usersService.findOne(email);
  }

}
