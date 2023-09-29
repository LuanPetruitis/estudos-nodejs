import { PrismaService } from './prisma.services';
import { CreateUserInput, User } from '../graphql';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getUsers(): Promise<User[]>;
    createUser(input: CreateUserInput): Promise<User>;
}
