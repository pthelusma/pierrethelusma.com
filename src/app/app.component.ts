import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/';
import { FooterComponent } from './footer/';
import { ContentComponent } from './content/';
import { BuildService } from './build.service';
import { Build } from './Build';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [BuildService]
})
export class AppComponent implements OnInit {
  title = 'This is the title. New title. Again!!!!!!';
  build: Build;

  constructor(private buildService: BuildService) { }

  getBuild(): void {
    this.buildService.getBuild()
      .subscribe(build => this.build = build, //Bind to view
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });  
  }

  ngOnInit(): void {
    this.getBuild();
  }
}
