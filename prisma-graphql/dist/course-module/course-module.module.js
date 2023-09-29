"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseModuleModule = void 0;
const common_1 = require("@nestjs/common");
const course_resolver_1 = require("./course.resolver");
const course_service_1 = require("./course.service");
const prisma_services_1 = require("./prisma.services");
let CourseModuleModule = class CourseModuleModule {
};
exports.CourseModuleModule = CourseModuleModule;
exports.CourseModuleModule = CourseModuleModule = __decorate([
    (0, common_1.Module)({
        providers: [prisma_services_1.PrismaService, course_service_1.CourseService, course_resolver_1.CourseResolver],
    })
], CourseModuleModule);
//# sourceMappingURL=course-module.module.js.map