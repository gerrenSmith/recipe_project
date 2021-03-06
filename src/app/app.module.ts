import { NgModule } from '@angular/core';
import { AlertsModule } from './alerts/alerts.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';

/* import {HttpModule} from '@angular/http';*/

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeItemComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        AlertsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
