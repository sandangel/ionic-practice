import {Component, ViewChild} from "@angular/core";
import {SplashScreen} from "@ionic-native/splash-screen";
import {StatusBar} from "@ionic-native/status-bar";
import {MenuController, NavController, Platform} from "ionic-angular";

import {HomePage} from "../pages/home/home";
import {SettingsPage} from "../pages/settings/settings";
import {TabsPage} from "../pages/tabs/tabs";
import {BackgroundService} from "../services/background";

@Component({
  templateUrl: "app.html",
  providers: [BackgroundService]
})
export class MyApp {
  settingsPage = SettingsPage;
  tabsPage = TabsPage;
  homePage = HomePage;

  @ViewChild("nav") nav: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLoad(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }
}
