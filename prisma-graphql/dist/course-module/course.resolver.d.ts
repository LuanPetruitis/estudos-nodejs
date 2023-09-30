import { CourseService } from './course.service';
import { CreateCourseInput } from 'src/graphql';
export declare class CourseResolver {
    private readonly courseService;
    constructor(courseService: CourseService);
    getCourses(): Promise<import("src/graphql").Course[]>;
    createCourse(input: CreateCourseInput): Promise<import("src/graphql").Course>;
}
