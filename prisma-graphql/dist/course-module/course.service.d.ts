import { PrismaService } from './prisma.services';
import { Course } from '../graphql';
export declare class CourseService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getCourses(): Promise<Course[]>;
}
