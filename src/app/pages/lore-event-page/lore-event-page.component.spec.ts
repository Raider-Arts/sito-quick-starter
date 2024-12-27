import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoreEventPageComponent } from './lore-event-page.component';

describe('LoreEventPageComponent', () => {
  let component: LoreEventPageComponent;
  let fixture: ComponentFixture<LoreEventPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoreEventPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoreEventPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
