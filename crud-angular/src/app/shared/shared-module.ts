import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from './app-material/app-material-module';
import { ErrorHandling } from './components/error-handling/error-handling';



@NgModule({
  declarations: [  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    ErrorHandling
  ],
  exports: [ErrorHandling]
})
export class SharedModule { }
