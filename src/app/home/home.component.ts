import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      document.getElementById("home-container").classList.add("is-ready");
    }, 10);
  }

  registerClick = () => {
    window.open("https://www.extra-life.org/index.cfm?fuseaction=register.start&eventID=539&teamID=39974");
  }
}
