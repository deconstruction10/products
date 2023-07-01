import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrandsModule } from './brands/brands.module';
import { SeriesModule } from './series/series.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import ormConfig from '../ormconfig';
@Module({
  imports: [TypeOrmModule.forRoot(ormConfig), BrandsModule, SeriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
