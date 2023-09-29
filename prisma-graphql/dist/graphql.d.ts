export declare class CreateUserInput {
    id: string;
    name: string;
    email: string;
    password: string;
}
export declare abstract class IQuery {
    abstract courses(): Nullable<Nullable<Course>[]> | Promise<Nullable<Nullable<Course>[]>>;
    abstract users(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
}
export declare class Course {
    name: string;
    description: string;
    duration: number;
}
export declare abstract class IMutation {
    abstract createUser(data?: Nullable<CreateUserInput>): Nullable<User> | Promise<Nullable<User>>;
}
export declare class User {
    id: string;
    name: string;
    email: string;
    password: string;
}
type Nullable<T> = T | null;
export {};
