import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		loadComponent: () =>
			import('./pages/workspace/workspace.component')
				.then((component) => component.WorkspaceComponent)
	},
	{
		path: 'referencia/ejemplos',
		loadComponent: () =>
			import('./pages/reference/legacy-examples/legacy-examples.component')
				.then((component) => component.LegacyExamplesComponent)
	},
	{
		path: 'inyection-dependencies',
		loadComponent: () =>
			import('./pages/inyection-dependencies/inyection-dependencies.component')
				.then((component) => component.InyectionDependenciesComponent)
	},
	{
		path: '**',
		redirectTo: ''
	}
];
