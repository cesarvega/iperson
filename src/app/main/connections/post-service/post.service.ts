import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private firestore: AngularFirestore) { }

  createService(service): Promise<any> {
     return this.firestore
        .collection('services')
        .add(service)
        .then(res => { 
          console.log(res);          
        });    
  }


  GetService(): Observable<any>{    
   return this.firestore.collection('services').snapshotChanges();
  }

  update(service): Promise<any> {
    delete service.id;  
    return this.firestore.doc('services/' + service.id).update(service);
  }

  removeService(id): Promise<any>{  
    return this.firestore.doc('services/' + id).delete();
  }

}
