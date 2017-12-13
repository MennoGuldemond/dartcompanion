import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../core/services/auth.service';


@Component({
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
    
    // allUsers: Observable<User[]>;

    constructor(private db: AngularFirestore, public auth: AuthService) { }

    ngOnInit(): void {
        // this.allUsers = this.db.collection<User>('users').valueChanges();
    }


}