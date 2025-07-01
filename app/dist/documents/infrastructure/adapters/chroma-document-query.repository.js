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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChromaDocumentQueryRepository = void 0;
const common_1 = require("@nestjs/common");
const chroma_1 = require("@llamaindex/chroma");
const llamaindex_1 = require("llamaindex");
let ChromaDocumentQueryRepository = class ChromaDocumentQueryRepository {
    constructor(chromaUrl) {
        this.chromaUrl = chromaUrl;
        this.chroma = new chroma_1.ChromaVectorStore({
            collectionName: 'documents',
            chromaClientParams: {
                path: this.chromaUrl || 'http://localhost:8000',
            },
        });
    }
    async query(question, topK, similarity) {
        try {
            const index = await llamaindex_1.VectorStoreIndex.fromVectorStore(this.chroma);
            const queryEngine = index.asQueryEngine({
                similarityTopK: topK,
            });
            const response = await queryEngine.query({
                query: question
            });
            return response.response;
        }
        catch (err) {
            console.error('Error en ChromaDocumentQueryRepository.query:', err);
            throw new Error('No se pudo realizar la consulta');
        }
    }
};
exports.ChromaDocumentQueryRepository = ChromaDocumentQueryRepository;
exports.ChromaDocumentQueryRepository = ChromaDocumentQueryRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('CHROMA_URL')),
    __metadata("design:paramtypes", [String])
], ChromaDocumentQueryRepository);
//# sourceMappingURL=chroma-document-query.repository.js.map