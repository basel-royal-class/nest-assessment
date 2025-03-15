import { UsersDto } from './users.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(usersDto: UsersDto): Promise<import("./users.entity").Users>;
    findOne(email: string): Promise<import("./users.entity").Users | null>;
}
