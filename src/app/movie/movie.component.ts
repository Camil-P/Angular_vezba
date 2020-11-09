import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Movie } from '../user';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() movie : Movie;

  constructor() { }

  ngOnInit(): void {
  }

}