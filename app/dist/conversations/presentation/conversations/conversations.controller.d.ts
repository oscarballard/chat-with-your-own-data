import { Sender } from 'src/common/constants/Sender';
import { ConversationService } from 'src/conversations/application/conversation/conversation.service';
export declare class ConversationsController {
    private readonly service;
    constructor(service: ConversationService);
    createMessage(body: {
        text: string;
        sender: Sender;
    }): Promise<import("../../domain/conversation.entity").Conversation>;
    getHistory(): Promise<import("../../domain/conversation.entity").Conversation[]>;
}
