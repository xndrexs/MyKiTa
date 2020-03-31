import {Component, Input, OnInit} from '@angular/core';
import {Menu} from '../../../../model/menu.model';

@Component({
  selector: 'my-kita-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: Menu | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
