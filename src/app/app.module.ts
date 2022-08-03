import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DemoComponentComponent } from './demo-component/demo-component.component';
import { StruDirectivesComponent } from './stru-directives/stru-directives.component';
import { AttrDirectivesComponent } from './attr-directives/attr-directives.component';
import { TextDirective } from './text.directive';
import { AppRoutingModule } from './app-routing.module';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { WordcountPipe } from './wordcount.pipe';
import { DataBindingOneComponent } from './data-binding-one/data-binding-one.component';
import { DataBindingTwoComponent } from './data-binding-two/data-binding-two.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceDemoComponent } from './service-demo/service-demo.component';
import { HttpDemoComponent } from './http-demo/http-demo.component';
import { TdfComponent } from './tdf/tdf.component';
import { ArfComponent } from './arf/arf.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponentComponent,
    StruDirectivesComponent,
    AttrDirectivesComponent,
    TextDirective,
    PipesDemoComponent,
    WordcountPipe,
    DataBindingOneComponent,
    DataBindingTwoComponent,
    ServiceDemoComponent,
    HttpDemoComponent,
    TdfComponent,
    ArfComponent,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
