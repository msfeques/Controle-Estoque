import { DataSource } from 'typeorm';
import type { DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';

config();

const DataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + '/entities/*.ts'],
  migrations: [__dirname + '/migrations/*.ts'],
  synchronize: false,
};

export default new DataSource(DataSourceOptions);
