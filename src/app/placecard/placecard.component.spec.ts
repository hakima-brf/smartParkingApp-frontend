import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacecardComponent } from './placecard.component';

describe('PlacecardComponent', () => {
  let component: PlacecardComponent;
  let fixture: ComponentFixture<PlacecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacecardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
