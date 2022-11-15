import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', loadChildren: () => import('./Website/website.module').then(m => m.WebsiteModule) },
  // { path: 'PgUser', loadChildren: () => import('./User/user.module').then(m => m.UserModule), canActivate: [GuardGuard] },
  // { path: 'PgCareTaker', loadChildren: () => import('./Admin/admin.module').then(m => m.AdminModule), canActivate: [GuardGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
