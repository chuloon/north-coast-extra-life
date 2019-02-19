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
  selectedTitle;

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

  sponsors = [
    {
      name: 'ground-zero',
      label: 'Ground Zero',
      link: 'https://www.facebook.com/Ground-Zero-Comics-and-Cards-92545866626/'
    },
    {
      name: 'pubg',
      label: 'PUBG',
      link: 'https://www.pubg.com/'
    }
  ];

  members = [
    {
      id: 'jessica',
      title: 'The Guildmaster',
      name: 'Jess Coleman',
      hometown: 'Cleveland, OH',
      hobbies: "Creative Writing, Making Clay Dice Dragons, and Sketching Characters",
      games: "Ticket to Ride, Dominion, Betrayal at the House on the Hill, DnD 5e, Sims, Rollercoaster Tycoon 3, and Civ IV",
      twitter: 'https://twitter.com/livtrubiano',
      twitch: 'https://www.twitch.tv/stuffalothebuffalo'
    },
    {
      id: 'ben',
      title: 'The Webmaster',
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
      games: "Dnd 3.5/5.0, Star Wars d20, Ark, Anything Elder scrolls or fallout, Legend of Zelda series, GTA series",
      title: 'The Brand Manager'
    },
    {
      id: 'brady',
      name: 'Brady Risner',
      hometown: 'Carey, OH',
      hobbies: "Biking, board games, hanging out with my daughter",
      games: "Inis, Deception, Cosmic Encounters, Fallout 3, Minecraft, Halo 2 ",
      title: 'Supreme Host'
    },
    {
      id: 'josh',
      name: 'Josh Fox',
      hometown: 'Marietta, OH',
      hobbies: "Backpacking, playing trumpet, playing with our dog",
      games: "Super Smash Bros., Legend of Zelda- Twilight Princess & Ocarina of Time, Cards Against Humanity, Euchre",
      title: 'The Trusted Trustee'
    },
    {
      id: 'kate',
      name: 'Kate Chance',
      hometown: 'Sabina, OH',
      hobbies: "Baking, cuddling with our dog, roadtrip adventures, shopping",
      games: "Sims, Uno, Stratego, Cards Against Humanity",
      title: 'The Trusted Trustee'
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
    window.open("https://www.extra-life.org/team/TabletopandNCGG");
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
      window.open('https://www.extra-life.org/team/TabletopandNCGG', '_blank');
      break;
      case 'sponsor':
      window.open('mailto:northcoastgg@gmail.com?subject=New Sponsor Inquiry');
      break;
      case 'volunteer':
      window.open('https://goo.gl/forms/0IpGQgX06zPMChuA2', '_blank');
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
    this.selectedTitle = member.title;

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
