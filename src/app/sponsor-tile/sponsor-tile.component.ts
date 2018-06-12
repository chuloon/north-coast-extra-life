import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sponsor-tile',
  templateUrl: './sponsor-tile.component.html',
  styleUrls: ['./sponsor-tile.component.scss']
})
export class SponsorTileComponent implements OnInit {
  @Input() name: string;
  @Input() label: string;
  @Input() link: string;

  constructor() { }

  ngOnInit() {
  }

  goToSponsorSite = () => {
    window.open(this.link, '_blank');
  }

  getImagePath = () => {
    return "../../assets/images/sponsors/" + this.name + ".jpg"
  }
}
