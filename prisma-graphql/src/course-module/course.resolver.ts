// In resolver you will write GraphQL queries
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CourseService } from './course.service';
import { CreateCourseInput } from 'src/graphql';

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
}
