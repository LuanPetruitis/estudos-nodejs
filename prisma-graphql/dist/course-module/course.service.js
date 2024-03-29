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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseService = void 0;
const common_1 = require("@nestjs/common");
const prisma_services_1 = require("./prisma.services");
let CourseService = class CourseService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getCourses() {
        return this.prisma.course.findMany({});
    }
    async createCourse(input) {
        try {
            const newDate = { ...input };
            const courseCreated = await this.prisma.course.create({
                data: newDate,
            });
            return courseCreated;
        }
        catch (err) {
            return err;
        }
    }
    async updateCourse(input) {
        try {
            const updationData = { ...input };
            await this.prisma.course.update({
                where: {
                    id: updationData.id,
                },
                data: {
                    name: updationData.name,
                    description: updationData.description,
                    duration: updationData.duration,
                },
            });
            return 'Course updated successfully!';
        }
        catch (err) {
            return err;
        }
    }
    async deleteCourse(input) {
        try {
            const deletenData = { ...input };
            await this.prisma.course.delete({
                where: {
                    id: deletenData.id,
                },
            });
            return 'Course deleted successfully!';
        }
        catch (err) {
            return err;
        }
    }
};
exports.CourseService = CourseService;
exports.CourseService = CourseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_services_1.PrismaService])
], CourseService);
//# sourceMappingURL=course.service.js.map