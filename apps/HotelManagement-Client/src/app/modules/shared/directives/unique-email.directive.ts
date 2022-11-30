import { Directive, Inject } from '@angular/core';
import { AbstractControl, AsyncValidator, AsyncValidatorFn, NG_ASYNC_VALIDATORS, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { map, Observable, of } from 'rxjs';
import { UserService } from '../../users/services/user.service';

// Create an directive with selector property and providers
@Directive({
  selector: '[uniqueEmail]',
  providers: [
    { provide: NG_ASYNC_VALIDATORS, 
      useExisting: UniqueEmailDirective,
      multi: true }
  ]
})
/**
 * Create a uniqueEmail directive class 
 * create an async validator directive with a custom error key.
 */
export class UniqueEmailDirective implements AsyncValidator {

  constructor(@Inject("UserService") private userService: UserService) { }

  validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return uniqueEmailValidator(this.userService)(control);
  }

  registerOnValidatorChange?(fn: () => void): void {
  }

}

/**
 * Async function receives a control and returns a observable 
 * @param userService 
 * @returns 
 */
export const uniqueEmailValidator = (userService: UserService): AsyncValidatorFn => {

  var actualValidator: AsyncValidatorFn = (control: AbstractControl<any, any>)
              : Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    

      return (<Observable<boolean>>userService
                .isEmailRegistered(control.value))
                .pipe(
                  map( (registered:boolean)=>{
                    if(registered)
                      return {uniqueEmail:{message:`duplicate email id`}};
                    else
                      return null;
                  })
                );


    return of(null);
  };

  return actualValidator;
}

