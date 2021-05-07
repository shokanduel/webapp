import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuelRoomComponent } from './duel-room.component';

describe('DuelRoomComponent', () => {
  let component: DuelRoomComponent;
  let fixture: ComponentFixture<DuelRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuelRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuelRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
