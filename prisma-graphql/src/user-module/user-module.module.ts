import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { PrismaService } from './prisma.services';

@Module({
  providers: [PrismaService, UserService, UserResolver],
})
export class UserModuleModule {}
