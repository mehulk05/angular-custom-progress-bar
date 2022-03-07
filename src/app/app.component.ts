import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  color ="red"
  progress = 25
  total = 100
  title = 'progress-report';

  constructor(){}

  ngOnInit(): void {

  }


  gotoNext(data: any){
    console.log('Picked date: ', data);
    this.progress = data*25
    console.log(this.progress)
    if(this.progress==25){
      this.color = "red"
    }
    else if(this.progress==50){
      this.color = "green"
    }
    else if(this.progress==75){
      this.color = "blue"
    }
    else{
      this.color = "yellow"
    }
  }
}
