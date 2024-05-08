import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalesdelmundoComponent } from './animalesdelmundo.component';

describe('AnimalesdelmundoComponent', () => {
  let component: AnimalesdelmundoComponent;
  let fixture: ComponentFixture<AnimalesdelmundoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalesdelmundoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimalesdelmundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
