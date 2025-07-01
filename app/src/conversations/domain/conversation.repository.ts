import { Conversation } from './conversation.entity';

export abstract class IConversationRepository {
  abstract save(conversation: Conversation): Promise<void>;
  abstract getHistory(userId: string): Promise<Conversation[]>;
}
