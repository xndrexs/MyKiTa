import {MenuItem} from './menu-item.model';

export class Menu {
    label?: string;
    active?: boolean = true;
    items: Array<MenuItem> = [];
}
