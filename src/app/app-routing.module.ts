import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterContentComponent } from "./router-content/router-content.component";
import { ActivateComponent } from "./guard-components/activate/activate.component";
import { ActivateChildComponent } from "./guard-components/activate-child/activate-child.component";
import { DeactivateComponent } from "./guard-components/deactivate/deactivate.component";
import { LoadComponent } from "./guard-components/load/load.component";
import { ResolveComponent } from "./guard-components/resolve/resolve.component";
import { RouterManagerGuard } from "./guards/router-manager.guard";
import { ActivateChildAcceptComponent } from "./guard-components/activate-child-accept/activate-child-accept.component";
import { ActivateChildFailComponent } from "./guard-components/activate-child-fail/activate-child-fail.component";
import { NotFoundPageComponent } from "./components/not-found-page/not-found-page.component";

const routes: Routes = [
  {
    path: 'activate',
    component: ActivateComponent,
    canActivate: [RouterManagerGuard]
  },
  {
    path: 'activateChild',
    component: ActivateChildComponent,
    canActivate: [RouterManagerGuard],
    canActivateChild: [RouterManagerGuard],
    children: [
      {
        path: 'accept',
        component: ActivateChildAcceptComponent,
      },
      {
        path: 'fail',
        component: ActivateChildFailComponent
      }
    ]
  },
  {
    path: 'deactivate',
    component: DeactivateComponent,
    canDeactivate: [RouterManagerGuard]
  },
  {
    path: 'load',
    loadChildren: () => import('./guard-components/load/load.module').then( m => m.LoadModule),
    canLoad: [RouterManagerGuard]
  },
  {
    path: 'resolve',
    component: ResolveComponent,
    resolve: {
      data: RouterManagerGuard,
    }
  },
  {
    path: 'not-found',
    component: NotFoundPageComponent
  },
  {
    path: '**',
    component: RouterContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
