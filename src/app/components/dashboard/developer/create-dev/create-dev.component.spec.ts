import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDevComponent } from './create-dev.component';

describe('CreateDevComponent', () => {
  let component: CreateDevComponent;
  let fixture: ComponentFixture<CreateDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
