import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }

  // tslint:disable-next-line:typedef
  createUser(value, avatar) {
    // return this.db.collection('users').add({
    //   name: value.name,
    //   nameToSearch: value.name.toLowerCase(),
    //   surname: value.surname,
    //   age: parseInt(value.age),
    //   avatar: avatar
    // });
  }

  getPeople(): void {
    //   return new Promise<any>((resolve, reject) => {
    //     this.afs.collection('/people').snapshotChanges()
    //     .subscribe(snapshots => {
    //       resolve(snapshots)
    //     })
    //   })
  }
}
