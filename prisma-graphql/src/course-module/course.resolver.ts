// In resolver you will write GraphQL queries
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CourseService } from './course.service';
import {
  CreateCourseInput,
  DeleteCourseInput,
  UpdateCourseInput,
} from 'src/graphql';

@Resolver('Course')
export class CourseResolver {
  constructor(private readonly courseService: CourseService) {}

  @Query('courses')
  async getCourses() {
    return this.courseService.getCourses();
  }

  @Mutation('createCourse')
  async createCourse(@Args('data') input: CreateCourseInput) {
    return this.courseService.createCourse(input);
  }

  @Mutation('updateCourse')
  async updateCourse(@Args('data') input: UpdateCourseInput) {
    return this.courseService.updateCourse(input);
  }

  @Mutation('deleteCourse')
  async deleteCourse(@Args('data') input: DeleteCourseInput) {
    return this.courseService.deleteCourse(input);
  }
}
