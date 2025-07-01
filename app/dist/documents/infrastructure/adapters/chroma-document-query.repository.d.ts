import { DocumentQueryRepository } from '../../domain/document-query.repository';
export declare class ChromaDocumentQueryRepository implements DocumentQueryRepository {
    private readonly chromaUrl;
    private chroma;
    constructor(chromaUrl: string);
    query(question: string, topK: number, similarity: number): Promise<string>;
}
