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
exports.ChromaDocumentRepository = void 0;
const common_1 = require("@nestjs/common");
const llamaindex_service_1 = require("../services/llamaindex.service");
let ChromaDocumentRepository = class ChromaDocumentRepository {
    constructor(llamaIndex) {
        this.llamaIndex = llamaIndex;
    }
    async save(document) {
        await this.llamaIndex.indexDocument(document.id, document.content, {
            filename: document.title,
            language: document.language,
            uploadedAt: document.uploadedAt.toISOString(),
        });
    }
};
exports.ChromaDocumentRepository = ChromaDocumentRepository;
exports.ChromaDocumentRepository = ChromaDocumentRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [llamaindex_service_1.LlamaIndexService])
], ChromaDocumentRepository);
//# sourceMappingURL=chroma-document.repository.js.map