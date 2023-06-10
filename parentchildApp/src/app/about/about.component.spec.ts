import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the correct data through sendData EventEmitter', () => {
    const aboutComponent = new AboutComponent();
    const testData = 'This is for UST Batch 4';
    let emittedData: string | undefined;
  
    aboutComponent.sendData.subscribe((data: string) => {
      emittedData = data;
    });
  
    aboutComponent.receivemessage();
  
    expect(emittedData).toBe(testData);
  });
  it('should emit different data through sendData EventEmitter', () => {
    const aboutComponent = new AboutComponent();
    const testData1 = 'This is for UST Batch 4';
    const testData2 = 'This is for UST Batch 4';
    let emittedData: string | undefined;
  
    aboutComponent.sendData.subscribe((data: string) => {
      emittedData = data;
    });
  
    aboutComponent.receivemessage(); // Emit first data
    expect(emittedData).toBe(testData1);
  
    aboutComponent.receivemessage(); // Emit second data

});
});
