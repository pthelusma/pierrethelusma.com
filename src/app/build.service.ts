import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Build } from './Build'

@Injectable()
export class BuildService {

  constructor(private http:Http) { }

  getBuild() : Observable<Build> {
    return this.http
      .get('/assets/build.json')
      .map((res:Response) => res.json());
  }
}

