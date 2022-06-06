import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-resolve',
  templateUrl: './resolve.component.html',
  styleUrls: ['./resolve.component.scss']
})
export class ResolveComponent implements OnInit {
  content: any
  constructor(private router: ActivatedRoute) {
    this.content = this.router.snapshot.data;
  }

  ngOnInit(): void {
  }

}
