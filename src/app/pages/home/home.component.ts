import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  color = '';
  url = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.color = params.get('color') || '';
      console.log('color is', this.color);
      console.log('ROUTE', this.route);
      this.url = this.router.url;
    });
  }

  changeStringReplace(e: any) {
    console.log('Should have changed URL to color', e);
    console.log('router data', this.route.snapshot);
    console.log('navigate to', this.router.url.replace(/home\/(\w[^_])*/, `home/${e}`));
    this.router.navigateByUrl(this.router.url.replace(/home\/(\w[^_])*/, `home/${e}`));
  }

  changeNavigate(e: any) {
    console.log('Should have changed URL to color', e);
    console.log('router data', this.route.snapshot);
    this.router.navigate(['../', e], {
      relativeTo: this.route
    });
  }

}
