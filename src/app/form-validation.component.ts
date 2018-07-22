import { Component } from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';

import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Component ({
   selector: 'form-validation',
   templateUrl: './form-validation.component.html',
   styleUrls: ['./form-validation.component.css']
 
})

export class FormValidationComponent {
 
 fnam:any;
 lnam:any;
 ag:any;
 model:any;
 today: Date;


 

 public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
};

 
}