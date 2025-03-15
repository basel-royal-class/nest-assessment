import { UsersRepository } from './users.repository';
import { Users } from './users.entity';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    create(name: string, email: string): Promise<Users>;
    findOne(email: string): Promise<Users | null>;
}
