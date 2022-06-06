import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from "@angular/router";
import { filter } from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  demoLinks = [
    {
      displayText: 'Activate',
      url: '/activate',
      activate: false
    },
    {
      displayText: 'Activate Child',
      url: '/activateChild',
      activate: false
    },
    {
      displayText: 'Activate Child Accept',
      url: '/activateChild/accept',
      activate: false
    },
    {
      displayText: 'Activate Child Fail',
      url: '/activateChild/fail',
      activate: false
    },
    {
      displayText: 'Deactivate',
      url: '/deactivate',
      activate: false
    },
    {
      displayText: 'Load',
      url: '/load',
      activate: false
    },
    {
      displayText: 'Resolve',
      url: '/resolve',
      activate: false
    },
  ]
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(
      changeEvent => {
        if (changeEvent instanceof NavigationEnd) {
          this.demoLinks.forEach((link) => {
            link.activate = link.url === changeEvent.url;
          })
        }
      }
    );
  }
}
