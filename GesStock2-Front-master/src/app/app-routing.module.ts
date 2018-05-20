import { UserProfileComponent } from './user-profile/user-profile.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsListComponent } from './products-list/products-list.component';

/*
* Módulo que enruta las aplicaciones,
* permite navegar entre pantallas (aplicaciones)
*/
const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    //{ path: 'appComponent', component: AppComponent },
    { path: 'users-list', component: UserComponent },
    { path: 'create-user', component: CreateUserComponent },
    { path: 'edit-user', component: CreateUserComponent},
    { path: 'login', component: LoginComponent },
    //{ path: 'navbar', component: NavbarComponent },
    { path: 'index', component: IndexComponent },
    { path: 'products-list', component: ProductsListComponent },
    { path: 'create-product', component: CreateProductComponent },
    { path: 'edit-product', component: CreateProductComponent },
    { path: 'user-profile', component: UserProfileComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }