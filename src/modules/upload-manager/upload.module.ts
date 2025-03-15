import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UploadController } from './upload.controller';
import { WasabiService } from './helpers/wasabi.helper';

@Module({
    imports: [
        TypeOrmModule.forFeature([]),
    ],
    controllers: [UploadController],
    providers: [WasabiService],
})
export class UploadModule { }
