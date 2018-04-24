import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedComponent } from './shared/shared.component';
import { HeaderComponent} from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AgmCoreModule.forRoot({
     apiKey: 'AIzaSyBeSuJbAPirjvZ0mEDxd-g05P5_f6gkAlQ'
   })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
