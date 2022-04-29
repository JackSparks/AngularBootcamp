import { FormControl } from "@angular/forms";


export class DateFormControl extends FormControl{

    //null allows the form to be empty, such as what happens after reseting the form
    override setValue(value: string | null, options: any){

        //handles an empty reseted form
        if(!value){
            super.setValue(this.value, {...options, emitModelToViewChange: true});
            return;
        }

        if(value.match(/[^0-9|\/]/gi)){
            super.setValue(this.value, {...options, emitModelToViewChange: true});
            return;
        }

        if(value.length > 5){
            super.setValue(this.value, {...options, emitModelToViewChange: true});
            return;
        }

        console.log(value);

        //bubbles up the info to the form
        // super.setValue(value + '*', options);

        if(value.length === 2){
            super.setValue(value + '/', {...options, emitModelToViewChange: true});
            return;
        }

        super.setValue(value, {...options, emitModelToViewChange: true});
    }
}
