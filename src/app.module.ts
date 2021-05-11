import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { TechsModule } from './techs/techs.module';

@Module({
  imports: [
    TechsModule,
    ProjectsModule,
    GraphQLModule.forRoot({
      debug: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/thurowportfolio'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
