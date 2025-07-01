import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocumentsModule } from './documents/documents.module';
import { ConversationsModule } from './conversations/conversations.module';

@Module({
  imports: [DocumentsModule, ConversationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
