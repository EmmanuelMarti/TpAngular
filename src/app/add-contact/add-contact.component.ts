import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../ContactService/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

	form: FormGroup;
	data: any;
	listeContact: any;
  	constructor(public contactService: ContactService) { }

  	ngOnInit() {
  		this.form = new FormGroup(
	 		{
				name: new FormControl("Gaetan", Validators.minLength(3)),
				pseudo: new FormControl("LabbeTauniere", Validators.required),
				mail: new FormControl("gagatauniere@gmail.com", Validators.required),
				tel: new FormControl("0404040404", Validators.required),
			}
		);
  	}

  	onSubmit(){
  		console.log("Salut");
  		console.log(this.form.get('name').value);
  		this.data = {
  			id : 0,
  			name: this.form.get('name').value,
  			pseudo: this.form.get('pseudo').value,
  			mail: this.form.get('mail').value,
  			tel: this.form.get('tel').value,
  		}

  		console.log(this.data);

  		this.listeContact = this.contactService.post(this.data);
  		console.log(this.listeContact);
  	}
 	
}
