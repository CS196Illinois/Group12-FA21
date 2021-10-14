import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ItemMenuComponent } from './item-menu/item-menu.component';
=======
import { MainMenuComponent } from './main-menu/main-menu.component';
import { TemplateComponent } from './template/template.component';
>>>>>>> 8e30fab55994e916d99470e214d459bc4ceb2b99

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ItemMenuComponent
=======
    MainMenuComponent,
    TemplateComponent
>>>>>>> 8e30fab55994e916d99470e214d459bc4ceb2b99
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
