import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableTbCategories1747954792758 implements MigrationInterface {
    name = 'CreateTableTbCategories1747954792758'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tb_categories" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "description" varchar NOT NULL, "crated_at" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tb_categories"`);
    }
}
