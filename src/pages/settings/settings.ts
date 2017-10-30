import {BackgroundService} from "../../services/background";
import {Component} from "@angular/core";
import {IonicPage, Toggle} from "ionic-angular";
import {Observable} from "rxjs/Observable";

@IonicPage()
@Component({
  selector: "page-settings",
  templateUrl: "settings.html"
})
export class SettingsPage {
  checked$: Observable<boolean>;

  constructor(private bgService: BackgroundService) {}

  onToggle(toggle: Toggle) {
    this.bgService.checked.next(toggle.checked);
  }

  ngOnInit() {
    this.checked$ = this.bgService.checked;
  }
}
