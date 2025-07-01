import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { Conversation } from 'src/conversations/domain/conversation.entity';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Conversation],
  migrations: ['dist/migrations/*.js'],
  synchronize: process.env.DB_SYNCHRONIZE === 'true',
});

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
      }
      return AppDataSource;
    },
  },
];

export const repositoryProviders = [
  {
    provide: 'CONVERSATION_REPOSITORY',
    useFactory: (dataSource: DataSource) => {
      const repository = dataSource.getRepository(Conversation);
      return repository;
    },
    inject: ['DATA_SOURCE'],
  }
];

export default AppDataSource;