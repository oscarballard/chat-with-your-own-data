"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateConversationTable1751349305419 = void 0;
class CreateConversationTable1751349305419 {
    constructor() {
        this.name = 'CreateConversationTable1751349305419';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TYPE "public"."conversations_sender_enum" AS ENUM('user', 'bot')`);
        await queryRunner.query(`CREATE TABLE "conversations" ("id" SERIAL NOT NULL, "text" character varying NOT NULL, "sender" "public"."conversations_sender_enum" NOT NULL, CONSTRAINT "PK_ee34f4f7ced4ec8681f26bf04ef" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "conversations"`);
        await queryRunner.query(`DROP TYPE "public"."conversations_sender_enum"`);
    }
}
exports.CreateConversationTable1751349305419 = CreateConversationTable1751349305419;
//# sourceMappingURL=1751349305419-CreateConversationTable.js.map