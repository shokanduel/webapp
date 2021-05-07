import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { 
        path: 'login', 
        component: LoginComponent,
        canActivate: []
    },
    { 
        path: 'dashboard', 
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: []
    },
    { 
        path: 'duel-room', 
        loadChildren: () => import('./duel-room/duel-room.module').then(m => m.DuelRoomModule),
        canActivate: []
    }
]

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {

}