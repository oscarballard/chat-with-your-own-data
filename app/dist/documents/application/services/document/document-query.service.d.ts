import { DocumentQueryRepository } from 'src/documents/domain/document-query.repository';
export declare class DocumentQueryService {
    private readonly queryRepo;
    constructor(queryRepo: DocumentQueryRepository);
    query(question: string, topK: number, similarity: number): Promise<string>;
}
