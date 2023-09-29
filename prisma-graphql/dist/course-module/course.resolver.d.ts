import { CourseService } from './course.service';
export declare class CourseResolver {
    private readonly courseService;
    constructor(courseService: CourseService);
    getCourses(): Promise<import("../graphql").Course[]>;
}
