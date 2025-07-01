import { Repository } from 'typeorm';
import { Conversation } from 'src/conversations/domain/conversation.entity';
import { Sender } from 'src/common/constants/Sender';
import { DocumentQueryRepository } from 'src/documents/domain/document-query.repository';
export declare class ConversationService {
    private readonly repo;
    private readonly queryRepo;
    constructor(repo: Repository<Conversation>, queryRepo: DocumentQueryRepository);
    saveMessage(text: string, sender: Sender): Promise<Conversation>;
    getHistory(): Promise<Conversation[]>;
}
