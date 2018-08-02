import { Injectable } from '@angular/core';
import {Contact} from './contact';
import { Http, Headers, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

@Injectable()
export class ContactService {

  constructor(private http: Http) { }

  //Retrive Contact
  getContacts()
  {
    return this.http.get('http://localhost:3000/api/contacts')
    .pipe(
      map(res => res.json()));
  }
  
  addContact(newContact){
    var headers = new Headers();
    headers.append('Content-type','application/json');
    return this.http.post('http://localhost:3000/api/contacts', newContact, {headers:headers})
    .pipe(
      map(res => res.json()));
  }

  deleteContact(id){
    return this.http.delete('http://localhost:3000/api/contacts/'+id)
    .pipe(map(res => res.json()));
  }

}
