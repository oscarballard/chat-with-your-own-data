import { Inject, Injectable } from '@nestjs/common';
import { VectorStoreIndex } from 'llamaindex';
import { ChromaVectorStore } from '@llamaindex/chroma';
import { Conversation } from '../domain/conversation.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ConversationRepository {
    private chroma: ChromaVectorStore;

    constructor(@Inject('CONVERSATION_REPOSITORY')
    private readonly repo: Repository<Conversation>,) {
        this.chroma = new ChromaVectorStore({
            collectionName: 'documents',
            chromaClientParams: {
                path: process.env.CHROMA_URL || 'http://localhost:8000',
            },
        });
    }

    async save(conversation: Conversation): Promise<Conversation> {
        return await this.repo.save(conversation);
    }

    async ask(question: string, topK: number = 3): Promise<string> {
        const index = await VectorStoreIndex.fromVectorStore(this.chroma);
        const queryEngine = index.asQueryEngine({
            similarityTopK: topK,
        });

        const response = await queryEngine.query({
            query: question
        });
        return response.response;
    }
}
