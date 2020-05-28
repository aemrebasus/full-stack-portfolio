import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  greetings = [
    'Hi, My name is Ahmet!',
    'I love programming!',
    'I am a full stack software engineer!',
    'My passion is my power!',
    'I am an Angular 9 master!',
    'I have 2 years of IT experience Yeah!',
    'Java! Himmm!',
    'Angular! OOOO!',
    'JavaScript! Yummy Yummy Yummy!',
    'Hi, My name is Ahmet!',
  ];

  greeting = this.greetings[0];


  constructor(private router: Router) { }

  ngOnInit(): void {

    setInterval(() => {
      this.greeting = this.greetings[this.greetings.indexOf(this.greeting) + 1];
    }, 2000);
  }

}
