import { Component, OnInit } from '@angular/core';
import { LoggerModule, NGXLogger } from 'ngx-logger';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private logger:NGXLogger) { 
    this.logger.info("Home component created")
  }

  text="Hello World";

  ngOnInit(): void {
 
  }

}