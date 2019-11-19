import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'user-switch', pathMatch: 'full' },
  { path: 'staff-home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'user-switch', loadChildren: './user-switch/user-switch.module#UserSwitchPageModule' },
  { path: 'student-home', loadChildren: './student-home/student-home.module#StudentHomePageModule' },
  { path: 'lect-room', loadChildren: './lect-room/lect-room.module#LectRoomPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
