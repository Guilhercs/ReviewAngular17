import { Routes } from '@angular/router';
import { ControwFlowComponent } from './controw-flow/controw-flow.component';
import { DeferrablesComponent } from './deferrables/deferrables.component';
import { SignalsComponent } from './signals/signals.component';

export const routes: Routes = [
  { path: '', component: ControwFlowComponent },
  { path: 'deferrables', component: DeferrablesComponent },
  { path: 'signals', component: SignalsComponent },
];
