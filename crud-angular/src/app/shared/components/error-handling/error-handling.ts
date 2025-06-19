import { Component, OnInit, inject, ChangeDetectionStrategy, Inject } from '@angular/core';
import { AppMaterialModule } from '../../app-material/app-material-module';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.html',
  styleUrl: './error-handling.scss',
  imports: [
    AppMaterialModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ErrorHandling {
  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}
}


