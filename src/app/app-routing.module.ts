import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { SubjectComponent } from './modules/subject/subject.component';
import { SubjectDetailComponent } from './modules/subject/subject-detail/subject-detail.component';
import { SubjectDeedsComponent } from './modules/subject/subject-deeds/subject-deeds.component';
import { ComparablesComponent } from './modules/comparables/comparables.component';
import { AddendaComponent } from './modules/comparables/addenda/addenda.component';
import { GridComponent } from './modules/comparables/grid/grid.component';
import { CompDeedsComponent } from './modules/comparables/comp-deeds/comp-deeds.component';
import { MapComponent } from './modules/comparables/map/map.component';
import { MarketConditionsComponent } from './modules/market-conditions/market-conditions.component';
import { GraphsComponent } from './modules/market-conditions/graphs/graphs.component';
import { McDetailComponent } from './modules/market-conditions/mc-detail/mc-detail.component';
import { ReportComponent } from './modules/market-conditions/report/report.component';
import { ImportComponent } from './modules/market-conditions/import/import.component';
import { UploadComponent } from './modules/comparables/upload/upload.component';
import { SubjectSearchComponent } from './modules/subject/subject-search/subject-search.component';
import { SummaryComponent } from './modules/summary/summary.component';

const routes: Routes = [
  {
    path: '',
    //component: HomeComponent,
    redirectTo: '/Home',
    pathMatch: 'full'
  },
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'Subject',
    component: SubjectComponent,
    children: [
      {
        // path: 'detail/:id', component: DetailComponent,
        path: 'detail', component: SubjectDetailComponent,
        children: [  // hack to allow a default id value
          { path: ':id', component: SubjectDetailComponent },
          { path: '**', redirectTo: '/Subject/detail/1' }
        ]
      },
      { path: 'deeds', component: SubjectDeedsComponent },
      { path: 'search', component: SubjectSearchComponent },
      { path: '', component: SubjectDetailComponent },
      { path: '**', redirectTo: '/Subject' }
    ]
  },
  {
    path: 'Comparables',
    component: ComparablesComponent,
    children: [
      { path: 'addenda', component: AddendaComponent },
      {
        path: 'grid',
        component: GridComponent,
        children: [ // hack to allow a default id value
          { path: ':id', component: GridComponent },
          { path: '**', redirectTo: '/Comparables/grid/1'}
        ]
      },
      { path: 'deeds', component: CompDeedsComponent },
      { path: 'map', component: MapComponent },
      { path: 'upload', component: UploadComponent },
      { path: '', component: GridComponent }
    ]
  },
  {
    path: 'market-conditions',
    component: MarketConditionsComponent,
    children: [
      { path: 'graphs', component: GraphsComponent },
      { path: 'detail', component: McDetailComponent },
      { path: 'report', component: ReportComponent },
      { path: 'import', component: ImportComponent },
      { path: '', component: ReportComponent }
    ]
  },
  {
    path: 'Summary',
    component: SummaryComponent
  },
  {
    path: '**',
    component: HomeComponent // todo: replace with 404
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
