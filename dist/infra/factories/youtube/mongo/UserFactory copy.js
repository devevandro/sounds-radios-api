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
exports.UserFactory = void 0;
const common_1 = require("@nestjs/common");
const CreateUserUseCase_1 = require("../../../../domain/youtube/useCases/mongo/CreateUserUseCase");
const injections_1 = require("../../../../providers/injections");
let UserFactory = class UserFactory extends CreateUserUseCase_1.CreateUserUseCase {
    constructor(userProvider) {
        super(userProvider);
    }
};
UserFactory = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(injections_1.USER)),
    __metadata("design:paramtypes", [Object])
], UserFactory);
exports.UserFactory = UserFactory;
//# sourceMappingURL=UserFactory%20copy.js.map