import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() progress: number =0;
  @Input() total: number=0;
  @Input() color: string = "";
  constructor() { }

  ngOnInit(): void {
    console.log(this.progress,this.color)
    if(!this.progress) {
      this.progress = 0;
   }
   //if we don't have a total aka no requirement, it's 100%.
   if(this.total === 0) {
      this.total = this.progress;
   } else if(!this.total) {
      this.total = 100;
   }
   //if the progress is greater than the total, it's also 100%.
   if(this.progress > this.total) {
      this.progress = 100;
      this.total = 100;
   }
   this.progress = (this.progress / this.total) * 100;
   console.log(this.progress)
  //  if(this.progress < 55) {
  //     this.color = 'red';
  //  } else if(this.progress < 75) {
  //     this.color= 'yellow';
  //  } else {
  //    this.color = 'green';
  //  }
  }

}
