import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterContentComponent } from './router-content/router-content.component';
import { RouterControlPanelComponent } from './router-control-panel/router-control-panel.component';
import { ToggleSwitchComponent } from './components/toggle-switch/toggle-switch.component';
import { FormsModule } from "@angular/forms";
import { ActivateComponent } from './guard-components/activate/activate.component';
import { ActivateChildComponent } from './guard-components/activate-child/activate-child.component';
import { DeactivateComponent } from './guard-components/deactivate/deactivate.component';
import { LoadComponent } from './guard-components/load/load.component';
import { ResolveComponent } from './guard-components/resolve/resolve.component';
import { ActivateChildAcceptComponent } from './guard-components/activate-child-accept/activate-child-accept.component';
import { ActivateChildFailComponent } from './guard-components/activate-child-fail/activate-child-fail.component';
import { HttpHandleInterceptor } from "./interceptors/http-handle.interceptor";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { TryHttpHandleComponent } from './components/try-http-handle/try-http-handle.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { HttpHandleSecondInterceptor } from "./interceptors/http-handle-second.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RouterContentComponent,
    RouterControlPanelComponent,
    ToggleSwitchComponent,
    ActivateComponent,
    ActivateChildComponent,
    DeactivateComponent,
    ResolveComponent,
    ActivateChildAcceptComponent,
    ActivateChildFailComponent,
    TryHttpHandleComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHandleInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHandleSecondInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
