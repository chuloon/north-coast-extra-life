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
    },
    {
      name: 'lunarbaboon',
      label: 'Lunarbaboon Comics',
      link: 'http://www.lunarbaboon.com/'
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
    },
    {
      name: 'calico',
      label: 'Calico Jack Coffee',
      link: 'https://www.calicojack.coffee/'
    },
    {
      name: 'halcyon',
      label: 'Harbor Halcyon',
      link: 'https://www.harborhalcyon.com/'
    },
  ];

  members = [
    {
      id: 'jessica',
      title: 'The Guildmaster',
      name: 'Jess Coleman',
      hometown: 'Cleveland, OH',
      games: "Ticket to Ride, Dominion, Betrayal at the House on the Hill, DnD 5e, Sims, Rollercoaster Tycoon 3, and Civ IV",
      twitter: 'https://twitter.com/livtrubiano',
      twitch: 'https://www.twitch.tv/stuffalothebuffalo'
    },
    {
      id: 'ben',
      title: 'A Spooky Ghost',
      name: 'Ben Ng',
      hometown: 'Cincinnati, OH',
      games: "Final Fantasy XIV, League of Legends, Horizon Zero Dawn, and Overwatch"
    },
    {
      id: 'steven',
      name: 'Steven Herron',
      hometown: 'Chippewa, PA',
      games: "Dnd 3.5/5.0, Star Wars d20, Ark, Anything Elder scrolls or fallout, Legend of Zelda series, GTA series",
      title: 'The Brand Manager'
    },
    {
      id: 'brady',
      name: 'Brady Risner',
      hometown: 'Carey, OH',
      games: "Inis, Deception, Cosmic Encounters, Fallout 3, Minecraft, Halo 2 ",
      title: 'Supreme Host'
    },
    {
      id: 'josh',
      name: 'Josh Fox',
      hometown: 'Marietta, OH',
      games: "Super Smash Bros., Legend of Zelda- Twilight Princess & Ocarina of Time, Cards Against Humanity, Euchre",
      title: 'The Trusted Trustee'
    },
    {
      id: 'kate',
      name: 'Kate Chance',
      hometown: 'Sabina, OH',
      games: "Sims, Uno, Stratego, Cards Against Humanity",
      title: 'The Trusted Trustee'
    },
    {
      id: 'austin',
      name: 'Austin Barbian',
      hometown: 'Ashtabula, OH',
      games: "Rocket League, Destiny 2, D&D 5e, Deception",
      title: 'Social Media Manager',
      twitch: 'https://twitter.com/restinpeace120',
      twitter: 'https://www.twitch.tv/restinpeace120'
    },
    {
      id: 'zach',
      name: 'Zach Zahnke',
      hometown: 'Medina, OH',
      games: "Pokemon, D&D 5e, Munchkin, Win Lose Banana",
      title: 'Marketing Manager',
      twitch: 'https://twitter.com/zachontitan',
      twitter: 'https://www.twitch.tv/zachontitan'
    },
    {
      id: 'brynne',
      name: 'Brynne Grady',
      hometown: 'Cleveland, OH',
      games: "Dominion, 5e, Pathfinder, Liar’s Dice",
      title: 'Fundraising Chair',
    },
    {
      id: 'dan',
      name: 'Dan Pastor',
      hometown: 'Brunswick, OH',
      games: "D&D5e and the Mass Effect Series",
      title: 'Corporate Sponsorship Chair',
    },
    {
      id: 'brad',
      name: 'Brad Bailey',
      hometown: 'Elyria, OH',
      games: "Gloomhaven (duh), Dark Souls, Factorio Lunar, The Silver Star Story",
      title: 'Social Events Chair',
    },
    {
      id: 'tonya',
      name: 'Tonya Atha',
      hometown: 'Springfield, OH',
      games: "D&D, Betrayal at the House on the Hill, Avalon Deception",
      title: 'Annual Event Chair',
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
