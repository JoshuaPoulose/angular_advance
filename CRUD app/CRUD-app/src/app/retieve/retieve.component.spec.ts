import { ComponentFixture, TestBed } from '@angular/core/testing';

 import { RetrieveComponent } from './retieve.component';

describe('RetieveComponent', () => {
  let component:RetrieveComponent;
  let fixture: ComponentFixture<RetrieveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrieveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetrieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
