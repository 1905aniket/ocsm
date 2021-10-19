import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './main/about/about.component';
import { CareerComponent } from './main/career/career.component';
import { ContactComponent } from './main/contact/contact.component';
import { ProductComponent } from './main/product/product.component';
import { ServicesComponent } from './main/services/services.component';

const routes: Routes = [

  {path:'Home' , component:HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'Career', component: CareerComponent},
  {path:'Contact', component: ContactComponent},
  {path:'Service', component: ServicesComponent},
  {path:'product', component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
