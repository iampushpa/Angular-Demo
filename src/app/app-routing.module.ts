import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ServiceComponent } from './service/service.component';
import { ApiCrudComponent } from './api-crud/api-crud.component';
import { DirectivesComponent } from './directives/directives.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path : "",component:DatabindingComponent},
  {path : "directives",component:DirectivesComponent},
  {path : "template-form",component:TemplateFormComponent},
  {path : "reactive-form1",component:ReactiveFormComponent},
  {path : "service",component:ServiceComponent},
  {path : "api-crud",component:ApiCrudComponent},
  // {path : "**",component:ErrorComponent},
  {path : "**",redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
