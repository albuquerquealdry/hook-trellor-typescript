import { Injectable } from '@nestjs/common';
import {TrellorRepository} from './repository/trellorRepository'
import { ReleaseDTO } from './dto/createRelease';
@Injectable()
export class HookTrellorService {
  constructor(private readonly trellorRepository: TrellorRepository) {}
  createCard(releaseDto: ReleaseDTO) {
    try {
      console.log("[SUCCESS] Board criado com sucesso")
      return this.trellorRepository.createBoard(releaseDto.code, releaseDto.key, releaseDto.token)
    } catch (error) {
      console.log("[FATAL] Erro ao criar o board, reviso token, key ou se o board já existe")
      throw new error("[FATAL] Erro ao criar o board, reviso token, key ou se o board já existe")
    }
    
  }
}
