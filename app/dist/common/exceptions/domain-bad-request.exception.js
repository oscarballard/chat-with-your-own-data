"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainBadRequestException = void 0;
const common_1 = require("@nestjs/common");
class DomainBadRequestException extends common_1.BadRequestException {
    constructor(message) {
        super(`[Domain Error] ${message}`);
    }
}
exports.DomainBadRequestException = DomainBadRequestException;
//# sourceMappingURL=domain-bad-request.exception.js.map