import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

// Declaration of class of header component
export class HeaderComponent implements OnInit {

  @Input() title:string='HotelManagement-Client';
  constructor() { }

  ngOnInit(): void {
  }

}
