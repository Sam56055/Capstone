import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration/registration.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private serv: RegistrationService, private route: Router
    ) { }

  students: any;

  getStudentList() {
    this.serv.getList().subscribe((data)=> {
      this.students = data;
    })
  }

  addNew() {
    this.route.navigate(['/section3'])

  }

  ngOnInit(): void {
    this.getStudentList();
  }

}
