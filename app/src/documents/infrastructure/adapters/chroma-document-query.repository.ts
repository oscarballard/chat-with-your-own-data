import { Injectable, Inject } from '@nestjs/common';
import { DocumentQueryRepository } from '../../domain/document-query.repository';
import { ChromaVectorStore } from '@llamaindex/chroma';
import { VectorStoreIndex } from 'llamaindex';

@Injectable()
export class ChromaDocumentQueryRepository implements DocumentQueryRepository {
    private chroma: ChromaVectorStore;

    constructor(
        @Inject('CHROMA_URL') private readonly chromaUrl: string
    ) {
        this.chroma = new ChromaVectorStore({
            collectionName: 'documents',
            chromaClientParams: {
                path: this.chromaUrl || 'http://localhost:8000',
            },
        });
    }

    async query(
        question: string,
        topK: number,
        similarity: number
    ): Promise<string> {
        try {
            const index = await VectorStoreIndex.fromVectorStore(this.chroma);

            const queryEngine = index.asQueryEngine({
                similarityTopK: topK,
            });

            const response = await queryEngine.query({
                query: question
            });

            // nota: LlamaIndex no soporta score filtering de forma nativa
            return response.response;
        } catch (err) {
            console.error('Error en ChromaDocumentQueryRepository.query:', err);
            throw new Error('No se pudo realizar la consulta');
        }
    }
}
