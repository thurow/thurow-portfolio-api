import { Module } from '@nestjs/common';
import { TechsService } from './techs.service';
import { TechsResolver } from './techs.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Tech, TechSchema } from './entities/tech.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tech.name, schema: TechSchema }]),
  ],
  providers: [TechsResolver, TechsService],
})
export class TechsModule {}
