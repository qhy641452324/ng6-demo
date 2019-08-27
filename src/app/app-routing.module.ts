import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailComponent } from './detail/detail.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';

const routes: Routes = [
  {
    path: '',
    component: Page1Component
  },
  { 
    path: 'detail', 
    component: DetailComponent 
  },
  {
    path:'page1',
    component: Page1Component
  },
  {
    path: 'page2',
    component: Page2Component
  },
  {
    path: 'page3',
    component: Page3Component
  },
  {
    path: 'page4',
    component: Page4Component
  }
]

let rootRouteModule: ModuleWithProviders = RouterModule.forRoot(routes)

@NgModule({
  exports: [RouterModule],
  imports: [rootRouteModule]
})
export class AppRoutingModule { }
