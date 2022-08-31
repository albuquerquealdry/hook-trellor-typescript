"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HookTrellorService = void 0;
const common_1 = require("@nestjs/common");
const trellorRepository_1 = require("./repository/trellorRepository");
let HookTrellorService = class HookTrellorService {
    constructor(trellorRepository) {
        this.trellorRepository = trellorRepository;
    }
    createCard(releaseDto) {
        try {
            console.log("[SUCCESS] Board criado com sucesso");
            return this.trellorRepository.createBoard(releaseDto.code, releaseDto.key, releaseDto.token);
        }
        catch (error) {
            console.log("[FATAL] Erro ao criar o board, reviso token, key ou se o board já existe");
            throw new error("[FATAL] Erro ao criar o board, reviso token, key ou se o board já existe");
        }
    }
};
HookTrellorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [trellorRepository_1.TrellorRepository])
], HookTrellorService);
exports.HookTrellorService = HookTrellorService;
//# sourceMappingURL=app.service.js.map