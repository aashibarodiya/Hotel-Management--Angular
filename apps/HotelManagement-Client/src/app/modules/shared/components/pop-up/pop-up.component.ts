import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
/**
 * Class declaration for popup class
 */
export class PopUpComponent implements OnInit {

  constructor() { }

  // This method is called to initializes the component
  ngOnInit(): void {
  }

  @Input() title:string="pop-up title";
  @Input() confirmText:string="pop-up confirm text";
  @Input() cancelText:string="pop-up cancel text";
  @Input() preventDefault:boolean=false;


  @Input() visible:boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>;

  @Output() done=new EventEmitter<boolean>();
  
  /**
   * This emits an event which has a value
   * @param response 
   */
  handleDone(response:boolean){
    this.done.emit(response);
    if(!this.preventDefault){
      this.visible=false;
      this.visibleChange.emit(false);
    }
  }

  handleConfirm(){
    this.handleDone(true);
  }

  handleCancel(){
    this.handleDone(false);
  }

}
