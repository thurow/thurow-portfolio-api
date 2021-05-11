import { Injectable } from '@nestjs/common';
import { CreateTechInput } from './dto/create-tech.input';
import { UpdateTechInput } from './dto/update-tech.input';

@Injectable()
export class TechsService {
  create(createTechInput: CreateTechInput) {
    return 'This action adds a new tech';
  }

  findAll() {
    return `This action returns all techs`;
  }

  findOne(id: string) {
    return `This action returns a #${id} tech`;
  }

  update(id: string, updateTechInput: UpdateTechInput) {
    return `This action updates a #${id} tech`;
  }

  remove(id: string) {
    return `This action removes a #${id} tech`;
  }
}
