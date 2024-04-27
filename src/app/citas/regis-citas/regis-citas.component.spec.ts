import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisCitasComponent } from './regis-citas.component';

describe('RegisCitasComponent', () => {
  let component: RegisCitasComponent;
  let fixture: ComponentFixture<RegisCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisCitasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
