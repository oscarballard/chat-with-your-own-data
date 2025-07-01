import { OpenAIEmbedding } from '@llamaindex/openai';
import { OpenAI } from '@llamaindex/openai';
import { Settings } from 'llamaindex';

export const LlamaIndexEmbeddingProvider = {
  provide: 'LLAMA_INDEX_EMBEDDING',
  useFactory: () => {
    Settings.embedModel = new OpenAIEmbedding({
      apiKey: process.env.OPENAI_API_KEY, 
      model: "text-embedding-3-small",
    });

    Settings.llm = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
      model: 'gpt-3.5-turbo', 
    });

    return Settings.embedModel;
  },
};
