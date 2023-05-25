"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
const CourseService_1 = __importDefault(require("./CourseService"));
function createCourse(request, response) {
    CourseService_1.default.execute({
        name: "NodeJs",
        duration: 10,
        educator: "Dani"
    });
    CourseService_1.default.execute({
        name: "NodeJs",
        educator: "Dani"
    });
    return response.send();
}
exports.createCourse = createCourse;
