import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SearchBarComponent } from "./searchBar/searchBar.component";
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [AppComponent, SearchBarComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
