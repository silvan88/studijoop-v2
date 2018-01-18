import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {filter, pairwise} from 'rxjs/operators';

@Component({
  selector: 'studijoop-nav-footer',
  templateUrl: './nav-footer.component.html',
  styleUrls: ['./nav-footer.component.scss']
})
export class NavFooterComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events
      .pipe(filter(e => e.constructor.name === 'RoutesRecognized'))
      .pipe(pairwise())
      .subscribe((e: any[]) => {
        localStorage.setItem('referrer', e[0].urlAfterRedirects);
      });
  }
}
