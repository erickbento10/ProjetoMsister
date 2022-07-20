import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserfotosComponent } from './userfotos.component';

describe('UserfotosComponent', () => {
  let component: UserfotosComponent;
  let fixture: ComponentFixture<UserfotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserfotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserfotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
