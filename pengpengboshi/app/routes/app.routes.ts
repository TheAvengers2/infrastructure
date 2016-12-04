import { Routes } from '@angular/router';

import { LoginRoutes } from './login.routes';
import { SignupRoutes } from './signup.routes';

import { LoginComponent } from '../login/index';

export const routes: Routes = [
	...LoginRoutes,
	...SignupRoutes,
	{ path: '**', component: LoginComponent }
];
