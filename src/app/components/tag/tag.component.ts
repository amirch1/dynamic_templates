import { Component, OnInit, Input,TemplateRef } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  @Input() tagLabel: string;
  @Input() template: TemplateRef<any>;
  
  constructor() { }

  ngOnInit() {
  }

}
