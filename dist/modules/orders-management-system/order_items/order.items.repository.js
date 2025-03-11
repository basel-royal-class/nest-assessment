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
exports.OrderItemsRepository = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const order_item_entity_1 = require("./entity/order.item.entity");
let OrderItemsRepository = class OrderItemsRepository extends typeorm_1.Repository {
    dataSource;
    constructor(dataSource) {
        super(order_item_entity_1.OrderItemEntity, dataSource.createEntityManager());
        this.dataSource = dataSource;
    }
    async createOrder(createOrderItemDto) {
        const { order_id, product_id, quantity, price } = createOrderItemDto;
        const orderItem = this.create({
            order_id,
            product_id,
            quantity,
            price
        });
        const orderItemDB = await this.save(orderItem);
        return orderItemDB;
    }
};
exports.OrderItemsRepository = OrderItemsRepository;
exports.OrderItemsRepository = OrderItemsRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], OrderItemsRepository);
//# sourceMappingURL=order.items.repository.js.map