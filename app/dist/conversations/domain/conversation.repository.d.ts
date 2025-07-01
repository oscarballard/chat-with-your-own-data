import { Conversation } from './conversation.entity';
export declare abstract class IConversationRepository {
    abstract save(conversation: Conversation): Promise<void>;
    abstract getHistory(userId: string): Promise<Conversation[]>;
}
