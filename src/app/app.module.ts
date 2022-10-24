import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MeanTestComponent } from './mean-test/mean-test.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { StudentListComponent } from './student-list/student-list.component';

@NgModule({
    declarations: [AppComponent, MeanTestComponent, ReactiveformsComponent, StudentListComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatButtonModule, 
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
