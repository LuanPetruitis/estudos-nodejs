
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateUserInput {
    id: string;
    name: string;
    email: string;
    password: string;
}

export abstract class IQuery {
    abstract courses(): Nullable<Nullable<Course>[]> | Promise<Nullable<Nullable<Course>[]>>;

    abstract users(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
}

export class Course {
    name: string;
    description: string;
    duration: number;
}

export abstract class IMutation {
    abstract createUser(data?: Nullable<CreateUserInput>): Nullable<User> | Promise<Nullable<User>>;
}

export class User {
    id: string;
    name: string;
    email: string;
    password: string;
}

type Nullable<T> = T | null;
