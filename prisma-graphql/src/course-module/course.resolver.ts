// In resolver you will write GraphQL queries
import { Query, Resolver } from '@nestjs/graphql';
import { CourseService } from './course.service';

@Resolver('Course')
export class CourseResolver {
  constructor(private readonly courseService: CourseService) {}

  @Query('courses')
  async getCourses() {
    return this.courseService.getCourses();
  }
}
