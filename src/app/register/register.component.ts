import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
customValidator() {

}
onSaveUser() {
console.log(this.register.value);
}

logo:string='https://gallantize-organizer.s3.ap-south-1.amazonaws.com/gallantize.png';

  disable:boolean=false;
  register:FormGroup;

  constructor(private builder:FormBuilder){
    this.register=this.builder.group({
      clientName:new FormControl('',[Validators.required,Validators.minLength(3)]),
      clientEmail:new FormControl('',[Validators.email,Validators.required]),
      clientPassword:new FormControl('',[Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%^&*]).{8,}$')]),
      clientCPassword:new FormControl('',[Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%^&*]).{8,}$')]),
      clientBusinessName:new FormControl('',[Validators.required]),
      clientBusinessType:new FormControl('',[Validators.required]),
      clientPincode:new FormControl('',[Validators.required]),
      clientCity:new FormControl('',[Validators.required])
    })
  }
onChange(){
  console.log(this.register.get('clientEmail')?.value);
}

}
