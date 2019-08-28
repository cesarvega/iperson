import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Validators } from '@angular/forms';
import { FieldConfig2 } from '../../dynamic-profile/field.interface';
import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class ProfileComponent implements OnInit {
  constructor(private _fuseConfigService: FuseConfigService, ) {
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
  questions: FieldConfig2[] = [
    {
      labelValue: 'upload-file *',
      icon: '',
      defaultInputValue: '',
      componentType: 'false',
      options: [''],
      disabled: 'false',
      componentId: '0',
      sortOrder: '0',
      tooltip: '',
      placeHolder: 'Enter your First Name',
      type: 'file',
      label: 'Upload Excell With rationales and Word parts',
      name: 'upload-file *',
      value: '',
      inputType: 'file',
      // validations: [
      //   {
      //     name: 'required',
      //     validator: Validators.required,
      //     message: 'please enter first name'
      //   }
      // ]
    },
    {


      icon: '',
      defaultInputValue: '',
      componentType: 'false',
      options: [''],
      disabled: 'false',
      componentId: '0',
      sortOrder: '0',
      tooltip: '',
      placeHolder: 'Enter or paste Recraft Names',
      type: 'input',
      label: 'Recraft Names',
      name: 'Recraft Names',
      value: '',
      inputType: 'text'
    },
    {
      labelValue: 'Min Letters',
      icon: '',
      defaultInputValue: '',
      componentType: 'false',
      options: [''],
      disabled: 'false',
      componentId: '0',
      sortOrder: '0',
      tooltip: '',
      placeHolder: 'Enter number',
      type: 'input',
      label: 'Min Letters',
      name: 'Min Letters',
      value: '',
      inputType: 'number',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'please enter last name'
        }
      ]
    },
    {
      labelValue: 'Max Letters',
      icon: '',
      defaultInputValue: '',
      componentType: 'false',
      options: [''],
      disabled: 'false',
      componentId: '0',
      sortOrder: '0',
      tooltip: '',
      placeHolder: 'Enter number',
      type: 'input',
      label: 'Max Letters',
      name: 'Max Letters',
      value: '',
      inputType: 'number',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'please enter last name'
        }
      ]
    },
    {
      labelValue: 'Different Lenght',
      icon: 'sql',
      defaultInputValue: '',
      componentType: 'bi-select',
      disabled: 'false',
      componentId: '0',
      sortOrder: '0',
      tooltip: '',
      placeHolder: 'Different Lenght',
      type: 'checkbox',
      label: 'Different Lenght',
      name: 'Different Lenght',
      value: '',
      inputType: 'bi-select',

    },
    {
      labelValue: 'Different Prefix',
      icon: 'sql',
      defaultInputValue: '',
      componentType: 'bi-select',
      disabled: 'false',
      componentId: '0',
      sortOrder: '0',
      tooltip: '',
      placeHolder: 'Different Prefix',
      type: 'checkbox',
      label: 'Different Prefix',
      name: 'Different Prefix',
      value: '',
      inputType: 'bi-select',

    },
    {
      labelValue: 'Different Suffix',
      icon: 'sql',
      defaultInputValue: '',
      componentType: 'bi-select',
      disabled: 'false',
      componentId: '0',
      sortOrder: '0',
      tooltip: '',
      placeHolder: 'Different Suffix',
      type: 'checkbox',
      label: 'Different Suffix',
      name: 'Different Suffix',
      value: '',
      inputType: 'bi-select',

    },
    {
      labelValue: 'Different Letter / Letter Position',
      icon: 'sql',
      defaultInputValue: '',
      componentType: 'bi-select',
      disabled: 'false',
      componentId: '0',
      sortOrder: '0',
      tooltip: '',
      placeHolder: 'Different Letter / Letter Position',
      type: 'checkbox',
      label: 'Different Letter / Letter Position',
      name: 'Different Letter / Letter Position',
      value: '',
      inputType: 'bi-select',

    }
  ];

  fieldData2 = [
    {
      item: this.questions,
      name: 'Creative Name Rules'
    }

  ];

  fieldOBJ = this.fieldData2;

  ngOnInit(): void {
    setTimeout(() => { window.dispatchEvent(new Event('resize')); }, 20);

  }

}
