import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortoflioComponent } from './portoflio.component';

describe('PortoflioComponent', () => {
  let component: PortoflioComponent;
  let fixture: ComponentFixture<PortoflioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortoflioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortoflioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
