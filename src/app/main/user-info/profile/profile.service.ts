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
// 
  update(profile): void {     
    const remappedProfile = {
      firstName: profile['First name *'],
      middleName: profile['Middle name'],
      lastName: profile['Last name *'],
      gender: profile['First name *'],
      dob: profile['Date of birth *'],
      contry: profile['Select country of residency *'],
      address: profile['Mailing street address 1 *'],
      address2: profile['Mailing street address 2'],
      state: profile['Select State/Province *'],
      zipcode: profile['Zip Code *'],
      phone: profile['Cell Phone'],
      profession: profile['Specify your profession or occupation in order to continue'],
    };
    this.firestore.doc('profiles/' + this.profile$[0].payload.doc.id).update(remappedProfile);
  }


removeprofile(profile): Promise < any > {
  delete profile.id;

  return this.firestore.doc('profiles/' + profile.id).delete();
}

setProfile(profile): void {
  this.profile$ = profile;
}
}
