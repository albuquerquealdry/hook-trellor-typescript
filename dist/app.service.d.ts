import { TrellorRepository } from './repository/trellorRepository';
import { ReleaseDTO } from './dto/createRelease';
export declare class HookTrellorService {
    private readonly trellorRepository;
    constructor(trellorRepository: TrellorRepository);
    createCard(releaseDto: ReleaseDTO): void;
}
