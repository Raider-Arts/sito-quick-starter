import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCreatorPageComponent } from './character-creator-page.component';

describe('CharacterCreatorPageComponent', () => {
  let component: CharacterCreatorPageComponent;
  let fixture: ComponentFixture<CharacterCreatorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterCreatorPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterCreatorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
