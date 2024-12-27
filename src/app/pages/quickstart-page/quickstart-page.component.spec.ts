import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickstartPageComponent } from './quickstart-page.component';

describe('QuickstartPageComponent', () => {
  let component: QuickstartPageComponent;
  let fixture: ComponentFixture<QuickstartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickstartPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuickstartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
