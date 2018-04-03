import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills: Object[];
  constructor() { }

  ngOnInit() {
    this.skills = [
      { name: ' React', img: ''},
      { name: ' DotNet Core', img: ''},
      { name: ' AngularJS',
       img: 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg' },
      { name: ' Angular', img: 'https://angular.io/assets/images/logos/angular/angular.png' },
      { name: '', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg' },
      { name: ' Java' },
      { name: ' Javascript', img: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' },
      { name: '', img: 'https://www.w3.org/html/logo/downloads/HTML5_Logo.svg' },
      { name: 'Windows' },
      { name: 'Linux', img: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg' },
      { name: 'Solaris' },
      { name: '', img: 'https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png' },
      { name: 'npm' },
      { name: 'Gulp' },
      { name: 'Bower', img: 'https://bower.io/img/bower-logo.svg' },
      { name: 'Junit' },
      { name: 'Protractor', img: '' },
      { name: 'Selenium' },
      { name: '', img: 'https://karma-runner.github.io/assets/img/banner.png' },
      { name: 'Mocha' },
      { name: 'Chai' },
      { name: 'Mule ESB' },
      { name: 'IBM FileNet'},
      { name: '', img: 'https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png'},
      { name: '', img: 'https://upload.wikimedia.org/wikipedia/commons/2/24/GitHub_logo_2013_padded.svg'},
      { name: '', img: 'https://www.atlassian.com/dam/jcr:75ba14ba-5e19-46c7-98ef-473289b982a7/jira-software_rgb_slate.svg'},
      { name: '', img: 'https://www.atlassian.com/dam/jcr:bd56917e-e361-4f03-b672-9f5ef5b06e80/bitbucket_rgb_slate.svg'},
      { name: 'JMS'},
      { name: 'SFTP'},
      { name: 'SSH'}
    ];
  }

}
