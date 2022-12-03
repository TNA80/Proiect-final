import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProgramariComponent } from './components/programari/programari.component';
import { HomeComponent } from './components/home/home.component';
import { AparateComponent } from './components/aparate/aparate.component';
import { AboutComponent } from './components/about/about.component';
import { ErrorComponent } from './components/error/error.component';
import { ProgramariOnlineComponent } from './components/programari-online/programari-online.component';



const appRoute: Routes = [
  // {path:'', component: HomeComponent},
  {path:'', redirectTo:'Home', pathMatch: 'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'Aparate', component: AparateComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Programari', component: ProgramariComponent},
  {path:'**',component: ErrorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProgramariComponent,
    HomeComponent,
    AparateComponent,
    AboutComponent,
    ErrorComponent,
    ProgramariOnlineComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
