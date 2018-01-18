import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'studijoop-nav-footer',
  templateUrl: './nav-footer.component.html',
  styleUrls: ['./nav-footer.component.scss']
})
export class NavFooterComponent {

  public showFooter = false;

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.router.url !== '') {
      this.showFooter = true;
    }
  }

  goToNextPage() {
    const currentRoute = this.router.url.substr(1);
    const nextRoute = this.router.config[this.getRouteIndex(currentRoute) + 1];
    const goToRoute = nextRoute ? nextRoute.path : currentRoute;

    this.router.navigate(['/' + goToRoute]);
  }

  goToPreviousPage() {
    const currentRoute = this.router.url.substr(1);
    let nextRouteIndex = this.getRouteIndex(currentRoute);
    nextRouteIndex = nextRouteIndex === 1 ? nextRouteIndex : nextRouteIndex - 1;

    const prevRoute = this.router.config[nextRouteIndex];
    const goToRoute = prevRoute ? prevRoute.path : currentRoute;

    this.router.navigate(['/' + goToRoute]);
  }

  goToFirstPage() {
    const firstRoute = this.router.config[1];
    this.router.navigate(['/' + firstRoute.path]);
  }

  goToLastPage() {
    const firstRoute = this.router.config[this.router.config.length - 1];
    this.router.navigate(['/' + firstRoute.path]);
  }

  private getRouteIndex(currentRoute: string): number {
    for (let i = 0; i < this.router.config.length; i++) {
      if (this.router.config[i].path === currentRoute) {
        return i;
      }
    }
  }
}
