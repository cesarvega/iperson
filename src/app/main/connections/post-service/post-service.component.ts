import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { PostService } from './post.service';
@Component({
    selector: 'app-post-service',
    templateUrl: './post-service.component.html',
    styleUrls: ['./post-service.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    animations: fuseAnimations
})
export class PostServiceComponent implements OnInit, OnDestroy {


    serviceForm: FormGroup;
    serviceList;
    services;
    // Private
    private _unsubscribeAll: Subject<any>;

    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private _PostService: PostService
    ) {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: false
                },
                toolbar: {
                    hidden: false
                },
                footer: {
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
    ngOnInit(): void {
        this.serviceForm = this._formBuilder.group({
            Title: ['', Validators.required],
            Description: ['', Validators.required],
            Price: ['', Validators.required],
            Location: ['', Validators.required],
            Range: [],
            Friends: ['', Validators.required],
            Zipcode: ['', Validators.required]
        });

        this.serviceList = ['service 1', 'service 2', 'service 3', 'service 4'];

        this._PostService.GetService().subscribe(res => {
            this.services = res.map(e => {
                if (e.payload.doc.data().uid !== '') {
                    
                }
                return {
                    id: e.payload.doc.id,
                    ...e.payload.doc.data()
                } as object;
            });

            this.services = this.services.filter(serv => {
                if (serv.uid !== '4bJQEUv2mBdr5HfQlha1qMDjXJR2') {
                    return serv;
                }
               
            });
            console.log(this.services);
        });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    onSubmit(): void {
        this._PostService.createService(this.serviceForm.value);
    }

    removeService(serviceId): void {
        this._PostService.removeService(serviceId);
    }

    updateService(service): void {
        this._PostService.removeService(service);
    }
    delete(event): void {
      
    }

}
