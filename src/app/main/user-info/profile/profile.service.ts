import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private firestore: AngularFirestore) { }

  createprofile(profile): Promise<any> {
     return this.firestore
        .collection('profiles')
        .add(profile)
        .then(res => { 
          console.log(res);          
        });    
  }

  Getprofile(): Observable<any>{    
   return this.firestore.collection('profiles').snapshotChanges();
  }

  update(profile): Promise<any> {   
    return this.firestore.doc('profiles/' + profile.id).update(profile);
  }

  removeprofile(profile): Promise<any>{  
    delete profile.id;  
    return this.firestore.doc('profiles/' + profile.id).delete();
  }

}
