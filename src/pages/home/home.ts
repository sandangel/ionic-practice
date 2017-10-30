import {Component} from "@angular/core";
import {IonicPage} from "ionic-angular";
import {BLE} from "@ionic-native/ble";
import {Observable} from "rxjs/Observable";

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  tapped = 0;
  pressed = 0;

  device$: Observable<any>;

  constructor(private ble: BLE) {}

  resetAll() {
    this.tapped = 0;
    this.pressed = 0;
  }

  resetTaps() {
    this.tapped = 0;
    this.device$ = this.ble.scan([], 5000);
  }

  resetPresses() {
    this.pressed = 0;
  }
}
