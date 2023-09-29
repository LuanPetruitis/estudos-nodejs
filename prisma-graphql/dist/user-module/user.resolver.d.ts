import { UserService } from './user.service';
import { CreateUserInput } from 'src/graphql';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(): Promise<import("src/graphql").User[]>;
    createUser(input: CreateUserInput): Promise<import("src/graphql").User>;
}
