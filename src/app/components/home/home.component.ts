import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';

declare var bootstrap: any;

@Component({
  selector: 'app-home',
  imports: [RouterLink, NgOptimizedImage, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  environment = environment;
  @ViewChild('toastE2', { static: true }) toastElement!: ElementRef;

  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  showToast() {
    const toast = new bootstrap.Toast(this.toastElement.nativeElement);
    toast.show();
  }
}
