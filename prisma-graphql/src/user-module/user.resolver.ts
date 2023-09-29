// In resolver you will write GraphQL queries
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput } from 'src/graphql';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query('users')
  async getUsers() {
    return this.userService.getUsers();
  }

  @Mutation('createUser')
  async createUser(@Args('data') input: CreateUserInput) {
    console.log('Entrou');
    return this.userService.createUser(input);
  }
}
