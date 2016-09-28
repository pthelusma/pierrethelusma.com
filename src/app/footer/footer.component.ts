import { Component, OnInit, Input } from '@angular/core';
import { Build } from '../Build';

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() build: Build;
  constructor() { }

  ngOnInit() {
  }

}
