import { ArtFormComponent } from './components/art-form/art-form.component';
import { ArtItemComponent } from './components/art-item/art-item.component';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ArtListComponent } from './components/art-list/art-list.component';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    { path: 'arts', component: ArtListComponent},
    { path: 'arts/add', component: ArtFormComponent},
    { path: 'arts/edit/:id', component: ArtFormComponent},   
    { path: 'arts/:id', component: ArtItemComponent},    
    { path: 'contacts', component: ContactsComponent},
    { path: 'about', component: AboutComponent},
    { path: '**', redirectTo: 'arts'}    
];
