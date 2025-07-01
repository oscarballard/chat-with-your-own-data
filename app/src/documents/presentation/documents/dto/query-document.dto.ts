import { ApiProperty } from '@nestjs/swagger';

export class QueryDocumentDto {
  @ApiProperty({ description: 'Pregunta a realizar' })
  question: string;

  @ApiProperty({ description: 'Cantidad de documentos similares', default: 3 })
  topK: number;

  @ApiProperty({
    description: 'Similaridad mínima (0-1)',
    default: 0.8,
  })
  similarity: number;
}
