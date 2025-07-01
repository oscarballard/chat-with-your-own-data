import { Document } from './document.entity';

export abstract class DocumentRepository {
  abstract save(document: Document): Promise<void>;
}