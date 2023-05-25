import { Request, Response } from 'express';
import CourseService from './CourseService';

export function createCourse(request: Request, response: Response) {
    CourseService.execute({
        name: "NodeJs",
        duration: 10,
        educator: "Dani"
    });

    CourseService.execute({
        name: "NodeJs",
        educator: "Dani"
    });

    return response.send();
}