import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmplyeeComponent } from './add-emplyee.component';

describe('AddEmplyeeComponent', () => {
  let component: AddEmplyeeComponent;
  let fixture: ComponentFixture<AddEmplyeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEmplyeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmplyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
