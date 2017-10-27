import {LibraryPage} from '../library/library';
import {Component} from '@angular/core';
import {FavoritesPage} from '../favorites/favorites';
@Component({
  selector: 'page-tabss',
  template: `
        <ion-tabs selectedIndex="0">
            <ion-tab [root]="favoritesPage" tabTitle="Favorites" tabIcon="star"></ion-tab>
            <ion-tab [root]="libraryPage" tabTitle="Library" tabIcon="book"></ion-tab>
        </ion-tabs>
    `
})
export class TabsPage {
  favoritesPage = FavoritesPage;
  libraryPage = LibraryPage;
}
