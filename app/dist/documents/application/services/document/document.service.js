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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentService = void 0;
const common_1 = require("@nestjs/common");
const document_repository_1 = require("../../../domain/document.repository");
const document_entity_1 = require("../../../domain/document.entity");
const uuid_1 = require("uuid");
const pdf_parse_1 = __importDefault(require("pdf-parse"));
let DocumentService = class DocumentService {
    constructor(documentRepo) {
        this.documentRepo = documentRepo;
    }
    async upload(file, language) {
        let textContent = '';
        if (file.mimetype === 'application/pdf') {
            const data = await (0, pdf_parse_1.default)(file.buffer);
            textContent = data.text;
        }
        else if (file.mimetype === 'text/plain') {
            textContent = file.buffer.toString('utf-8');
        }
        else {
            throw new Error('Unsupported file type');
        }
        if (!textContent || textContent.trim().length < 10) {
            throw new Error('Empty or too small content');
        }
        const document = new document_entity_1.Document((0, uuid_1.v4)(), file.originalname, textContent, language, new Date(), { size: file.size });
        await this.documentRepo.save(document);
    }
};
exports.DocumentService = DocumentService;
exports.DocumentService = DocumentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('DocumentRepository')),
    __metadata("design:paramtypes", [document_repository_1.DocumentRepository])
], DocumentService);
//# sourceMappingURL=document.service.js.map