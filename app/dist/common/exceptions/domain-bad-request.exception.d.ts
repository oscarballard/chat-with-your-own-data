import { BadRequestException } from '@nestjs/common';
export declare class DomainBadRequestException extends BadRequestException {
    constructor(message: string);
}
