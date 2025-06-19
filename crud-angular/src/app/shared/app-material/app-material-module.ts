import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  exports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    MatSliderModule,
    MatProgressSpinnerModule

  ]
})
export class AppMaterialModule { }
