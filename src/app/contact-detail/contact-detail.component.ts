import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactService } from '../ContactService/contact.service';
@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

	contact: any = { id : 0,
					 name:  "",
					 pseudo: "",
					 mail: "",
					 tel: "",
				};

  constructor( private route: ActivatedRoute,
    private router: Router,
    public contactService: ContactService) { }

  ngOnInit() {
  	let id = this.route.snapshot.params['id'];
  	this.contact = this.contactService.getOne(id);
  	console.log(this.contactService.getOne(id));
  }
}
