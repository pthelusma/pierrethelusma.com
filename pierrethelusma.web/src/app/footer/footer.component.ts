import { Component, OnInit } from '@angular/core';
import { BuildService } from '../services/build.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [
    BuildService
  ]
})
export class FooterComponent implements OnInit {

  private build: any;

  constructor(private buildService: BuildService) { }

  getBuild(): void {
    this.buildService.getBuild()
      .subscribe(build => this.build = build, err => {
          // Log errors if any
          console.log(err);
      });
  }

  ngOnInit(): void {
    this.getBuild();
  }

}
