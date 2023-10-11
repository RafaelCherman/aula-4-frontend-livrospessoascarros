import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PessoaslistComponent } from './components/pessoas/pessoaslist/pessoaslist.component';
import { PessoasdetailsComponent } from './components/pessoas/pessoasdetails/pessoasdetails.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { IndexComponent } from './components/layout/index/index.component';
import { LoginComponent } from './components/sistema/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LivroslistComponent } from './components/livros/livroslist/livroslist.component';
import { LivrosdetailsComponent } from './components/livros/livrosdetails/livrosdetails.component';
import { CarrosdetailsComponent } from './components/carros/carrosdetails/carrosdetails.component';
import { CarroslistComponent } from './components/carros/carroslist/carroslist.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoaslistComponent,
    PessoasdetailsComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    LoginComponent,
    LivroslistComponent,
    LivrosdetailsComponent,
    CarrosdetailsComponent,
    CarroslistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
