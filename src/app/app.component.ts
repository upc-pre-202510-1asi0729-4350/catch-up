import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {SideNavigationBarComponent} from './public/components/side-navigation-bar/side-navigation-bar.component';

@Component({
  selector: 'app-root',
  imports: [
    SideNavigationBarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'catch-up';
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
