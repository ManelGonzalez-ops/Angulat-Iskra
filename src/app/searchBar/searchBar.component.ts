import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "searchBar-component",
  templateUrl: "./searchBar.component.html",
  styleUrls: ["./searchBar.component.css"]
})
class SearchBarComponent implements OnInit {
  public results: string[] = [];
  public search: string = "";
  Constructor() {}

  handleInput(e: InputEvent) {
    console.log(e, "valor");
  }
  comemela(e: Event) {
    console.log(e, "evento");
  }
}

export { SearchBarComponent };
