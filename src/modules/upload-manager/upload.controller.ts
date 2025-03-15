import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { WasabiService } from './helpers/wasabi.helper';

@Controller('upload')
export class UploadController {
    constructor(private readonly wasabiService: WasabiService) { }

    @Post('wasabi')
    @UseInterceptors(FileInterceptor('file'))
    async uploadToWasabi(@UploadedFile() file: Express.Multer.File) {
        const fileUrl = await this.wasabiService.uploadFile(file);
        return { message: 'File uploaded successfully', fileUrl };
    }
}
