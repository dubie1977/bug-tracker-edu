//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BugModule } from './bugs/bug.module';
import { UserModule } from './users/user.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

// Component
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
    imports: [ BrowserModule,
            BugModule,
            UserModule,
            AppRoutingModule,
            CoreModule.forRoot()
            ],
    declarations: [ 
        AppComponent,
        NavbarComponent
         ],
    bootstrap: [ AppComponent ]
})

export class AppModule{ }




