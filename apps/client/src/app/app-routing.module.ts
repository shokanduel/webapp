import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { UnauthGuard } from './unauth.guard';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [UnauthGuard]
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'duel-room',
        loadChildren: () => import('./duel-room/duel-room.module').then(m => m.DuelRoomModule),
        canActivate: [AuthGuard]
    }
]

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {

}
