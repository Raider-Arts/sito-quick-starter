import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaxyMapPageComponent } from './galaxy-map-page.component';

describe('GalaxyMapPageComponent', () => {
  let component: GalaxyMapPageComponent;
  let fixture: ComponentFixture<GalaxyMapPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalaxyMapPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GalaxyMapPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
