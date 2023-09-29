import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.services';
import { CreateUserInput, User } from '../graphql';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUsers(): Promise<User[]> {
    return this.prisma.prismaUsers.findMany({});
  }

  async createUser(input: CreateUserInput): Promise<User> {
    try {
      const newDate = { ...input };

      const userCreated = await this.prisma.prismaUsers.create({
        data: newDate,
      });
      return userCreated;
    } catch (err) {
      return err;
    }
  }
}
