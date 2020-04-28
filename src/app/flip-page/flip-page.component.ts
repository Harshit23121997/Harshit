import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition, group, query } from '@angular/animations'

@Component({
  selector: 'app-flip-page',
  templateUrl: './flip-page.component.html',
  styleUrls: ['./flip-page.component.css'],
  animations: []
})
export class FlipPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['landing'])
    }, 5000);

  }

}
