export declare class Document {
    readonly id: string;
    readonly title: string;
    readonly content: string;
    readonly language: 'en' | 'es';
    readonly uploadedAt: Date;
    readonly metadata?: Record<string, any>;
    constructor(id: string, title: string, content: string, language: 'en' | 'es', uploadedAt: Date, metadata?: Record<string, any>);
}
