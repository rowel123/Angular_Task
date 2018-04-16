import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainviewComponent } from './mainview/mainview.component';
import { AppRoutingModule } from './/app-routing.module';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';

import { NgDragDropModule } from 'ng-drag-drop';
import { TooltipModule } from 'ngx-bootstrap';
import { InputTrimModule } from 'ng2-trim-directive';

@NgModule({
  declarations: [
    AppComponent,
    MainviewComponent,
    UsersComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgDragDropModule.forRoot(),
    TooltipModule.forRoot(),
    InputTrimModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
