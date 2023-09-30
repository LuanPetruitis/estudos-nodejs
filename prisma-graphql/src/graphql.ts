
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateCourseInput {
    id: string;
    name: string;
    description: string;
    duration: number;
}

export class CreateUserInput {
    id: string;
    name: string;
    email: string;
    password: string;
}

export class UpdateUserInput {
    id: string;
    name: string;
    email: string;
}

export class DeleteUserInput {
    id: string;
}

export abstract class IQuery {
    abstract courses(): Nullable<Nullable<Course>[]> | Promise<Nullable<Nullable<Course>[]>>;

    abstract users(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
}

export abstract class IMutation {
    abstract createCourse(data?: Nullable<CreateCourseInput>): Nullable<Course> | Promise<Nullable<Course>>;

    abstract createUser(data?: Nullable<CreateUserInput>): Nullable<User> | Promise<Nullable<User>>;

    abstract updateUser(data?: Nullable<UpdateUserInput>): Nullable<string> | Promise<Nullable<string>>;

    abstract deleteUser(data?: Nullable<DeleteUserInput>): Nullable<string> | Promise<Nullable<string>>;
}

export class Course {
    name: string;
    description: string;
    duration: number;
}

export class User {
    id: string;
    name: string;
    email: string;
    password: string;
}

type Nullable<T> = T | null;
