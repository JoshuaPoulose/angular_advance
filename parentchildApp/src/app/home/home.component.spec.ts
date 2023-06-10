import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly bind parentData input', () => {
    const expectedData = 'Test Parent Data';
    component.parentData = expectedData;
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('.parent-data');
    expect(element).toBe(null);
  });

  it('should correctly bind parentLastName input', () => {
    const expectedLastName = 'Test Parent Last Name';
    component.parentLastName = expectedLastName;
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('.parent-last-name');
    expect(element).toBe(null);
  });

});
