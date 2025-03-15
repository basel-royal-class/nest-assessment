import { ConfigService } from '@nestjs/config';
export declare class WasabiService {
    private configService;
    private s3Client;
    private bucketName;
    constructor(configService: ConfigService);
    uploadFile(file: Express.Multer.File): Promise<string>;
}
