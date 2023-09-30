import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.services';
import { Course, CreateCourseInput } from '../graphql';

@Injectable()
export class CourseService {
  constructor(private readonly prisma: PrismaService) {}

  async getCourses(): Promise<Course[]> {
    return this.prisma.course.findMany({});
  }

  async createCourse(input: CreateCourseInput): Promise<Course> {
    try {
      const newDate = { ...input };

      const courseCreated = await this.prisma.course.create({
        data: newDate,
      });
      return courseCreated;
    } catch (err) {
      return err;
    }
  }
}
