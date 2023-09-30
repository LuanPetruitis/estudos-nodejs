"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const course_service_1 = require("./course.service");
const graphql_2 = require("../graphql");
let CourseResolver = class CourseResolver {
    constructor(courseService) {
        this.courseService = courseService;
    }
    async getCourses() {
        return this.courseService.getCourses();
    }
    async createCourse(input) {
        return this.courseService.createCourse(input);
    }
    async updateCourse(input) {
        return this.courseService.updateCourse(input);
    }
    async deleteCourse(input) {
        return this.courseService.deleteCourse(input);
    }
};
exports.CourseResolver = CourseResolver;
__decorate([
    (0, graphql_1.Query)('courses'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CourseResolver.prototype, "getCourses", null);
__decorate([
    (0, graphql_1.Mutation)('createCourse'),
    __param(0, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [graphql_2.CreateCourseInput]),
    __metadata("design:returntype", Promise)
], CourseResolver.prototype, "createCourse", null);
__decorate([
    (0, graphql_1.Mutation)('updateCourse'),
    __param(0, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [graphql_2.UpdateCourseInput]),
    __metadata("design:returntype", Promise)
], CourseResolver.prototype, "updateCourse", null);
__decorate([
    (0, graphql_1.Mutation)('deleteCourse'),
    __param(0, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [graphql_2.DeleteCourseInput]),
    __metadata("design:returntype", Promise)
], CourseResolver.prototype, "deleteCourse", null);
exports.CourseResolver = CourseResolver = __decorate([
    (0, graphql_1.Resolver)('Course'),
    __metadata("design:paramtypes", [course_service_1.CourseService])
], CourseResolver);
//# sourceMappingURL=course.resolver.js.map