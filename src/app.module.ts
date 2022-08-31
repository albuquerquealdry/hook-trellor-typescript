import { Module } from '@nestjs/common';
import { TrellorHookController } from './app.controller';
import { HookTrellorService } from './app.service';
import { TrellorRepository } from './repository/trellorRepository';
@Module({
  imports: [],
  controllers: [TrellorHookController],
  providers: [HookTrellorService, TrellorRepository],
})
export class AppModule {}
