import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stru-directives',
  templateUrl: './stru-directives.component.html',
  styleUrls: ['./stru-directives.component.css']
})
export class StruDirectivesComponent implements OnInit {
  show: boolean = true;
  names:any;
  constructor() { 
    this.names = ['Jennifer', 'Waleed', 'Michael'];
  }

  ngOnInit(): void {
  }

}
