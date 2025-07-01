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
exports.ConversationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const conversation_entity_1 = require("../../domain/conversation.entity");
const document_query_repository_1 = require("../../../documents/domain/document-query.repository");
let ConversationService = class ConversationService {
    constructor(repo, queryRepo) {
        this.repo = repo;
        this.queryRepo = queryRepo;
    }
    async saveMessage(text, sender) {
        const conversation = new conversation_entity_1.Conversation();
        conversation.text = text;
        conversation.sender = sender;
        return await this.repo.save(conversation);
    }
    async getHistory() {
        return await this.repo.find({ order: { id: 'DESC' } });
    }
};
exports.ConversationService = ConversationService;
exports.ConversationService = ConversationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(conversation_entity_1.Conversation)),
    __param(1, (0, common_1.Inject)('DOCUMENT_QUERY_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        document_query_repository_1.DocumentQueryRepository])
], ConversationService);
//# sourceMappingURL=conversation.service.js.map