
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from "./app.module"
import {enableProdMode} from '@angular/core';

/*
    This code initializes the platform that your application runs in,
        then uses the platform to bootstrap your AppModule.
 */
enableProdMode();
const platform = platformBrowserDynamic();
      platform.bootstrapModule(AppModule);