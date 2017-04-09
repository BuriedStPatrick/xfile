import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  spaceScreens: Array<any>

  constructor(private http:Http){
    this.http.get('./resources/data.json')
      .map(response => response.json().screenshots)
      .subscribe(res => this.spaceScreens = res)
  }

  likeMe = index => {
    console.log(`index is: ${index}`)
    if(this.spaceScreens[index].liked == 0){
      this.spaceScreens[index].liked = 1
    }else{
      this.spaceScreens[index].liked = 0
    }
  }

  deleteMe = index => {
    this.spaceScreens.splice(index, 1)
    console.log(index)
  }
}
