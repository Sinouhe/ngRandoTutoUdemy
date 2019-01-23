import { Injectable } from "@angular/core";

@Injectable()
export class ContactService {

    postContactForm(contactFormValue: any){
        console.log("service ok : " + JSON.stringify(contactFormValue));
    }

}