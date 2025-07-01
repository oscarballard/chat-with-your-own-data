import { BadRequestException } from '@nestjs/common';

export class DomainBadRequestException extends BadRequestException {
  constructor(message: string) {
    super(`[Domain Error] ${message}`);
  }
}