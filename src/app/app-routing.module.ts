import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllEmpDataComponent } from './all-emp-data/all-emp-data.component';
import { BodyComponent } from './body/body.component';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  {path:'',  redirectTo: '/body', pathMatch: 'full'},
  {path:'body',component:BodyComponent},
  // {path:'allED',component:AllEmpDataComponent},
  {path:'layout',component:LayoutComponent,
  children:[
    {path:'alled',component:AllEmpDataComponent}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
