import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppMaterialModule } from './app-material/app-material-module';
import { ErrorHandling } from './components/error-handling/error-handling';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';




@NgModule({
  declarations: [  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    ErrorHandling,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule

  ],
  exports: [ErrorHandling,
    MatFormFieldModule,
    ReactiveFormsModule,
    AppMaterialModule,
    MatInputModule,
    MatSelectModule]
})
export class SharedModule { }
