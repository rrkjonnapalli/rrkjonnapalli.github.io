import { Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: PortfolioComponent }
];
