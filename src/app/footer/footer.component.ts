import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
infoForm: FormGroup;
submitted: boolean = false;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.infoForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", Validators.required],
      question:["", Validators.required]
    });
  }

  onSubmit(){
 this.submitted = true;
 if(!this.infoForm.valid){
   return false;
 }

 else{
   alert("success");
 }

  }

}
