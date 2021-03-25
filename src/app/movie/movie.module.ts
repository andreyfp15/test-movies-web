import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: DetailsComponent },
  { path: 'index', component: IndexComponent },
  { path: 'details', component: DetailsComponent },
];

@NgModule({
  declarations: [IndexComponent, DetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class MovieModule { }
