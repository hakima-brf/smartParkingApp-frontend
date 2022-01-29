import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {ReserveComponent} from './reserve.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {CoursesModule} from '../courses/courses.module';

@NgModule({
    declarations: [
        ReserveComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        CoursesModule
    ],
    providers: [],
    bootstrap: [ReserveComponent],
})
export class ReserveModule {

}
