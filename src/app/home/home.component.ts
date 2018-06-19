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

  selectedMember;
  selectedName;
  selectedHobbies;
  selectedGames;
  selectedHometown;

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
      hometown: 'Cleveland, OH',
      hobbies: "Creative Writing, Making Clay Dice Dragons, and Sketching Characters",
      games: "Ticket to Ride, Dominion, Betrayal at the House on the Hill, DnD 5e, Sims, Rollercoaster Tycoon 3, and Civ IV"
    },
    {
      id: 'ben',
      name: 'Ben Ng',
      hometown: 'Cincinnati, OH',
      hobbies: "Cosplay, sand volleyball, and video games",
      games: "Final Fantasy XIV, League of Legends, Horizon Zero Dawn, and Overwatch"
    },
    {
      id: 'steven',
      name: 'Steven Herron',
      hometown: 'Chippewa, PA',
      hobbies: "Scouting, video games, role playing, live action role playing, recreational shooting/hunting",
      games: "Dnd 3.5/5.0, Star Wars d20, Ark, Anything Elder scrolls or fallout, Legend of Zelda series, GTA series"
    }
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

    this.resetAboutMe(target);
  }

  resetAboutMe = (target) => {
    this.renderer.removeClass(target, 'hide');

    this.selectedGames = [];
    this.selectedHobbies = [];
    this.selectedName = "";
  }

  ctaClick = (action: string) => {
    switch(action) {
      case 'join':
      window.open('https://www.extra-life.org/index.cfm?fuseaction=donorDrive.team&teamID=39974', '_blank');
      break;
      case 'sponsor':
      window.open('mailto:jmcoleman.568@gmail.com?subject=New Sponsor Inquiry');
      break;
      case 'volunteer':
      window.open('mailto:jmcoleman.568@gmail.com?subject=Volunteer Application');
    }
  }

  getThumbnailPath = (id: string) => {
    return "../../assets/images/members/" + id + ".jpg"
  }

  memberClick = (member) => {
    this.showMemberInfo = true;
    document.getElementById("about-us").classList.remove("show");

    this.selectedName = member.name;
    this.selectedHometown = member.hometown;
    this.selectedGames = member.games;
    this.selectedHobbies = member.hobbies;

    this.selectedMember = member;

    setTimeout(() => {
      document.getElementById("about-us").classList.add("hide");
      document.getElementById(member.id + '-thumbnail').classList.add("selected");
    }, 300);
  }

  closeMember = () => {
    document.getElementById("about-us").classList.remove("hide");
    document.getElementById(this.selectedMember.id + '-thumbnail').classList.remove("selected");

    setTimeout(() => {
      this.showMemberInfo = false;
      document.getElementById("about-us").classList.add("show");
    }, 300);
  }
}
