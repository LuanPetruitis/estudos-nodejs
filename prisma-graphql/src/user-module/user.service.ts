import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.services';
import {
  CreateUserInput,
  DeleteUserInput,
  UpdateUserInput,
  User,
} from '../graphql';

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

  async updateUser(input: UpdateUserInput): Promise<string> {
    try {
      const updationData = { ...input };

      await this.prisma.prismaUsers.update({
        where: {
          id: updationData.id,
        },
        data: {
          name: updationData.name,
          email: updationData.email,
        },
      });
      return 'User updated successfully!';
    } catch (err) {
      return err;
    }
  }

  async deleteUser(input: DeleteUserInput): Promise<string> {
    try {
      const deletenData = { ...input };

      await this.prisma.prismaUsers.delete({
        where: {
          id: deletenData.id,
        },
      });
      return 'User deleted successfully!';
    } catch (err) {
      return err;
    }
  }
}
