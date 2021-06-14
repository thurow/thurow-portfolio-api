import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
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
    return this.techModel.find();
  }

  async findOne(id: ObjectId) {
    return this.techModel.findById(id);
  }

  async update(id: ObjectId, updateTechInput: UpdateTechInput) {
    return this.techModel.findByIdAndUpdate(id, updateTechInput, {
      new: true,
    });
  }

  async remove(id: ObjectId) {
    return this.techModel.findByIdAndRemove(id);
  }
}
