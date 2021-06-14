import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId, UpdateQuery } from 'mongoose';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { Project, ProjectDocument } from './entities/project.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<ProjectDocument>,
  ) {}

  async create(createProjectInput: CreateProjectInput) {
    return this.projectModel.create(createProjectInput);
  }

  async findAll(): Promise<Project[]> {
    return this.projectModel.find();
  }

  async findOne(id: ObjectId) {
    return this.projectModel.findById(id);
  }

  async update(id: ObjectId, updateProjectInput: UpdateProjectInput) {
    return this.projectModel.findByIdAndUpdate(
      id,
      (updateProjectInput as unknown) as UpdateQuery<ProjectDocument>,
      {
        new: true,
      },
    );
  }

  remove(id: ObjectId) {
    return this.projectModel.findByIdAndRemove(id);
  }
}
