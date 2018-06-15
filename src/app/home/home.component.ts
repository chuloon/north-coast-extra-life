import { PerfectScrollbarComponent } from 'angular2-perfect-scrollbar';
import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { InViewportMetadata } from 'ng-in-viewport';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(PerfectScrollbarComponent) ps: PerfectScrollbarComponent;
  showMemberInfo: boolean = false;

  platinumSponsors = [
    {
      name: 'tabletop',
      label: 'Tabletop Board Game Cafe',
      link: 'http://www.tabletopcleve.com/'
    },
    {
      name: 'singer',
      label: 'Singer',
      link: 'https://www.singer.com/'
    }
  ];

  members = [
    {
      id: 'jessica',
      name: 'Jess Coleman',
      hobbies: [
        'Creative Writing', 'Making Clay Dice Dragons', 'Sketching Characters'
      ],
      games: [
        'Ticket to Ride', 'Dominion', 'Betrayal at the House on the Hill', 'DnD 5e', 'Sims', 'Rollercoaster Tycoon 3', 'Civ IV'
      ]
    },
    {
      id: 'jessica',
      name: 'Jess Coleman',
      hobbies: [
        'Creative Writing', 'Making Clay Dice Dragons', 'Sketching Characters'
      ],
      games: [
        'Ticket to Ride', 'Dominion', 'Betrayal at the House on the Hill', 'DnD 5e', 'Sims', 'Rollercoaster Tycoon 3', 'Civ IV'
      ]
    },
    {
      id: 'jessica',
      name: 'Jess Coleman',
      hobbies: [
        'Creative Writing', 'Making Clay Dice Dragons', 'Sketching Characters'
      ],
      games: [
        'Ticket to Ride', 'Dominion', 'Betrayal at the House on the Hill', 'DnD 5e', 'Sims', 'Rollercoaster Tycoon 3', 'Civ IV'
      ]
    },
  ];

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    setTimeout(() => {
      //document.getElementById("home-container").classList.add("is-ready");
      document.getElementById("site").classList.add("is-ready");
    }, 10);
  }

  registerClick = () => {
    window.open("https://www.extra-life.org/index.cfm?fuseaction=register.start&eventID=539&teamID=39974");
  }

  applyScrollView = (event) => {
    const { [InViewportMetadata]: { entry }, target, value } = event;

    if(value) this.renderer.addClass(target, 'show')
    else this.renderer.removeClass(target, 'show');
  }

  ctaClick = (action: string) => {
    switch(action) {
      case 'join':
      window.open('https://www.extra-life.org/index.cfm?fuseaction=donorDrive.team&teamID=39974', '_blank');
      break;
    }
  }

  getThumbnailPath = (id: string) => {
    return "../../assets/images/members/" + id + ".jpg"
  }
}
