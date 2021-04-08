import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WfhomeComponent } from './wfhome.component';

describe('WfhomeComponent', () => {
  let component: WfhomeComponent;
  let fixture: ComponentFixture<WfhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WfhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WfhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
