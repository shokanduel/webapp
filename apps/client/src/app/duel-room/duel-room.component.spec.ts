import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuelRoomComponent } from './duel-room.component';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from './duel-room-routing.module';

describe('DuelRoomComponent', () => {
  let component: DuelRoomComponent;
  let fixture: ComponentFixture<DuelRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuelRoomComponent ],
      imports: [ RouterTestingModule.withRoutes(routes) ]
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
