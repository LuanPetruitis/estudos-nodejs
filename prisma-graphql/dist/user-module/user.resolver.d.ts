import { UserService } from './user.service';
import { CreateUserInput, DeleteUserInput, UpdateUserInput } from 'src/graphql';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(): Promise<import("src/graphql").User[]>;
    createUser(input: CreateUserInput): Promise<import("src/graphql").User>;
    updateUser(input: UpdateUserInput): Promise<string>;
    deleteUser(input: DeleteUserInput): Promise<string>;
}
