"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LlamaIndexEmbeddingProvider = void 0;
const openai_1 = require("@llamaindex/openai");
const openai_2 = require("@llamaindex/openai");
const llamaindex_1 = require("llamaindex");
exports.LlamaIndexEmbeddingProvider = {
    provide: 'LLAMA_INDEX_EMBEDDING',
    useFactory: () => {
        llamaindex_1.Settings.embedModel = new openai_1.OpenAIEmbedding({
            apiKey: process.env.OPENAI_API_KEY,
            model: "text-embedding-3-small",
        });
        llamaindex_1.Settings.llm = new openai_2.OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
            model: 'gpt-3.5-turbo',
        });
        return llamaindex_1.Settings.embedModel;
    },
};
//# sourceMappingURL=llamaindex.provider.js.map