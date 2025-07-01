import { DataSource } from 'typeorm';
import { Conversation } from 'src/conversations/domain/conversation.entity';
export declare const AppDataSource: DataSource;
export declare const databaseProviders: {
    provide: string;
    useFactory: () => Promise<DataSource>;
}[];
export declare const repositoryProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Conversation>;
    inject: string[];
}[];
export default AppDataSource;
