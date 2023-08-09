import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext';
import { ContainerComponent } from './Container/container.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ArticleComponent } from './article/article.component';
@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ArticleComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CardModule,
    InputTextModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
