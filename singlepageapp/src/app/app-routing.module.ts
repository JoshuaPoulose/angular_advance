import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { RetrieveComponent } from './retieve/retieve.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [{path:'retrieve',component:RetrieveComponent},
{path:'update',component:UpdateComponent},
{path:'delete',component:DeleteComponent},
{path:'create',component:CreateComponent},
{path:'', component:RetrieveComponent},
{path:'', redirectTo:'product', pathMatch:'full'}];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
