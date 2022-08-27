import { Injectable } from '@nestjs/common';

@Injectable()
export class HookTrellorService {
  createCard(): string {
    return ("chegou");
  }
}
