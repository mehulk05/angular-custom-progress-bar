import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-template2',
  templateUrl: './template2.component.html',
  styleUrls: ['./template2.component.css']
})
export class Template2Component implements OnInit {

  input1=""
  @Output() onNextTemplate = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  goto2(){
    this.onNextTemplate.emit(3);
  }

}
