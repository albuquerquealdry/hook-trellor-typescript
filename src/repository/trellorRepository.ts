import axios from "axios";



export class TrellorRepository{
    createBoard(code, key, token){
        axios.post(`https://api.trello.com/1/boards/?name=${code}&key=${key}&token=${token}`,{},{
          })
          .then(function (response) {
            return response;
          })
          .catch(function (error) {
            throw new error({
            "erro" : error,
            "description" :  "ERRO AO CRIAR O BOARD",
            "code": error.statuscode});
          });
    }
    createCard(){

    }

}