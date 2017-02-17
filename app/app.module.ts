//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BugModule } from './bugs/bug.module';
import { UserModule } from './users/user.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

// Services
import { AuthService } from './core/service/auth.service';
import { FirebaseConfigService } from './core/service/firebase-config.service';

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
    providers:[ AuthService,
                FirebaseConfigService ],
    bootstrap: [ AppComponent ]
})

export class AppModule{ }




