import { Module } from '@nestjs/common';
import { TechsService } from './techs.service';
import { TechsResolver } from './techs.resolver';

@Module({
  providers: [TechsResolver, TechsService],
})
export class TechsModule {}
