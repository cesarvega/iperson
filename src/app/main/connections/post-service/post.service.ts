import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from 'app/main/services/auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class PostService {

 userid;
  constructor(
    private firestore: AngularFirestore,
    public _auth: AuthService,
  ) { }

  createService(service): void {
  
    this._auth.getuser().subscribe(user => {
      this.userid = user.displayName;
      service.uid = user.uid;
      this.firestore
        .collection('services')
        .add(service)
        .then(res => {
          console.log(res);
        });
    });


  }


  GetService(): Observable<any> {
    return this.firestore.collection('services').snapshotChanges();
    // return this.firestore.collection('services', ref => ref.where('uid', '!=', 'large'));
  }

  update(service): Promise<any> {
    delete service.id;
    return this.firestore.doc('services/' + service.id).update(service);
  }

  removeService(id): Promise<any> {
    return this.firestore.doc('services/' + id).delete();
  }

}
