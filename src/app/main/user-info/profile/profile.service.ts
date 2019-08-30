import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from 'app/main/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profile$: Observable<any>;

  constructor(
    private firestore: AngularFirestore,
    public _auth: AuthService,
  ) { }

  createprofile(profile): Observable<any> {
    if (!this.profile$) {
      this._auth.getuser().subscribe(user => {
        this.firestore.collection('profiles', ref => ref.where('uid', '==', user.uid))
          .snapshotChanges()
          .subscribe(profileExist => {
            if (profileExist.length) {                 
              this.setProfile(profileExist);            
              return profileExist;
            } else {              
            return this.firestore
            .collection('profiles')
            .add(profile);
            }
          });

      });
    } else {
      return this.profile$;
    }
  }

  Getprofile(): Observable<any> {
    return this.firestore.collection('profiles').snapshotChanges();
  }

  update(profile): Promise<any> {
    const profileId: any = this.profile$.subscribe(x => {
      return x;
    });
    return this.firestore.doc('profiles/' + profileId).update(profile);
  }

  removeprofile(profile): Promise<any> {
    delete profile.id;
    return this.firestore.doc('profiles/' + profile.id).delete();
  }

  setProfile(profile): void {
    this.profile$ = profile;
  }
}
