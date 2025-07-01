import { Conversation } from '../domain/conversation.entity';
import { Repository } from 'typeorm';
export declare class ConversationRepository {
    private readonly repo;
    private chroma;
    constructor(repo: Repository<Conversation>);
    save(conversation: Conversation): Promise<Conversation>;
    ask(question: string, topK?: number): Promise<string>;
}
