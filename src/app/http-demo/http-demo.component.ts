import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-http-demo',
  templateUrl: './http-demo.component.html',
  styleUrls: ['./http-demo.component.css']
})
export class HttpDemoComponent implements OnInit {

  constructor(private studentService : StudentService){}
  students : Student | any;
  ngOnInit(){
      this.studentService.GetStudents()
          .subscribe(data =>{
                this.students = data;
          }
      );
  } 


}
