"use strict";
// name - string
// duration - number
// educator - string
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    execute({ name, duration = 8, educator }) {
        console.log(name, duration, educator);
    }
}
exports.default = new CreateCourseService();
