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
exports.CartsRepository = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const cart_entity_1 = require("./entity/cart.entity");
const cart_item_entity_1 = require("../cart_item/entity/cart.item.entity");
const cart_items_repository_1 = require("../cart_item/cart.items.repository");
let CartsRepository = class CartsRepository extends typeorm_1.Repository {
    dataSource;
    cartItemsRepository;
    constructor(dataSource, cartItemsRepository) {
        super(cart_entity_1.CartEntity, dataSource.createEntityManager());
        this.dataSource = dataSource;
        this.cartItemsRepository = cartItemsRepository;
    }
    async createCart(createCartDto) {
        const { user_id, cartItems } = createCartDto;
        const cart = this.create({
            user_id
        });
        await this.save(cart);
        if (cartItems) {
            for (const item of cartItems) {
                const cartItem = new cart_item_entity_1.CartItemEntity();
                cartItem.product_id = item.product_id;
                cartItem.quantity = item.quantity;
                cartItem.price = item.price;
                cartItem.cart_id = cart.id;
                await this.cartItemsRepository.save(cartItem);
            }
        }
        const cartDB = await this.findOne({ where: { id: cart.id }, relations: ['items'] });
        if (!cartDB) {
            throw new Error('Cart not found');
        }
        return cartDB;
    }
    async getCarts() {
        return await this.find({ relations: ['user', 'items'] });
    }
    async updateCart(updateCartDto) {
        const { id, cartItems } = updateCartDto;
        const cart = await this.findOne({ where: { id }, relations: ['items'] });
        if (!cart) {
            throw new Error('Cart not found');
        }
        if (cartItems) {
            await this.cartItemsRepository.delete({ cart_id: cart.id });
            for (const item of cartItems) {
                const cartItem = new cart_item_entity_1.CartItemEntity();
                cartItem.product_id = item.product_id;
                cartItem.quantity = item.quantity;
                cartItem.price = item.price;
                cartItem.cart_id = cart.id;
                await this.cartItemsRepository.save(cartItem);
            }
        }
        const updatedCart = await this.findOne({ where: { id: cart.id }, relations: ['items'] });
        if (!updatedCart) {
            throw new Error('Updated cart not found');
        }
        return updatedCart;
    }
};
exports.CartsRepository = CartsRepository;
exports.CartsRepository = CartsRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource, cart_items_repository_1.CartItemsRepository])
], CartsRepository);
//# sourceMappingURL=cart.repository.js.map