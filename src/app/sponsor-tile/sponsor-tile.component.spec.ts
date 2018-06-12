import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorTileComponent } from './sponsor-tile.component';

describe('SponsorTileComponent', () => {
  let component: SponsorTileComponent;
  let fixture: ComponentFixture<SponsorTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
