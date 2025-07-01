import { Module } from '@nestjs/common';
import { ConversationsController } from './presentation/conversations/conversations.controller';
import { ConversationService } from './application/conversation/conversation.service';

@Module({
  controllers: [ConversationsController],
  providers: [ConversationService]
})
export class ConversationsModule {}
