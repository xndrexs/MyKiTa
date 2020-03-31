import {Component, OnInit} from '@angular/core';
import {Menu} from "../../../model/menu.model";

@Component({
    selector: 'my-kita-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    readonly menu: Array<Menu> = [
        {
            label: 'Menü',
            active: true,
            items: [
                {name: 'Übersicht', icon: 'home', link: 'dashboard'},
                {name: 'Kinder', icon: 'baby', link: 'children'},
                {name: 'Organisation', icon: 'sitemap', link: 'orga'},
                {name: 'Aktivitäten', icon: 'running', link: 'activities'}
            ]
        },
        {
            label: 'Noch ein Menü',
            active: true,
            items: [
                {name: 'Übersicht', icon: 'home', link: 'dashboard'},
                {name: 'Kinder', icon: 'baby', link: 'children'},
                {name: 'Organisation', icon: 'sitemap', link: 'orga'},
                {name: 'Aktivitäten', icon: 'running', link: 'activities'}
            ]
        },
    ];

    constructor() {
    }

    ngOnInit(): void {
    }
}
