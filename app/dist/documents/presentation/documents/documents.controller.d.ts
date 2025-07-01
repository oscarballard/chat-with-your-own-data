import { DocumentService } from '../../application/services/document/document.service';
import { QueryDocumentDto } from './dto/query-document.dto';
import { DocumentQueryService } from 'src/documents/application/services/document/document-query.service';
export declare class DocumentsController {
    private readonly documentService;
    private readonly documentQueryService;
    constructor(documentService: DocumentService, documentQueryService: DocumentQueryService);
    upload(file: Express.Multer.File, language: 'en' | 'es'): Promise<{
        message: string;
    }>;
    query(body: QueryDocumentDto): Promise<{
        context: string;
    }>;
}
