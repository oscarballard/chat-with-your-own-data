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
exports.DocumentsController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const document_service_1 = require("../../application/services/document/document.service");
const swagger_1 = require("@nestjs/swagger");
const upload_document_dto_1 = require("./dto/upload-document.dto");
const query_document_dto_1 = require("./dto/query-document.dto");
const document_query_service_1 = require("../../application/services/document/document-query.service");
let DocumentsController = class DocumentsController {
    constructor(documentService, documentQueryService) {
        this.documentService = documentService;
        this.documentQueryService = documentQueryService;
    }
    async upload(file, language) {
        if (!file)
            throw new common_1.BadRequestException('File required');
        if (!language)
            throw new common_1.BadRequestException('Language required');
        await this.documentService.upload(file, language);
        return { message: 'Document uploaded successfully' };
    }
    async query(body) {
        const { question, topK, similarity } = body;
        const context = await this.documentQueryService.query(question, topK, similarity);
        return { context };
    }
};
exports.DocumentsController = DocumentsController;
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({ type: upload_document_dto_1.UploadDocumentDto }),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)('language')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], DocumentsController.prototype, "upload", null);
__decorate([
    (0, common_1.Post)('query'),
    (0, swagger_1.ApiBody)({ type: query_document_dto_1.QueryDocumentDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_document_dto_1.QueryDocumentDto]),
    __metadata("design:returntype", Promise)
], DocumentsController.prototype, "query", null);
exports.DocumentsController = DocumentsController = __decorate([
    (0, common_1.Controller)('documents'),
    __metadata("design:paramtypes", [document_service_1.DocumentService, document_query_service_1.DocumentQueryService])
], DocumentsController);
//# sourceMappingURL=documents.controller.js.map