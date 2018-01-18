import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {OverviewComponent} from './overview/overview.component';
import {BannerComponent} from './banner/banner.component';
import {IntroductionComponent} from './introduction/introduction.component';
import {NavFooterComponent} from './nav-footer/nav-footer.component';
import {ProcessComponent} from './process/process.component';
import {RecordingComponent} from './recording/recording.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';

const appRoutes: Routes = [
  {path: '', component: OverviewComponent},
  {path: 'introductie', component: IntroductionComponent},
  {path: 'werkwijze', component: ProcessComponent},
  {path: 'opname', component: RecordingComponent},
  {path: 'over', component: AboutComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    OverviewComponent,
    BannerComponent,
    IntroductionComponent,
    NavFooterComponent,
    ProcessComponent,
    RecordingComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
