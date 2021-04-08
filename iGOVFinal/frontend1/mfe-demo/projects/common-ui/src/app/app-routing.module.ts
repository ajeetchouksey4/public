import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'todo',
    loadChildren: () =>
      import('ruleEngine/TodoModule').then((m) => {
        return m.TodoModule;
      }),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('ruleEngine/HomeModule').then((m) => {
        console.log("adfdf");
        return m.HomeModule;
      }),
  },
  {
    path: 'workflow',
    loadChildren: () =>
      import('workflowEngine/WFHomeModule').then((m) => {
        console.log("workflow");
        return m.WFHomeModule;
      }),
  },
  {
    path: 'newMfe1',
    loadChildren: () =>
      import('mfe1/TodoModule').then((m) => {
        console.log('New MFE1');
        return m.TodoModule;
      }),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
