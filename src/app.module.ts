import { Module } from '@nestjs/common';
import { TrellorHookController } from './app.controller';
import { HookTrellorService } from './app.service';

@Module({
  imports: [],
  controllers: [TrellorHookController],
  providers: [HookTrellorService],
})
export class AppModule {}
