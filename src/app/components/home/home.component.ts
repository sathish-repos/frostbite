import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  environment = environment;
  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
