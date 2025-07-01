// src/modules/conversations/conversations.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Conversation } from 'src/conversations/domain/conversation.entity';
import { DocumentsModule } from '../documents/documents.module';  // Importa el módulo de documentos para acceder a sus repositorios
import { ConversationService } from './application/conversation/conversation.service';
import { ConversationRepository } from './infrastructure/conversation.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Conversation]), // Asegúrate de que `Conversation` esté registrado correctamente
    DocumentsModule,  // Importa DocumentsModule para acceder a `DocumentQueryRepository`
  ],
  providers: [
    ConversationService,
    ConversationRepository,  // Registra `ConversationRepository` para ser inyectado
  ],
  exports: [ConversationService],
})
export class ConversationsModule {}
