"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsModule = void 0;
const common_1 = require("@nestjs/common");
const documents_controller_1 = require("./presentation/documents/documents.controller");
const document_service_1 = require("./application/services/document/document.service");
const llamaindex_service_1 = require("./infrastructure/services/llamaindex.service");
const chroma_document_repository_1 = require("./infrastructure/adapters/chroma-document.repository");
const llamaindex_provider_1 = require("../common/config/llamaindex.provider");
const document_query_service_1 = require("./application/services/document/document-query.service");
const chroma_document_query_repository_1 = require("./infrastructure/adapters/chroma-document-query.repository");
let DocumentsModule = class DocumentsModule {
};
exports.DocumentsModule = DocumentsModule;
exports.DocumentsModule = DocumentsModule = __decorate([
    (0, common_1.Module)({
        controllers: [documents_controller_1.DocumentsController],
        exports: [document_service_1.DocumentService, document_query_service_1.DocumentQueryService],
        providers: [
            document_service_1.DocumentService,
            document_query_service_1.DocumentQueryService,
            llamaindex_service_1.LlamaIndexService,
            llamaindex_provider_1.LlamaIndexEmbeddingProvider,
            {
                provide: 'DocumentRepository',
                useClass: chroma_document_repository_1.ChromaDocumentRepository,
            },
            {
                provide: 'DocumentQueryRepository',
                useClass: chroma_document_query_repository_1.ChromaDocumentQueryRepository,
            },
            {
                provide: 'CHROMA_URL',
                useValue: process.env.CHROMA_URL || 'http://localhost:8000',
            },
        ],
    })
], DocumentsModule);
//# sourceMappingURL=documents.module.js.map