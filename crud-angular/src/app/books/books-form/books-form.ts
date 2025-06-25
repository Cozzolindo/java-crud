import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from '../../shared/app-material/app-material-module';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedModule } from '../../shared/shared-module';

@Component({
  selector: 'app-books-form',
  imports: [RouterModule, AppMaterialModule, SharedModule],
  templateUrl: './books-form.html',
  styleUrl: './books-form.scss'
})
export class BooksForm implements OnInit{

  form: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.form = this.formBuilder.group( {
      name: [null],
      type: [null]
    })
  }

  ngOnInit(): void {

    // Initialization logic goes here
    console.log('Starting On Mommy');

  }
}
