import { Model } from 'mongoose';
import { Admin, AdminDocument } from './schemas/admin.schema';
export declare class AdminService {
    private adminModel;
    constructor(adminModel: Model<AdminDocument>);
    findByEmail(email: string): Promise<Admin | null>;
}
