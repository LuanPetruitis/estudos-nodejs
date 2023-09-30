import { PrismaService } from './prisma.services';
import { CreateUserInput, DeleteUserInput, UpdateUserInput, User } from '../graphql';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getUsers(): Promise<User[]>;
    createUser(input: CreateUserInput): Promise<User>;
    updateUser(input: UpdateUserInput): Promise<string>;
    deleteUser(input: DeleteUserInput): Promise<string>;
}
