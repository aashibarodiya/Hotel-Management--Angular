import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } 
from '@angular/forms';

// Create a directive with selector property
@Directive({
  selector: '[compareTo]',
  providers:[
    {
      provide:NG_VALIDATORS,
      useExisting:CompareDirective,
      multi:true
    }
  ]
})

// Create a directive class
export class CompareDirective  {

  constructor() { }
 

}
/**
 * Create a validator function to code all the validation logic 
 * @param password validate the password
 * @param confirmPassword Validate confirmPassword 
 * @returns If password and confirm password not same don't match
 */
export const compare = (password:string, confirmPassword:string):ValidatorFn =>{

  return control =>{
    var c1 = control.get(password);
    var c2 = control.get(confirmPassword);
    var v1 = c1!.value;
    var v2 = c2!.value;

    if(v1 === v2)
      return null;
    else
      return {compare:{message:`The fields ${password} and ${confirmPassword} don't match`}};
  }

}