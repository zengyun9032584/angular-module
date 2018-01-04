import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModel } from '@angular/forms/src/directives/ng_model';

const route: Routes = [
    {
        path: '',
        redirectTo: '/scroll-load',
        pathMatch: 'full'
    },
    {
        path: 'scroll-load',
        loadChildren: '../scroll/scroll.module#ScrollModule'
    },
    {
        path: 'filter',
        loadChildren: '../filter/filter.module#FilterModule'
    },
    {
        path: 'div-bind',
        loadChildren: '../directive/directive.module#DirectiveModule'
    },
    {
        path: 'async-service',
        loadChildren: '../service/service.module#ServiceModule'
    },
    {
        path: '**',
        redirectTo: '/scroll-load',
    }
];

@NgModule({
    imports: [RouterModule.forRoot(route, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
})
export class RootRouteModule { }
