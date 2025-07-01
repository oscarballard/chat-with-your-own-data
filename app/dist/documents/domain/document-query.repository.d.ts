export declare abstract class DocumentQueryRepository {
    abstract query(question: string, topK: number, similarity: number): Promise<string>;
}
