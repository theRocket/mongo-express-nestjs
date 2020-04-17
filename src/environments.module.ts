import { Global, Module } from '@nestjs/common';
import { EnvironmentsService } from './environments.service';

@Global()
@Module({
  providers: [
    {
      provide: EnvironmentsService,
      useValue: new EnvironmentsService(
        `'/config/environments/' + ${process.env.NODE_ENV || 'development'}.env`
      )
    }
  ],
  exports: [EnvironmentsService]
})
export class EnvironmentsModule {
}
