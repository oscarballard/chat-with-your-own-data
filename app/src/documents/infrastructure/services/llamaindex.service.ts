import { Injectable } from '@nestjs/common';
import { VectorStoreIndex, Document as LlamaDocument } from 'llamaindex';
import { ChromaVectorStore } from '@llamaindex/chroma';

@Injectable()
export class LlamaIndexService {
  private chroma: ChromaVectorStore;

  constructor() {
    this.chroma = new ChromaVectorStore({
      collectionName: 'documents',
      chromaClientParams: {
        path: process.env.CHROMA_URL || 'http://localhost:8000',
      },
    });
  }

  async indexDocument(
    id: string,
    content: string,
    metadata: Record<string, any>,
  ) {
    const index = await VectorStoreIndex.fromVectorStore(this.chroma);

    const doc = new LlamaDocument({
      text: content,
      metadata: { id, ...metadata },
    });

    await index.insert(doc);
  }
}
