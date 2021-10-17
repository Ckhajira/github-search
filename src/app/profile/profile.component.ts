import { Component, OnInit } from '@angular/core';
import { User } from '../user'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: User;
  repos: any;
  username: string;

  constructor(private profileService: ProfileService) {
    this.username = "Ckhajira"
  }

findProfile(){

}

  ngOnInit(): void {
  }

}
