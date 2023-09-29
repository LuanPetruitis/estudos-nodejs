import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.services';
import { Course } from '../graphql';

@Injectable()
export class CourseService {
  constructor(private readonly prisma: PrismaService) {}

  async getCourses(): Promise<Course[]> {
    return this.prisma.course.findMany({});
  }
}
