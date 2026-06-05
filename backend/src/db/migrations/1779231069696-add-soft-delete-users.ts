import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddSoftDeleteUsers1779231069696 implements MigrationInterface {
  name = 'AddSoftDeleteUsers1779231069696';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(`ALTER TABLE "user" ADD "deleted_at" TIMESTAMP`);
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "id" DROP DEFAULT`,
    );
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "deleted_at"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updated_at"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "created_at"`);
  }
}
