"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrellorRepository = void 0;
const axios_1 = require("axios");
class TrellorRepository {
    createBoard(code, key, token) {
        axios_1.default.post(`https://api.trello.com/1/boards/?name=${code}&key=${key}&token=${token}`, {}, {})
            .then(function (response) {
            return response;
        })
            .catch(function (error) {
            throw new error({
                "erro": error,
                "description": "ERRO AO CRIAR O BOARD",
                "code": error.statuscode
            });
        });
    }
    createCard() {
    }
}
exports.TrellorRepository = TrellorRepository;
//# sourceMappingURL=trellorRepository.js.map