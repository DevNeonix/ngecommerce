import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-socials',
  template: `
    <div class="header-socials bg-danger">
      <div class="container">
        <div class="row py-2 justify-content-between">
          <div class="col-6 col-md-3 col-lg-2">
            <div class="social-icons">
              <ul
                class="list-unstyled d-flex  justify-content-start justify-content-lg-between align-items-center p-0 m-0"
              >
                <li>
                  <a href="https://www.facebook.com/" class="px-2">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" class="px-2">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/" class="px-2">
                    <i class="fab fa-instagram"> </i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/" class="px-2">
                    <i class="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-6 col-md-3 d-flex justify-content-end">
            <a href="" class="mx-3">Login</a>
            <a href="" class="mx-3">Registro</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      a, i {
        color: #fff;
      }
    `,
  ],
})
export class HeaderSocialsComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }
}
