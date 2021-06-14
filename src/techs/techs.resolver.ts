import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { TechsService } from './techs.service';
import { Tech } from './entities/tech.entity';
import { CreateTechInput } from './dto/create-tech.input';
import { UpdateTechInput } from './dto/update-tech.input';
import { ObjectId } from 'mongoose';

@Resolver(() => Tech)
export class TechsResolver {
  constructor(private readonly techsService: TechsService) {}

  @Mutation(() => Tech)
  createTech(@Args('createTechInput') createTechInput: CreateTechInput) {
    return this.techsService.create(createTechInput);
  }

  @Query(() => [Tech], { name: 'techs' })
  findAll() {
    return this.techsService.findAll();
  }

  @Query(() => Tech, { name: 'tech' })
  findOne(@Args('id', { type: () => ID }) id: ObjectId) {
    return this.techsService.findOne(id);
  }

  @Mutation(() => Tech)
  updateTech(@Args('updateTechInput') updateTechInput: UpdateTechInput) {
    return this.techsService.update(updateTechInput.id, updateTechInput);
  }

  @Mutation(() => Tech)
  removeTech(@Args('id', { type: () => ID }) id: ObjectId) {
    return this.techsService.remove(id);
  }
}
