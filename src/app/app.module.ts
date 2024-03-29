import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { HighLight } from './directive/HighLight.directive';
import { RenderHighLightDirective } from './directive/render-high-light.directive';
import { AternateIfDirective } from './directive/aternate-if.directive';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule  ,Routes} from '@angular/router';
const routes: Routes = [
  {
    path:"login",component:LoginComponent
  }
  ,{
    path:"home",component:HomeComponent
  },{
    path:"products",component:ProductsComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    ProfileComponent,
    ProductsComponent,
    HighLight,
    RenderHighLightDirective,
    AternateIfDirective,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
  RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
