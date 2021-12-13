import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //selector: '[app-root]',attribute selector
  //selector: '.app-root',class selector
  //selector: '#app-root',id selector
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoppingApp';
  allowUser=false;
  userCreatedStatus='No user Created';
  userName='';
  users:string[]=[];
  us?:string;
  status=false;
  constructor(){
    setInterval(()=>{
this.us=Math.random()>0.5?'online':'offline';
    },3000)
  }
  userStatus()
  {this.status=true;
    this.userCreatedStatus="user created";
    this.users.push(this.userName);
  }
  onInput(event:Event)
  {
this.userName=(event.target as HTMLInputElement).value;
  }
  getColor()
  {
    return this.us=='online'?'green':'red';
  }

}
