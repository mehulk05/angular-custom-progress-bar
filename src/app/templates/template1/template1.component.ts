import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.css']
})
export class Template1Component implements OnInit {
  input1=""
  @Output() onNextTemplate = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  goto2(){
    this.onNextTemplate.emit(2);
  }

}
