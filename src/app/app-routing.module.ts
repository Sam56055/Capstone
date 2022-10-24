import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeanTestComponent } from './mean-test/mean-test.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {
    path:"", component: StudentListComponent
  },
  // {
  //   path: " ",
  //   component: ReactiveformsComponent},
  {
  path: 'section3',
  component: MeanTestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
