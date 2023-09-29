import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModuleModule } from './user-module/user-module.module';
import { CourseModuleModule } from './course-module/course-module.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
    }),
    UserModuleModule,
    CourseModuleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
