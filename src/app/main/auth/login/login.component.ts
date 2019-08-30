import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';
import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';

import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProfileService } from 'app/main/user-info/profile/profile.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private _fuseConfigService: FuseConfigService,
    private _fuseTranslationLoaderService: FuseTranslationLoaderService,
    private _formBuilder: FormBuilder,
    public _auth: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private _ProfileService: ProfileService,
  ) {
    this._fuseTranslationLoaderService.loadTranslations(english, turkish);
    // Configure the layout
    this._fuseConfigService.config = {
      layout: {
        navbar: {
          hidden: true
        },
        toolbar: {
          hidden: true
        },
        footer: {
          hidden: true
        },
        sidepanel: {
          hidden: true
        }
      }
    };
  }

  ngOnInit(): void {
    // this.loginForm = this._formBuilder.group({
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', Validators.required]
    // });
  }

  googleSignin(): void {
    this._auth.googleSignin().then(res => {
      this.login(res);
    });
  }

  facebookSignin(): void {
    this._auth.facebookSignin().then(res => {
      this.login(res);
    });
  }
  login(userData): void {
    if (userData) {      
      localStorage.setItem('user', userData);
      this._ProfileService.createprofile(userData).then(res => {
        console.log(res);
        
      });
      this.router.navigateByUrl('/profile');
    } 
    else
    {
      this.toastr.warning('Something went wrong please contact us if your no able to solve this issue ');
    }
  }
}
