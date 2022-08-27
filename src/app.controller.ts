import { Controller, Get, Post } from '@nestjs/common';
import { HookTrellorService } from './app.service';

@Controller()
export class TrellorHookController {
  constructor(private readonly hookTrellor: HookTrellorService) {}

  @Post()
  getHello(): string {
    return this.hookTrellor.createCard();
  }
}
