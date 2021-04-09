import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `
    <div class=" p-lg-2 position-relative">
      <nav class="d-flex w-100 bg-white justify-content-between align-items-center px-4 py-2 rounded mb-1 navbar">
        <div class="text-bold d-flex align-items-center text-capitalize nav__title text-dark col-8 col-md-2 col-xl-4">
          <div class="burger-icon cursor-pointer d-lg-none" (click)="showMenuMobile()">
            <div class="burger-bar"></div>
            <div class="burger-bar"></div>
            <div class="burger-bar"></div>
          </div>
          <span>TITLE</span>
        </div>
        <div class="col-7 col-xl-4 d-none d-lg-flex justify-content-center">

          <ul class="d-flex w-100 list-unstyled justify-content-around menu_list text-capitalize">
            <li *ngFor="let menuItem of menuList">
              <a [routerLink]="menuItem.path" routerLinkActive="active">{{menuItem.title}}</a>
            </li>
          </ul>

        </div>
        <div class="col-4 col-md-2 col-xl-4 d-flex justify-content-end">
          <ul class="d-flex list-unstyled menu_list text-capitalize">
            <li class="d-none d-sm-flex">
              <a href=""><i class="bx h4 bx-search"></i></a>
            </li>
            <li class="d-none d-sm-flex">
              <a href=""><i class="bx h4 bx-heart"></i></a>
            </li>
            <li class="d-flex">
              <a href=""><i class="bx h4 bx-shopping-bag"></i></a>
            </li>

          </ul>
        </div>
      </nav>

      <div class="menu_list_mobile d-lg-none" #menuMobile>
        <div (click)="closeMenuMobile()"
             class="d-flex p-3 justify-content-center align-items center position-absolute cursor-pointer"
             style="right: 0;top: 0;font-size: 1.5rem;">
          <i class="mdi mdi-close"></i>
        </div>
        <ul class="d-block w-100 m-0 list-unstyled">
          <li *ngFor="let menuItem of menuList" class="p-3">
            <a href="">{{menuItem.title}}</a>
          </li>
        </ul>
      </div>


    </div>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .nav__title {
      font-size: 1.5rem;
      color: #000;
    }

    @media screen and (max-width: 992px) {
      .navbar {
        position: fixed;
        z-index: 9;
        border-radius: 0 !important;
        border-bottom: 1px solid rgba(0, 0, 0, .1);
      }
    }

    .menu_list {
      margin: 0;
    }

    .menu_list li a {
      padding: 1rem;
      color: #000;
      letter-spacing: 1px;
      font-size: 1rem;
    }
    .menu_list li a.active {
      color: var(--bs-primary);
    }

    .menu_list_mobile {
      position: fixed;
      z-index: 10;
      width: 100%;
      box-shadow: 0 0 10px rgba(0, 0, 0, .8);
      top: -200%;
      left: 0;
      background: rgba(255, 255, 255, .85);
      transition: all 0.3s ease;
      padding-top: 44px;
      padding-bottom: 44px;
    }

    .menu_list_mobile ul {
      width: 100%;
      margin: 0;
      padding: 0;
    }

    .menu_list_mobile ul li {
      transition: all 0.2s ease;
    }

    .menu_list_mobile ul li:hover {
      background: #111;
    }

    .menu_list_mobile ul li:hover a {
      color: #fff;
    }

    .menu_list_mobile ul li a {
      padding: 1rem;
      color: #000;
      letter-spacing: 1px;
      font-size: 1rem;
    }

    .menu_list_mobile.show {
      top: 0;
    }

    .burger-icon {
      width: 18px;
      height: 16px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-right: 1rem;
    }

    .burger-icon .burger-bar {
      width: 100%;
      height: 2px;
      border-radius: 1px;
      background: var(--bs-dark);
    }

  `]
})
export class PagesComponent implements OnInit {
  // @ts-ignore
  @ViewChild('menuMobile') menuMobile: ElementRef;
  menuList = [
    {
      title: 'Inicio',
      path: 'inicio'
    },
    {
      title: 'Tienda',
      path: 'tienda'
    },
    {
      title: 'Colecciones',
      path: 'colecciones'
    },
    {
      title: 'Ofertas',
      path: 'ofertas'
    },
    {
      title: 'Contácto',
      path: 'contacto'
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  showMenuMobile(): void {
    const el = this.menuMobile.nativeElement;
    el.classList.add('show');
  }

  closeMenuMobile(): void {
    const el = this.menuMobile.nativeElement;
    el.classList.remove('show');
  }
}
