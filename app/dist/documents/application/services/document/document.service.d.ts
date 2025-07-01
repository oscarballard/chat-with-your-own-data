import { DocumentRepository } from '../../../domain/document.repository';
export declare class DocumentService {
    private readonly documentRepo;
    constructor(documentRepo: DocumentRepository);
    upload(file: Express.Multer.File, language: 'en' | 'es'): Promise<void>;
}
