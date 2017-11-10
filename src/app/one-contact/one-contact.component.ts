import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { ContactService } from '../ContactService/contact.service';

@Component({
  selector: 'app-one-contact',
  templateUrl: './one-contact.component.html',
  styleUrls: ['./one-contact.component.css']
})
export class OneContactComponent implements OnInit {

	data: any;
	@Input() personne;
	@Output() onSelected = new EventEmitter<boolean>();
 	constructor(public contactService: ContactService) { }

  	ngOnInit() {
  	}


  	getOnePersonne(personne){
  		this.data = {
  			personne,
  			status: true
  		};
  		this.onSelected.emit(this.data);
  	}

    DeleteContact(){
      console.log(this.personne);
      this.contactService.delete(this.personne);
    }
}
