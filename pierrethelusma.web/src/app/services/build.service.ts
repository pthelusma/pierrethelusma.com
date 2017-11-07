import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Build } from '../business-object/build';

@Injectable()
export class BuildService {

  constructor(private http: Http) { }

  getBuild(): Observable<Build> {
    return this.http
      .get('/assets/version.json')
      .map((res: Response) => new Build(res.json()));
  }
}


