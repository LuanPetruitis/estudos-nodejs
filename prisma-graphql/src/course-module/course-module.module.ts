import { Module } from '@nestjs/common';
import { CourseResolver } from './course.resolver';
import { CourseService } from './course.service';
import { PrismaService } from './prisma.services';

@Module({
  providers: [PrismaService, CourseService, CourseResolver],
})
export class CourseModuleModule {}
