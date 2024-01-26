import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-capgemini-form',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule, FormsModule ],
  templateUrl: './capgemini-form.component.html',
  styleUrl: './capgemini-form.component.scss'
})
export class CapgeminiFormComponent implements OnInit {

    form: FormGroup;

    constructor(private formBuilder: FormBuilder){

      this.form = this.formBuilder.group({
        name: ["", [Validators.required]],
        age: [],
        gender: [],
        hobbies: this.formBuilder.array(["default", "second value"]),
        verifiedInfo: []
      })
    }

    ngOnInit(): void {

    }


    onSubmit(){
      console.log(this.form.value)
    }

    get hobbies() {
      return this.form.controls["hobbies"] as FormArray;
    }

    addHobbies() {
      const user = new FormControl('');
      this.hobbies.push(user);
      console.log(this.hobbies.value);
    }

    removeHobbies(index: any){
      this.hobbies.removeAt(index);
    }
}
