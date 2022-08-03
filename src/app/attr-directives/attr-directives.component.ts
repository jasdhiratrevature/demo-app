import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attr-directives',
  templateUrl: './attr-directives.component.html',
  styleUrls: ['./attr-directives.component.css']
})
export class AttrDirectivesComponent implements OnInit {

  names:any;
  constructor() { 
    this.names = ['Jennifer', 'Waleed', 'Michael'];
  }

  ngOnInit(): void {
  }

}
