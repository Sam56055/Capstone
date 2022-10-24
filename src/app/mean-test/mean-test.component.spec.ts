import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeanTestComponent } from './mean-test.component';

describe('MeanTestComponent', () => {
  let component: MeanTestComponent;
  let fixture: ComponentFixture<MeanTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeanTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeanTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
