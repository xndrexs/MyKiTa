import {MenuItemList} from './menu-item-list';

export class MenuItem {
    label?: string;
    active? = true;
    items: Array<MenuItemList> = [];
}
