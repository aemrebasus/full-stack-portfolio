import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  greetings = [
    'Hi, there!',
    'My Name is Ahmet',
    'I am a full stack developer',
    'My passion is my power',
    'Angular (expert)',
    'JavaScript (Very Good)',
    'TypeScript (Excellent)',
    'NodeJS (It is Huge)',
    'Java (Certified)',
    'OOP & Generic Programming Genius',
    'MongoDB, Mongoose, MySql, MariaDB, any DBs :)',
    'Click the button below to see my cute application.',
    'Hi, there!',
  ];

  greeting = this.greetings[0];


  constructor(private router: Router) { }

  ngOnInit(): void {

    setInterval(() => {
      this.greeting = this.greetings[this.greetings.indexOf(this.greeting) + 1];
    }, 2000);
  }

}
