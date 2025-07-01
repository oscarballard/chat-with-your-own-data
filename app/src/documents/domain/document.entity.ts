export class Document {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly content: string,
    public readonly language: 'en' | 'es',
    public readonly uploadedAt: Date,
    public readonly metadata?: Record<string, any>,
  ) {}
}