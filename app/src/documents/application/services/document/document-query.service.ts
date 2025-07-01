import { Inject, Injectable } from '@nestjs/common';
import { DocumentQueryRepository } from 'src/documents/domain/document-query.repository';

@Injectable()
export class DocumentQueryService {
  constructor(
    @Inject('DocumentQueryRepository')
    private readonly queryRepo: DocumentQueryRepository,
  ) {}

  async query(
    question: string,
    topK: number,
    similarity: number
  ): Promise<string> {
    return this.queryRepo.query(question, topK, similarity);
  }
}
