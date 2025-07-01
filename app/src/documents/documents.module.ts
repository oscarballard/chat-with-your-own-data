import { Module } from '@nestjs/common';
import { DocumentsController } from './presentation/documents/documents.controller';
import { DocumentService } from './application/services/document/document.service';
import { LlamaIndexService } from './infrastructure/services/llamaindex.service';
import { ChromaDocumentRepository } from './infrastructure/adapters/chroma-document.repository';
import { LlamaIndexEmbeddingProvider } from 'src/common/config/llamaindex.provider';
import { DocumentQueryService } from './application/services/document/document-query.service';
import { ChromaDocumentQueryRepository } from './infrastructure/adapters/chroma-document-query.repository';

@Module({
  controllers: [DocumentsController],
  providers: [
    DocumentService,
    DocumentQueryService,
    LlamaIndexService,
    LlamaIndexEmbeddingProvider,
    {
      provide: 'DocumentRepository',
      useClass: ChromaDocumentRepository,
    },
    {
      provide: 'DocumentQueryRepository',
      useClass: ChromaDocumentQueryRepository,
    },
  ],
})
export class DocumentsModule { }
