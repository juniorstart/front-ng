import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = "http://localhost:5001//api/recruitment/";
const FAKE_URL = "https://app.fakejson.com/q";

const PAYLOAD = {
  "token": "1KgXtQ1muXLwZcrJ4V_E4g",
  "data": {
  	"data":[
  		{
  		"id": 1,
    	"companyName": "Orange",
		 "city": "Poznań",
		 "workPlace": ".NET Developer",
		 "dateOfCompanyReply": "08/09/2019",
		 "applicationDate": "08/19/2019",
		 "companyReply": true,
		 "notes": "Good interview",
		 "linkToApplication": "https://allegro.pl",
		 "ownerId": 1
  	},
  	{
  		"id": 2,
    	"companyName": "Orange2",
		 "city": "Kraków",
		 "workPlace": "Java Developer",
		 "dateOfCompanyReply": "02/09/2019 16:05:07",
		 "applicationDate": "01/19/2019 12:12:00",
		 "companyReply": true,
		 "notes": "Good interview2",
		 "linkToApplication": "https://allegro.pl",
		 "ownerId": 1
  	}
	
  ]
}
}

@Injectable({
  providedIn: 'root'
})
export class CoreDataService {

  model = 'recruitments';

  constructor(private httpClient: HttpClient) { }

  getUrl(id) {
    return `${BASE_URL}${id}+"/"+${this.model}`;
  }
  getFake(){
    return this.httpClient.post(FAKE_URL,PAYLOAD);
  }
  all(id) {
    return this.httpClient.get(this.getUrl(id));
  }

  create(project) {
    return this.httpClient.post(BASE_URL, project);
  }

  delete(projectId) {
    return this.httpClient.delete(BASE_URL,projectId);
  }

}
