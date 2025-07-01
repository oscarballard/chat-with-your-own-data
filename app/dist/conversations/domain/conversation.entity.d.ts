import { Sender } from 'src/common/constants/Sender';
import { BaseEntity } from 'typeorm';
export declare class Conversation extends BaseEntity {
    id: number;
    text: string;
    sender: Sender;
}
