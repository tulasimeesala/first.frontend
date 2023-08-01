import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  student:Student=new Student("")

}


stuSubmitt(){}

function stuSubmitt() {
  throw new Error('Function not implemented.');
}
