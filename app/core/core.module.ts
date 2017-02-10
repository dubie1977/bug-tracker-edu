import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';

//Services
import { FirebaseConfigService } from './service/firebase-config.service';
import { AuthService } from './service/auth.service';

@NgModule({
    imports:[],
    declarations: [],
    exports: []
})
export class CoreModule{
    constructor(@Optional() @SkipSelf() parentModule: CoreModule ){
        if(parentModule){
            throw new Error("CoreModule already exists. Only import in the root/app module");
        }
    }

    static forRoot(): ModuleWithProviders{
        return {
            ngModule: CoreModule,
            providers: [ FirebaseConfigService,
                AuthService ]
        };
    }
}