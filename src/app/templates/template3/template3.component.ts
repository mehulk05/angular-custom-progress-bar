import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-template3',
  templateUrl: './template3.component.html',
  styleUrls: ['./template3.component.css']
})
export class Template3Component implements OnInit {
  input1=""
  @Output() onNextTemplate = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  goto2(){
    this.onNextTemplate.emit(4);
  }
}
