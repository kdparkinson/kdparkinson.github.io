import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.sass']
})
export class EducationComponent implements OnInit {

  title: String ="Utah State University - Graduated May 2015";
  subtitle: String = "Bachelors of Science in Computer Science";
  items: String[] = ['Graduated debt free','Worked full time in summer','Worked part time during school'];
  image: String = "UtahStateUniversity.jpg";
  
  constructor() { }

  ngOnInit() {
  }

}
