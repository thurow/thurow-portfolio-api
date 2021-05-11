import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTechInput } from './dto/create-tech.input';
import { UpdateTechInput } from './dto/update-tech.input';
import { Tech, TechDocument } from './entities/tech.entity';

@Injectable()
export class TechsService {
  constructor(@InjectModel(Tech.name) private techModel: Model<TechDocument>) {}

  async create(createTechInput: CreateTechInput): Promise<Tech> {
    return this.techModel.create(createTechInput);
  }

  async findAll(): Promise<Tech[]> {
    return this.techModel.find().lean();
  }

  async findOne(id: string) {
    return this.techModel.findById(id);
  }

  update(id: string, updateTechInput: UpdateTechInput) {
    return this.techModel.findByIdAndUpdate(id, updateTechInput, {
      new: true,
    });
  }

  remove(id: string) {
    return this.techModel.findByIdAndRemove(id);
  }
}
