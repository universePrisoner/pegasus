import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './Task/task.module';



const config = require('dotenv').config().parsed;


const envValues: TypeOrmModuleOptions = {
  type: 'postgres',

  host: config['POSTGRES_HOST'],
  port: parseInt(config['POSTGRES_PORT']),
  username: config['POSTGRES_USER'],
  password: config['POSTGRES_PASSWORD'],
  database: config['POSTGRES_DATABASE'],

  entities: [join(__dirname, '**', '*.entity{.ts,.js}')],

  migrationsTableName: 'migration',

  migrations: ['src/migration/*.ts'],

  cli: {
    migrationsDir: 'src/migration',
  },

  ssl: false,
};

@Module({
  imports: [
    TypeOrmModule.forRoot(envValues),
    TaskModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
