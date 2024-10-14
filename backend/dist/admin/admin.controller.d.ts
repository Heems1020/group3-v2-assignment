import { AdminService } from './admin.service';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    login(body: {
        email: string;
        password: string;
    }): Promise<any>;
}
