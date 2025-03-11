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
exports.OrdersRepository = void 0;
const typeorm_1 = require("typeorm");
const order_entity_1 = require("./entity/order.entity");
const common_1 = require("@nestjs/common");
const order_item_entity_1 = require("../order_items/entity/order.item.entity");
const order_items_repository_1 = require("../order_items/order.items.repository");
let OrdersRepository = class OrdersRepository extends typeorm_1.Repository {
    dataSource;
    orderItemsRepositoy;
    constructor(dataSource, orderItemsRepositoy) {
        super(order_entity_1.OrderEntity, dataSource.createEntityManager());
        this.dataSource = dataSource;
        this.orderItemsRepositoy = orderItemsRepositoy;
    }
    async createOrder(createOrderDto) {
        const { total_amount, status, orderItems, user_id } = createOrderDto;
        const order = this.create({
            user_id,
            total_amount,
            status,
        });
        await this.save(order);
        if (orderItems) {
            for (const item of orderItems) {
                const orderItem = new order_item_entity_1.OrderItemEntity();
                orderItem.product_id = item.product_id;
                orderItem.quantity = item.quantity;
                orderItem.price = item.price;
                orderItem.order_id = order.id;
                await this.orderItemsRepositoy.save(orderItem);
            }
        }
        const orderDB = await this.findOne({ where: { id: order.id }, relations: ['items'] });
        if (!orderDB) {
            throw new Error('Order not found');
        }
        return orderDB;
    }
};
exports.OrdersRepository = OrdersRepository;
exports.OrdersRepository = OrdersRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource, order_items_repository_1.OrderItemsRepository])
], OrdersRepository);
//# sourceMappingURL=orders.repository.js.map