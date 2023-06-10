import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { RetrieveComponent } from './retrieve/retrieve.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [          
  {path:'product'  ,component:RetrieveComponent},
  {path:'create',component:CreateComponent},
  {path:'update/:id',component:UpdateComponent},
  {path:'', redirectTo:'product', pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }