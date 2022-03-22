import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'elements',
    loadChildren: () =>
      import('./elements/elements.module').then((m) => m.ElementsModule)
  }, //this lazily loads the module instead of using the app.module.ts
  {
    path: 'views',
    loadChildren: () =>
    import('./views/views.module').then(m=>m.ViewsModule)
  },
  {
    path: 'collections',
    loadChildren: () =>
      import('./collections/collections.module').then((m) => m.CollectionsModule)
  }, //this lazily loads the module instead of using the app.module.ts
  {
    path: 'mods',
    loadChildren: () =>
      import('./mods/mods.module').then((m) => m.ModsModule)
  }, //this lazily loads the module instead of using the app.module.ts
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
