// src/modules/conversations/application/conversation.service.ts
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Conversation } from 'src/conversations/domain/conversation.entity';
import { Sender } from 'src/common/constants/Sender';
import { DocumentQueryRepository } from 'src/documents/domain/document-query.repository';  // Importamos el repositorio necesario

@Injectable()
export class ConversationService {
  constructor(
    @InjectRepository(Conversation)  // Inyectamos el repositorio de Conversation
    private readonly repo: Repository<Conversation>,

    @Inject('DOCUMENT_QUERY_REPOSITORY')  // Inyectamos DocumentQueryRepository
    private readonly queryRepo: DocumentQueryRepository,  
  ) {}

  // Método para guardar una conversación
  async saveMessage(text: string, sender: Sender): Promise<Conversation> {
    const conversation = new Conversation();
    conversation.text = text;
    conversation.sender = sender;

    return await this.repo.save(conversation);  // Guardamos la conversación en el repositorio
  }

  // Método para obtener el historial de conversaciones
  async getHistory(): Promise<Conversation[]> {
    return await this.repo.find({ order: { id: 'DESC' } });  // Consultamos el historial de conversaciones
  }

}
