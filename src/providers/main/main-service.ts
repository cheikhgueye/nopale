import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Etudiant} from './etudiant';
import { Observable} from 'rxjs'
/*
  Generated class for the MainServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MainServiceProvider {
  apiUrl = 'http://localhost:2020';
  constructor(public http: HttpClient) {
    console.log('Hello MainServiceProvider Provider');
  }


  getEtudiants() {



    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/all/etudiants').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
   save(etudiant: Etudiant) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
  return  this.http.post(this.apiUrl+'/add/etudiant/',JSON.stringify(etudiant) ,{headers});
    }



    getEtudiant(n) {
      let headers: HttpHeaders = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');
      return this.http.post( this.apiUrl+'/add/etudiant',n,{headers})

}
}
