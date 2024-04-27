import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasRegisComponent } from './citas-regis.component';

describe('CitasRegisComponent', () => {
  let component: CitasRegisComponent;
  let fixture: ComponentFixture<CitasRegisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitasRegisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CitasRegisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
