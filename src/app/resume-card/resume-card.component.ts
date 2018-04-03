import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resume-card',
  templateUrl: './resume-card.component.html',
  styleUrls: ['./resume-card.component.sass']
})
export class ResumeCardComponent implements OnInit {

  @Input()
  title: String;

  @Input()
  subtitle: String;

  @Input()
  items: String[];

  @Input()
  image: String;

  constructor() { }

  ngOnInit() {
  }

}
