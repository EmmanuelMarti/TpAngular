import { Component, OnInit } from '@angular/core';
import { ContactService } from '../ContactService/contact.service';
import 'clarity-icons';

@Component({
  selector: 'app-contact-liste',
  templateUrl: './contact-liste.component.html',
  styleUrls: ['./contact-liste.component.css'],
})
export class ContactListeComponent implements OnInit {

	contactListe: any;
	personne :any;
	status: any;
	constructor(public contactService: ContactService) {
		this.status = false;
	}

  	ngOnInit() {
  		this.contactListe = this.contactService.getAll();
  	}

  	onSelectedContact(event){
  		console.log(event);
  		this.personne = event.personne;
  		this.status = event.status;
  	}


}
