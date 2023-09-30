import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.services';
import {
  Course,
  CreateCourseInput,
  DeleteCourseInput,
  UpdateCourseInput,
} from '../graphql';

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

  async updateCourse(input: UpdateCourseInput): Promise<string> {
    try {
      const updationData = { ...input };

      await this.prisma.course.update({
        where: {
          id: updationData.id,
        },
        data: {
          name: updationData.name,
          description: updationData.description,
          duration: updationData.duration,
        },
      });
      return 'Course updated successfully!';
    } catch (err) {
      return err;
    }
  }

  async deleteCourse(input: DeleteCourseInput): Promise<string> {
    try {
      const deletenData = { ...input };

      await this.prisma.course.delete({
        where: {
          id: deletenData.id,
        },
      });
      return 'Course deleted successfully!';
    } catch (err) {
      return err;
    }
  }
}
