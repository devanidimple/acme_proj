import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
  },
  {
    path: 'gallery',
    loadChildren: () =>
      import('gallery/Module').then((m) => m.RemoteEntryModule),
  },
];
