import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplyeelistComponent } from './emplyeelist.component';

describe('EmplyeelistComponent', () => {
  let component: EmplyeelistComponent;
  let fixture: ComponentFixture<EmplyeelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmplyeelistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmplyeelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
