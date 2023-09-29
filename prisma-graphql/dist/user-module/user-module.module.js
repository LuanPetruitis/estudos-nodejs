"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModuleModule = void 0;
const common_1 = require("@nestjs/common");
const user_resolver_1 = require("./user.resolver");
const user_service_1 = require("./user.service");
const prisma_services_1 = require("./prisma.services");
let UserModuleModule = class UserModuleModule {
};
exports.UserModuleModule = UserModuleModule;
exports.UserModuleModule = UserModuleModule = __decorate([
    (0, common_1.Module)({
        providers: [prisma_services_1.PrismaService, user_service_1.UserService, user_resolver_1.UserResolver],
    })
], UserModuleModule);
//# sourceMappingURL=user-module.module.js.map