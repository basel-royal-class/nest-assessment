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
exports.WasabiService = void 0;
const common_1 = require("@nestjs/common");
const client_s3_1 = require("@aws-sdk/client-s3");
const config_1 = require("@nestjs/config");
let WasabiService = class WasabiService {
    configService;
    s3Client;
    bucketName;
    constructor(configService) {
        this.configService = configService;
        this.s3Client = new client_s3_1.S3Client({
            region: this.configService.get('WAS_DEFAULT_REGION'),
            endpoint: this.configService.get('WAS_URL'),
            credentials: {
                accessKeyId: this.configService.get('WAS_ACCESS_KEY_ID'),
                secretAccessKey: this.configService.get('WAS_SECRET_ACCESS_KEY'),
            },
        });
        this.bucketName = this.configService.get('WAS_BUCKET');
    }
    async uploadFile(file) {
        const fileKey = `uploads/${Date.now()}-${file.originalname}`;
        await this.s3Client.send(new client_s3_1.PutObjectCommand({
            Bucket: this.bucketName,
            Key: fileKey,
            Body: file.buffer,
            ContentType: file.mimetype,
        }));
        return `https://${this.bucketName}.s3.wasabisys.com/${fileKey}`;
    }
};
exports.WasabiService = WasabiService;
exports.WasabiService = WasabiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], WasabiService);
//# sourceMappingURL=wasabi.helper.js.map