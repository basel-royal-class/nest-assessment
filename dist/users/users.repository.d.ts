import { Repository, DataSource } from 'typeorm';
import { Users } from './users.entity';
export declare class UsersRepository extends Repository<Users> {
    private dataSource;
    constructor(dataSource: DataSource);
    findByEmail(email: string): Promise<Users | null>;
}
