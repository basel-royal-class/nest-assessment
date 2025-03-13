"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DummyProductModuleModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const dymmy_product_1 = require("../dymmy-product");
const dummy_product_controller_controller_1 = require("../dummy_product_controller/dummy_product_controller.controller");
const dummy_product_controller_service_1 = require("../dummy_product_controller/dummy_product_controller.service");
let DummyProductModuleModule = class DummyProductModuleModule {
};
exports.DummyProductModuleModule = DummyProductModuleModule;
exports.DummyProductModuleModule = DummyProductModuleModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([dymmy_product_1.DummyProductEntity]),
        ],
        controllers: [dummy_product_controller_controller_1.DummyProductController],
        providers: [dummy_product_controller_service_1.DummyProductControllerService],
    })
], DummyProductModuleModule);
//# sourceMappingURL=dummy_product_module.module.js.map