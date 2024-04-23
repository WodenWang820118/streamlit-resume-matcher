import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CompareViewComponent } from './views/compare-view/compare-view.component';

export const routes: Routes = [
  {
    path: '',
    component: CompareViewComponent,
  },
];
