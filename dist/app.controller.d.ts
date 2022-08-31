import { HookTrellorService } from './app.service';
import { ReleaseDTO } from './dto/createRelease';
export declare class TrellorHookController {
    private readonly hookTrellor;
    constructor(hookTrellor: HookTrellorService);
    createBoard(relaseDTO: ReleaseDTO): void;
}
