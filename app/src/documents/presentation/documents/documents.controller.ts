import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Body,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { DocumentService } from '../../application/services/document/document.service';
import { ApiConsumes, ApiBody } from '@nestjs/swagger';
import { UploadDocumentDto } from './dto/upload-document.dto';
import { QueryDocumentDto } from './dto/query-document.dto';
import { DocumentQueryService } from 'src/documents/application/services/document/document-query.service';

@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentService: DocumentService, private readonly documentQueryService: DocumentQueryService,
  ) { }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: UploadDocumentDto })
  async upload(
    @UploadedFile() file: Express.Multer.File,
    @Body('language') language: 'en' | 'es',
  ) {
    if (!file) throw new BadRequestException('File required');
    if (!language) throw new BadRequestException('Language required');

    await this.documentService.upload(file, language);
    return { message: 'Document uploaded successfully' };
  }

  @Post('query')
  @ApiBody({ type: QueryDocumentDto })
  async query(@Body() body: QueryDocumentDto) {
    const { question, topK, similarity } = body;
    const context = await this.documentQueryService.query(
      question,
      topK,
      similarity,
    );
    return { context };
  }
}
