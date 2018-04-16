import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainviewComponent }   from './mainview/mainview.component';
import { UsersComponent }   from './users/users.component';
import { ProductsComponent }   from './products/products.component';
const routes: Routes = [
  { path: '',
    component: MainviewComponent,
    pathMatch: 'full'
  },
  { path: 'users',
    component: UsersComponent,
    pathMatch: 'full'
  },
  { path: 'products',
    component: ProductsComponent,
    pathMatch: 'full'
  },
  { path: '**',
   redirectTo: '/heroes', 
   pathMatch: 'full' },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  providers:[]
})
export class AppRoutingModule { }
