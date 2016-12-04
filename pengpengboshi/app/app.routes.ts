import { Routes } from '@angular/router';

import { LoginRoutes } from './routes/index';
import { SignupRoutes } from './routes/index';

import { LoginComponent } from './login/index';

export const routes: Routes = [
	...LoginRoutes,
	...SignupRoutes,
	{ path: '**', component: LoginComponent }
];
