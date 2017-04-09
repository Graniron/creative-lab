import { ROUTES } from './app.routes';
import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { MaterialModule } from '@angular/material';
import { ArtListComponent } from './components/art-list/art-list.component';
import { ArtItemComponent } from './components/art-item/art-item.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AboutComponent } from './components/about/about.component';
import { ArtFormComponent } from './components/art-form/art-form.component';

import { ArtsService } from './services/arts.service';

@NgModule({
  declarations: [
    AppComponent,
    ArtListComponent,
    ArtItemComponent,
    ContactsComponent,
    AboutComponent,
    ArtFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ArtsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
