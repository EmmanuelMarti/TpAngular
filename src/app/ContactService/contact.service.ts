import { Injectable } from '@angular/core';

@Injectable()
export class ContactService {

	data: any;
	constructor() { 
		this.data = Array(
			{
				id : 1,
				name:  "Curtis",
				pseudo: "Rewar",
				mail: "rewar@gmail.com",
				tel: "0101010101",
			},
			{
				id: 2,
				name: "Benjamin",
				pseudo: "Benof",
				mail: "benof@gmail.com",
				tel: "0202020202",
			},
			{
				id: 3,
				name: "Adrien",
				pseudo: "Infinity",
				mail: "infinity@gmail.com",
				tel: "0303030303",
			}
		);
	}

	getAll(){
		return this.data;
	}

	getOne(id: Number){
		let index = 0;
		index = (parseInt(id) - 1);
		console.log(id);
		return this.data[index];
	}

	post(data){
		data.id = this.data.length + 1
		this.data.push(data);
	}
}
