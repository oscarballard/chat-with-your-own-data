import { Document } from './document.entity';
export declare abstract class DocumentRepository {
    abstract save(document: Document): Promise<void>;
}
