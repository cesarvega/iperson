import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private firestore: AngularFirestore) { }

  createService(service) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("services")
        .add(service)
        .then(res => { 
          console.log(res);
          
        }, err => reject(err));
    });
  }
}
