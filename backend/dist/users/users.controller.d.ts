import { UsersService } from './users.service';
import { User } from '../schemas/user.schema';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    register(user: User): Promise<any>;
    login(body: {
        email: string;
        password: string;
    }): Promise<any>;
}
