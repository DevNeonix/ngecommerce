import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Title';
  menuList = [
    {
      title: 'Home'
    },
    {
      title: 'Shop'
    },
    {
      title: 'Collections'
    },
    {
      title: 'Pages'
    },
    {
      title: 'Blog'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
