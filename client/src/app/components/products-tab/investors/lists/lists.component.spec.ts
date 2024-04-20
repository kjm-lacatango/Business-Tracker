import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorsListsComponent } from './lists.component';

describe('InvestorsListsComponent', () => {
  let component: InvestorsListsComponent;
  let fixture: ComponentFixture<InvestorsListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestorsListsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestorsListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
