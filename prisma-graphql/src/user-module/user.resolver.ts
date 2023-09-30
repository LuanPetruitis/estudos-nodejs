// In resolver you will write GraphQL queries
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput, DeleteUserInput, UpdateUserInput } from 'src/graphql';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query('users')
  async getUsers() {
    return this.userService.getUsers();
  }

  @Mutation('createUser')
  async createUser(@Args('data') input: CreateUserInput) {
    return this.userService.createUser(input);
  }

  @Mutation('updateUser')
  async updateUser(@Args('data') input: UpdateUserInput) {
    return this.userService.updateUser(input);
  }

  @Mutation('deleteUser')
  async deleteUser(@Args('data') input: DeleteUserInput) {
    return this.userService.deleteUser(input);
  }
}
