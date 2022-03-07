import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-template4',
  templateUrl: './template4.component.html',
  styleUrls: ['./template4.component.css']
})
export class Template4Component implements OnInit {
  input1=""
  @Output() onNextTemplate = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  goto2(){
    this.onNextTemplate.emit(1);
  }

}
