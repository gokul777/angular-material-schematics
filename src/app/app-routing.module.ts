import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SidenavigationComponent } from "./schematics/sidenavigation/sidenavigation.component";
import { DashboardComponent } from "./schematics/dashboard/dashboard.component";
import { FormComponent } from "./schematics/form/form.component";
import { TableComponent } from "./schematics/table/table.component";
import { TreeComponent } from "./schematics/tree/tree.component";
import { DragdropComponent } from "./schematics/dragdrop/dragdrop.component";

const routes: Routes = [
  {
    path: "",
    component: SidenavigationComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "form", component: FormComponent },
      { path: "table", component: TableComponent },
      { path: "tree", component: TreeComponent },
      { path: "drag", component: DragdropComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
