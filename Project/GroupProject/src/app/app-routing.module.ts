import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ItemCreateComponent } from './item-create/item-create.component';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { ItemMenuComponent } from './item-menu/item-menu.component';
import { ItemPreviewComponent } from './item-preview/item-preview.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'item-edit/:itemID', component: ItemEditComponent },
  { path: 'item-create', component: ItemCreateComponent },
  { path: 'item/:itemID', component: ItemMenuComponent }, 
  { path: 'main-menu', component: MainMenuComponent }, 
  { path: 'profile', component: ProfileComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
