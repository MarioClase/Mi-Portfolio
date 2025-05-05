import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';


@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  isDarkMode = false;
  isBrowser: boolean;


  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }


  ngOnInit(): void {

    if(this.isBrowser){

       /**
     * Recuperar el tema almacenado en el almacenamiento local
     */
    const storedTheme = localStorage.getItem('theme');
    this.isDarkMode = storedTheme === 'dark';
    this.applyTheme();
    }
  }


  toogleTheme(): void {

    if (this.isBrowser) {
      this.isDarkMode = !this.isDarkMode;
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
      this.applyTheme();
    }
  }


  applyTheme(): void {
    if (this.isBrowser) {
      const body = document.body;
      if (this.isDarkMode) {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
      } else {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
      }
    }
  }
}
