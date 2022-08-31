import { Body, Controller, Get, Post } from '@nestjs/common';
import { HookTrellorService } from './app.service';
import { ReleaseDTO } from './dto/createRelease';
@Controller("/trellorHook")
export class TrellorHookController {
  constructor(private readonly hookTrellor: HookTrellorService) {}

  @Post("/createBoard")
  createBoard(@Body() relaseDTO : ReleaseDTO) {
    return this.hookTrellor.createCard(relaseDTO);
  }
}
