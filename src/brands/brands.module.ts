import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsController } from './brands.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brands } from './entities/brand.entity';
import { BrandRepository } from './repository/brand-repository';

@Module({
  imports: [TypeOrmModule.forFeature([Brands, BrandRepository])],
  controllers: [BrandsController],
  providers: [BrandsService],
})
export class BrandsModule {}
