import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../services/registration/registration.service';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {

  [x: string]: any;
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  regForm: FormGroup;
  constructor(private fb: FormBuilder, private regServ: RegistrationService) {}

  ngOnInit() {
    this.regForm = this.fb.group({
      name: ['', [Validators.required]],
      title: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      companyName: ['', [Validators.required]],
      companyAddress: ['', [Validators.required]],
      companyWebsite: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.regForm.value);
    this.regServ.register(this.regForm.value).subscribe((response: any) => {
      console.log('Success!');
    });
  }
}