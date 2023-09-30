import { PrismaService } from './prisma.services';
import { Course, CreateCourseInput } from '../graphql';
export declare class CourseService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getCourses(): Promise<Course[]>;
    createCourse(input: CreateCourseInput): Promise<Course>;
}
