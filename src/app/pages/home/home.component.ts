import { Directionality } from '@angular/cdk/bidi';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private readonly dir: Directionality) {}

  ngOnInit(): void {
    this.dir.change.subscribe((_) => {
      console.log(`dir ${_}`);
    });
  }
}
