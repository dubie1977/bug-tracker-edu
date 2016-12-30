import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [ RouterModule.forRoot([
        { path: '', redirectTo: 'bugs', pathMatch: 'full'},
        { path: '**', redirectTo: 'bugs'}
    ])
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{

}