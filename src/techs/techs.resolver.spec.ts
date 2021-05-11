import { Test, TestingModule } from '@nestjs/testing';
import { TechsResolver } from './techs.resolver';
import { TechsService } from './techs.service';

describe('TechsResolver', () => {
  let resolver: TechsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TechsResolver, TechsService],
    }).compile();

    resolver = module.get<TechsResolver>(TechsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
