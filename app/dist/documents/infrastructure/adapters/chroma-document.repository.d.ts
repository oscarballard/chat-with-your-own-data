import { DocumentRepository } from '../../domain/document.repository';
import { Document } from '../../domain/document.entity';
import { LlamaIndexService } from '../services/llamaindex.service';
export declare class ChromaDocumentRepository implements DocumentRepository {
    private readonly llamaIndex;
    constructor(llamaIndex: LlamaIndexService);
    save(document: Document): Promise<void>;
}
