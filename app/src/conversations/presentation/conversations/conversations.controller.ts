// src/modules/conversations/presentation/conversations.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
} from '@nestjs/common';
import { Sender } from 'src/common/constants/Sender';
import { ConversationService } from 'src/conversations/application/conversation/conversation.service';

@Controller('conversations')
export class ConversationsController {
  constructor(private readonly service: ConversationService) {}

  @Post()
  async createMessage(
    @Body() body: { text: string; sender: Sender },
  ) {
    return await this.service.saveMessage(body.text, body.sender);
  }

  @Get('history')
  async getHistory() {
    return await this.service.getHistory();
  }
}
