import { Routes } from '@angular/router';
import { HomeComponent } from './src/app/home/home.component';
import { DetailsComponent } from './src/app/details/details.component';

export const routes: Routes = [];
const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page'
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Home details'
    }
  ];
  
  export default routeConfig;