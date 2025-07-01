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
exports.QueryDocumentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class QueryDocumentDto {
}
exports.QueryDocumentDto = QueryDocumentDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Pregunta a realizar' }),
    __metadata("design:type", String)
], QueryDocumentDto.prototype, "question", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Cantidad de documentos similares', default: 3 }),
    __metadata("design:type", Number)
], QueryDocumentDto.prototype, "topK", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Similaridad mínima (0-1)',
        default: 0.8,
    }),
    __metadata("design:type", Number)
], QueryDocumentDto.prototype, "similarity", void 0);
//# sourceMappingURL=query-document.dto.js.map