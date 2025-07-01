import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateConversationTable1751349305419 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
