import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import gql from 'graphql-tag';
import { GDE, Query } from '../types';

@Component({
  selector: 'app-gde-list',
  templateUrl: './gde-list.component.html',
  styleUrls: ['./gde-list.component.css']
})
export class GdeListComponent implements OnInit {
  gdes: Observable<GDE[]>;

    constructor(private apollo:Apollo) { }

  ngOnInit() {
    this.gdes = this.apollo.watchQuery<Query>({
      query: gql`
        query allGDEs {
          allGDEs {
            id
            name
            email
            location
            website
            twitter
          }
        }
      `
    })
    .valueChanges
    .pipe(
      map(result => result.data.allGDEs)
    );
  }
}
