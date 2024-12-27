import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgbNav, NgbNavContent, NgbNavItem, NgbNavLinkBase} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgbNav,
    NgbNavItem,
    NgbNavLinkBase,
    NgbNavContent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
