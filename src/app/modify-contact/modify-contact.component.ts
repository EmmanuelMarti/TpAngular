import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactService } from '../ContactService/contact.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modify-contact',
  templateUrl: './modify-contact.component.html',
  styleUrls: ['./modify-contact.component.css']
})
export class ModifyContactComponent implements OnInit {

	form: FormGroup;
	data: any;
	contact: any = { id : 0,
					 name:  "",
					 pseudo: "",
					 mail: "",
					 tel: "",
	};


  	constructor(private route: ActivatedRoute,
    private router: Router,
    public contactService: ContactService) { }

  	ngOnInit() {
  		let id = this.route.snapshot.params['id'];
  		this.contact = this.contactService.getOne(id);
  		this.form = new FormGroup(
	 		{
				name: new FormControl(this.contact.name, Validators.minLength(3)),
				pseudo: new FormControl(this.contact.pseudo, Validators.required),
				mail: new FormControl(this.contact.mail, Validators.required),
				tel: new FormControl(this.contact.tel, Validators.required),
			}
		);

  	}

  	onSubmit(){
  		console.log("Salut");
  		console.log(this.form.get('name').value);
  		this.data = {
  			id: this.route.snapshot.params['id'],
  			name: this.form.get('name').value,
  			pseudo: this.form.get('pseudo').value,
  			mail: this.form.get('mail').value,
  			tel: this.form.get('tel').value,
  		}

  		this.contactService.update(this.data);
  	}

}
