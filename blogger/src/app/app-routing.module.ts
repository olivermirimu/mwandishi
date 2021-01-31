import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReaderComponent } from './reader/reader.component';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'blogs',
    loadChildren: () =>
      import('./blogs/blogs.module').then((m) => m.BlogsModule),
  },
  { path: 'reader', component: ReaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
