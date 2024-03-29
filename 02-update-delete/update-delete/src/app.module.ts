import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {GraphQLModule} from '@nestjs/graphql'
import { UserModuleModule } from './user-module/user-module.module';
import {ApolloDriver, ApolloDriverConfig} from  '@nestjs/apollo'
 
@Module({
  imports: [

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver:ApolloDriver,
      typePaths:['./**/*.graphql']
    }),

    UserModuleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
