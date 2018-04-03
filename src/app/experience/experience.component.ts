import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.sass']
})
export class ExperienceComponent implements OnInit {

  jobs = [
    {
      title: 'Software Developer',
      subtitle: `LDS Information and Communication Services:
      Sept 2015 - Present`,
      items: [
        'Develop and maintain Enterprise Service Bus connecting multiple systems worldwide.',
        'Provide engineers with live Service Bus system data via AngularJS app.',
        'Facilitate faster operations response times via AngularJS app connected to message tracking data.'
      ]
    }, {
      title: 'Intern Software Developer',
      subtitle: `LDS Information and Communication Services:
      May 2015 - Sept 2015`,
      items: [
        'Developed a Java app to clean up files abandoned after being uploaded.',
        'Developed Dojo.js web app for archiving files in batches.',
        'Directed weekly stand-up meetings.'

      ]
    }, {
      title: 'Student Software Engineer/Tester',
      subtitle: `Space Dynamics Laboratory:
      May 2013 - May 2015`,
      items: [
        'Refactored deprecated MYSQL code to comply with new standard.',
        'Implemented batch script solution for running .jar file on startup of Ubuntu machine.',
        'Developed automated tests for website using Protractor and Node.js.'
      ],
      image: 'sdl.png'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
