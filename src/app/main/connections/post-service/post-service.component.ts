import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
@Component({
  selector: 'app-post-service',
  templateUrl: './post-service.component.html',
  styleUrls: ['./post-service.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  animations   : fuseAnimations
})
export class PostServiceComponent implements OnInit, OnDestroy
{ 
    serviceForm: FormGroup;
    services;
    // Private
    private _unsubscribeAll: Subject<any>;

    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder
    )
    {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar   : {
                    hidden: false
                },
                toolbar  : {
                    hidden: false
                },
                footer   : {
                    hidden: false
                },
                sidepanel: {
                    hidden: false
                }
            }
        };

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this.serviceForm = this._formBuilder.group({
            Title           : ['', Validators.required],
            Description     : ['', Validators.required],
            Price     : ['', Validators.required],           
            Location     : ['', Validators.required],
            Range     : ['', Validators.required],
            Friends     : ['', Validators.required],
            Zipcode     : ['', Validators.required]
        });

        this.services = ['service 1', 'service 2', 'service 3', 'service 4'];
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
    
    formatLabel(value: number | null) {
        if (!value) {
          return 0;
        }
    
        if (value >= 1000) {
          return Math.round(value / 1000) + 'k';
        }
    
        return value;
      }
}
