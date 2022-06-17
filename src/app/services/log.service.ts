import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class LogService{

    constructor(){}

    addLog(message:string){
        console.log(message+" basariyla eklendi")
    }

}