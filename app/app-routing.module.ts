import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [ RouterModule.forRoot([
        { path: '', redirectTo: 'login', pathMatch: 'full'},
        { path: 'login', redirectTo: 'login', pathMatch: 'full'},
        { path: 'bugs', redirectTo: 'bugs'}
    ])
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{

}