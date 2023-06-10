import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Import the FormsModule
import { ChildComponent } from './child.component';

describe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule], // Add the FormsModule to the imports
      declarations: [ChildComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the addItem event with the new item', () => {
    spyOn(component.addItem, 'emit');
    const newItem = 'Test Item';
    component.newItem = newItem;
    component.onAddItem();
    expect(component.addItem.emit).toHaveBeenCalledWith(newItem);
  });

  it('should not emit the addItem event if newItem is empty', () => {
    spyOn(component.addItem, 'emit');
    component.newItem = '';
    component.onAddItem();
    expect(component.addItem.emit).not.toHaveBeenCalled();
  });

  it('should reset newItem after emitting addItem event', () => {
    spyOn(component.addItem, 'emit');
    component.newItem = 'Test Item';
    component.onAddItem();
    expect(component.newItem).toBe('');
  });
});
