import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { Routes , RouterModule} from '@angular/router';
import { ServiceService } from './Service.Service';

// import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './authconfig.interceptor';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';


// import {allAppRoutes} from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RegisterComponent,
    LoginComponent,
    TodoComponent,
  
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    
    // RouterModule.forRoot(allAppRoutes),
  ],
  providers: [ {
    provide : HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi   : true,
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
