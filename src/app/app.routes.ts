import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { FoodPageComponent } from './food-page/food-page.component';

export const routes: Routes = [
    {path:'', component:HomeComponent },
    {path:'search/:searchTerm', component:HomeComponent },
    {path:'tag/:tag', component:HomeComponent },
    {path: 'food/:id', component:FoodPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }