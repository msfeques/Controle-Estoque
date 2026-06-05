import { MigrationInterface, QueryRunner } from 'typeorm';

export class $npmConfigName1778714785495 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "user" (
    "id" uuid NOT NULL,
    "name" character varying NOT NULL,
    "email" character varying NOT NULL,
    "password" character varying NOT NULL,
    CONSTRAINT user_pk_id PRIMARY KEY (id),
    CONSTRAINT user_email_unique UNIQUE (email)
    
)`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS user`);
  }
}
