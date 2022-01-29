import { Component, OnInit} from '@angular/core';
import {Course} from '../model/course';

import {COURSES} from 'src/db-data';



@Component({
    selector: 'app-reserve',
    templateUrl: './reserve.component.html',
    styleUrls: ['./reserve.component.css'],
})
export class ReserveComponent implements OnInit {

    courses: Course[] = COURSES;

    coursesTotal = this.courses.length;

    

    ngOnInit() {

       

    }

    onEditCourse() {

            this.courses[1].category = 'ADVANCED';

    }




}
