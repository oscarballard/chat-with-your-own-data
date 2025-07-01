import { Inject, Injectable } from '@nestjs/common';
import { DocumentRepository } from '../../../domain/document.repository';
import { Document } from '../../../domain/document.entity';
import { v4 as uuidv4 } from 'uuid';
import pdfParse from 'pdf-parse';


@Injectable()
export class DocumentService {
  constructor(
    @Inject('DocumentRepository')
    private readonly documentRepo: DocumentRepository,
  ) {}

  async upload(
    file: Express.Multer.File,
    language: 'en' | 'es',
  ): Promise<void> {
    let textContent = '';

    if (file.mimetype === 'application/pdf') {
      const data = await pdfParse(file.buffer);
      textContent = data.text;
    } else if (file.mimetype === 'text/plain') {
      textContent = file.buffer.toString('utf-8');
    } else {
      throw new Error('Unsupported file type');
    }

    if (!textContent || textContent.trim().length < 10) {
      throw new Error('Empty or too small content');
    }

    const document = new Document(
      uuidv4(),
      file.originalname,
      textContent,
      language,
      new Date(),
      { size: file.size },
    );

    await this.documentRepo.save(document);
  }
}
