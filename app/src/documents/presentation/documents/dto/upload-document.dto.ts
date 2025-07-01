import { ApiProperty } from '@nestjs/swagger';

export class UploadDocumentDto {
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'Archivo a subir',
  })
  file: any;

  @ApiProperty({
    enum: ['en', 'es'],
    description: 'Idioma del documento',
  })
  language: 'en' | 'es';
}
