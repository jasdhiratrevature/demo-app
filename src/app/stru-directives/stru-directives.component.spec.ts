import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StruDirectivesComponent } from './stru-directives.component';

describe('StruDirectivesComponent', () => {
  let component: StruDirectivesComponent;
  let fixture: ComponentFixture<StruDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StruDirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StruDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
