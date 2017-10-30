import {HomePageModule} from "../pages/home/home.module";
import {ErrorHandler, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {SplashScreen} from "@ionic-native/splash-screen";
import {StatusBar} from "@ionic-native/status-bar";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {IonicApp, IonicErrorHandler, IonicModule} from "ionic-angular";
import {BLE} from "@ionic-native/ble";

import {ComponentsModule} from "../components/components.module";
import {FavoritesPageModule} from "../pages/favorites/favorites.module";
import {LibraryPageModule} from "../pages/library/library.module";
import {QuotePageModule} from "../pages/quote/quote.module";
import {QuotesPageModule} from "../pages/quotes/quotes.module";
import {SettingsPageModule} from "../pages/settings/settings.module";
import {TabsPage} from "../pages/tabs/tabs";
import {AppReducers} from "../store/app.store";
import {MyApp} from "./app.component";

const PAGES = [
  FavoritesPageModule,
  LibraryPageModule,
  QuotePageModule,
  QuotesPageModule,
  SettingsPageModule,
  HomePageModule,
  ComponentsModule
];

@NgModule({
  declarations: [MyApp, TabsPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ...PAGES,
    StoreModule.forRoot(AppReducers),
    StoreDevtoolsModule.instrument({maxAge: 25})
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, TabsPage],
  providers: [StatusBar, SplashScreen, {provide: ErrorHandler, useClass: IonicErrorHandler}, BLE]
})
export class AppModule {}
