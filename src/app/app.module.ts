import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyDatePickerModule } from 'mydatepicker';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import{FormValidationComponent} from './form-validation.component';
enableProdMode();
@NgModule({
  declarations: [
    AppComponent,FormValidationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MyDatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
