import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from "clarity-angular";
import { AppComponent } from './app.component';
import { ContactListeComponent } from './contact-liste/contact-liste.component';
import { OneContactComponent } from './one-contact/one-contact.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactService } from './ContactService/contact.service';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ReactiveFormsModule } from '@angular/forms';


const appRoutes: Routes = [
  { path: '', component: ContactListeComponent },
  { path: 'contact/add', component: AddContactComponent},
  { path: 'contact/:id', component: ContactDetailComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,
    ContactListeComponent,
    OneContactComponent,
    ContactDetailComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ClarityModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
