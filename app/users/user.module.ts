//Modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { ReactiveFormsModule } from '@angular/forms'

//Component
import { LoginComponent } from './login/login.component';


//Service


@NgModule({
    imports: [ 
        SharedModule,
        UserRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [ 
        LoginComponent
    ],
    exports: [  ],
    providers: [ LoginComponent ]
})

export class UserModule{  }