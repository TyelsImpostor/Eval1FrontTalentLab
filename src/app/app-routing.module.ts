import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { LoginComponent } from './general/login/login.component';
import { RegistroComponent } from './general/registro/registro.component';
import { ProductosComponent } from './general/productos/productos.component';
import { HomeComponent } from './general/home/home.component';

//referencia a los componentes
const app_routes: Routes = [
    { path:'', component: HomeComponent},
    { path:'login', component: LoginComponent},
    { path:'registro', component: RegistroComponent },
    { path:'productos', component: ProductosComponent },
];

//decorador. no olvidar importartlo
@NgModule({
    imports: [RouterModule.forRoot(app_routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }