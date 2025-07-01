import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateConversationTable1751349305419 implements MigrationInterface {
    name = 'CreateConversationTable1751349305419'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."conversations_sender_enum" AS ENUM('user', 'bot')`);
        await queryRunner.query(`CREATE TABLE "conversations" ("id" SERIAL NOT NULL, "text" character varying NOT NULL, "sender" "public"."conversations_sender_enum" NOT NULL, CONSTRAINT "PK_ee34f4f7ced4ec8681f26bf04ef" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "conversations"`);
        await queryRunner.query(`DROP TYPE "public"."conversations_sender_enum"`);
    }

}
