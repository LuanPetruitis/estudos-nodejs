
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
}

export abstract class IQuery {
    abstract users(): Nullable<User[]> | Promise<Nullable<User[]>>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createUser(data?: Nullable<CreateUserInput>): Nullable<User> | Promise<Nullable<User>>;
}

export class User {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
}

type Nullable<T> = T | null;
