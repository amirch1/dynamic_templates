import { Component, OnInit, Input, TemplateRef, QueryList, ContentChildren } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  @Input() tagsData: any[];
  @ContentChildren(TemplateRef, {descendants: false}) public templates: QueryList<TemplateRef<any>>;
  
  constructor() { }

  ngOnInit() {
  }

}
