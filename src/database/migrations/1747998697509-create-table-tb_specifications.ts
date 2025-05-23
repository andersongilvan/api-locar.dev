import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableTbSpecifications1747998697509 implements MigrationInterface {
    name = 'CreateTableTbSpecifications1747998697509'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tb_specifications" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "description" varchar NOT NULL, "crated_at" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tb_specifications"`);
    }

}
