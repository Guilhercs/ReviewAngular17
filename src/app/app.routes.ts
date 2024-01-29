import { ParentsComponent } from './input-output/parents/parents.component';
import { Routes } from '@angular/router';
import { ControwFlowComponent } from './controw-flow/controw-flow.component';
import { DeferrablesComponent } from './deferrables/deferrables.component';
import { SignalsComponent } from './signals/signals.component';
import { AnimationsComponent } from './animations/animations.component';

export const routes: Routes = [
  { path: '', component: ControwFlowComponent },
  { path: 'deferrables', component: DeferrablesComponent },
  { path: 'signals', component: SignalsComponent },
  { path: 'parents', component: ParentsComponent },
  { path: 'animations', component: AnimationsComponent },
];
