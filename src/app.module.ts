import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvironmentsModule } from './environments.module';
import { EnvironmentsService } from './environments.service';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [EnvironmentsModule],
      useFactory: async (environmentsService: EnvironmentsService) => ({
        uri: environmentsService.get('DB_URI'),
        user: environmentsService.get('DB_USER'),
        pass: environmentsService.get('DB_PASS'),
        useFindAndModify: false,
        useNewUrlParser: true,
        authSource: environmentsService.get('DB_NAME'),
        connectionName: 'nest',
        useUnifiedTopology: true
      }),
      inject: [EnvironmentsService]
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
