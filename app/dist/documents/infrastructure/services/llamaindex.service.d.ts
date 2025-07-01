export declare class LlamaIndexService {
    private chroma;
    constructor();
    indexDocument(id: string, content: string, metadata: Record<string, any>): Promise<void>;
}
