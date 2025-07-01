import { Injectable } from '@nestjs/common';
import { DocumentRepository } from '../../domain/document.repository';
import { Document } from '../../domain/document.entity';
import { LlamaIndexService } from '../services/llamaindex.service';

@Injectable()
export class ChromaDocumentRepository implements DocumentRepository {
  constructor(private readonly llamaIndex: LlamaIndexService) {}

  async save(document: Document): Promise<void> {
    await this.llamaIndex.indexDocument(document.id, document.content, {
      filename: document.title,
      language: document.language,
      uploadedAt: document.uploadedAt.toISOString(),
    });
  }
}