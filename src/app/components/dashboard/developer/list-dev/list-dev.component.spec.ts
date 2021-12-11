import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDevComponent } from './list-dev.component';

describe('ListDevComponent', () => {
  let component: ListDevComponent;
  let fixture: ComponentFixture<ListDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
