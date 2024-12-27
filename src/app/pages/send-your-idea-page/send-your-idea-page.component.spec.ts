import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendYourIdeaPageComponent } from './send-your-idea-page.component';

describe('SendYourIdeaPageComponent', () => {
  let component: SendYourIdeaPageComponent;
  let fixture: ComponentFixture<SendYourIdeaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendYourIdeaPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SendYourIdeaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
