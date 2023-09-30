import { PrismaService } from './prisma.services';
import { Course, CreateCourseInput, DeleteCourseInput, UpdateCourseInput } from '../graphql';
export declare class CourseService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getCourses(): Promise<Course[]>;
    createCourse(input: CreateCourseInput): Promise<Course>;
    updateCourse(input: UpdateCourseInput): Promise<string>;
    deleteCourse(input: DeleteCourseInput): Promise<string>;
}
