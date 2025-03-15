import { WasabiService } from './helpers/wasabi.helper';
export declare class UploadController {
    private readonly wasabiService;
    constructor(wasabiService: WasabiService);
    uploadToWasabi(file: Express.Multer.File): Promise<{
        message: string;
        fileUrl: string;
    }>;
}
