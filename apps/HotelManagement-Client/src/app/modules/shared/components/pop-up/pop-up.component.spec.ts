import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';



import { PopUpComponent } from './pop-up.component';



describe('PopUpComponent', () => {

  let component: PopUpComponent;

  let fixture: ComponentFixture<PopUpComponent>;



  beforeEach(async () => {

    await TestBed.configureTestingModule({

      declarations: [ PopUpComponent ]

    })

    .compileComponents();



    fixture = TestBed.createComponent(PopUpComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();

  });



  it('should create', () => {

    expect(component).toBeTruthy();

  });



  it('should close when cancel is clicked',()=>{

    component.handleCancel(); 

    expect(component.visible).toBeFalsy();

    fixture.detectChanges();

  });



});