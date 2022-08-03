import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponentComponent } from './demo-component/demo-component.component';
import { StruDirectivesComponent } from './stru-directives/stru-directives.component';
import { AttrDirectivesComponent } from './attr-directives/attr-directives.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { DataBindingOneComponent } from './data-binding-one/data-binding-one.component';
import { DataBindingTwoComponent } from './data-binding-two/data-binding-two.component';
import { ServiceDemoComponent } from './service-demo/service-demo.component';
import { HttpDemoComponent } from './http-demo/http-demo.component';
import { TdfComponent } from './tdf/tdf.component';
import { ArfComponent } from './arf/arf.component';

const routes: Routes = [
  {path:'component', component:DemoComponentComponent},
  {path:'structualDir', component:StruDirectivesComponent},
  {path:'attributeDir', component:AttrDirectivesComponent},
  {path:'pipes', component:PipesDemoComponent},
  {path:'dbone', component:DataBindingOneComponent},
  {path:'dbtwo', component:DataBindingTwoComponent},
  {path:'service', component:ServiceDemoComponent},
  {path:'httpdemo', component:HttpDemoComponent},
  {path:'tdf', component:TdfComponent},
  {path:'arf', component:ArfComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
