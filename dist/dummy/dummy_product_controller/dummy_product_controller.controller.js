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
exports.DummyProductController = void 0;
const common_1 = require("@nestjs/common");
const dummy_product_controller_service_1 = require("./dummy_product_controller.service");
let DummyProductController = class DummyProductController {
    productsService;
    constructor(productsService) {
        this.productsService = productsService;
    }
    async getProducts(cursor, limit = 10) {
        return this.productsService.getProducts(cursor, Number(limit));
    }
};
exports.DummyProductController = DummyProductController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('cursor')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], DummyProductController.prototype, "getProducts", null);
exports.DummyProductController = DummyProductController = __decorate([
    (0, common_1.Controller)('dummy-products'),
    __metadata("design:paramtypes", [dummy_product_controller_service_1.DummyProductControllerService])
], DummyProductController);
//# sourceMappingURL=dummy_product_controller.controller.js.map