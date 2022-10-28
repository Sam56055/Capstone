import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration/registration.service';

@Component({
    selector: 'app-mean-test',
    templateUrl: './mean-test.component.html',
    styleUrls: ['./mean-test.component.css'],
})
export class MeanTestComponent implements OnInit {

    regform: FormGroup;

    cityZipCodes: { [x: string]: Array<any> } = {
        Kennesaw: ['30144', '30152'],
        Marietta: [
            '30060',
            '30061',
            '30062',
            '30062',
            '30063',
            '30064',
            '30065',
            '30066',
            '30067',
            '30068',
            '30069',
        ],
        Woodstock: ['30188', '30189'],
    };

    constructor(private fb: FormBuilder, private serv: RegistrationService,  private route: Router) {}

    ngOnInit(): void {
        this.regform = this.fb.group({
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
                street: ['', Validators.required],
                zip: ['', Validators.required],
                city: ['', Validators.required],
                state: ['', Validators.required],
        });



        this.serv.getList().subscribe((data)=> {
            console.log(data)
        })
    }
    clicked = false;
    buttonName = 'Click Me!';
    firstName = '';
    lastName = '';
    address = '';
    zip = '';
    city = '';
    state = '';

    buttonClicked() {
        this.clicked = true;
        this.buttonName = 'Clicked';
    }

    buttonOnMouseOver() {
        console.log('Press the button');
    }

    onZipChange() {
        this.getCityByZip(this.regform.get('zip')?.value);
    }

    getCityByZip(zip: string) {
        for (const city in this.cityZipCodes) {
            if (this.cityZipCodes.hasOwnProperty(city)) {
                // City contains zip code
                if (this.cityZipCodes[city].includes(zip)) {
                    this.regform.get('city')?.setValue(city);
                    return;
                } else {
                    this.regform.get('city')?.setValue('');
                }
            }
        }
    }
    onSubmit() {
        this.serv.register(this.regform.value).subscribe((response: any) => {
            console.log(response);
            console.log("New student registerd")
        this.route.navigate([''])

            
        });
    }


}
