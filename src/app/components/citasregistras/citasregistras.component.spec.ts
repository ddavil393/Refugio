import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasregistrasComponent } from './citasregistras.component';

describe('CitasregistrasComponent', () => {
  let component: CitasregistrasComponent;
  let fixture: ComponentFixture<CitasregistrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitasregistrasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CitasregistrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
