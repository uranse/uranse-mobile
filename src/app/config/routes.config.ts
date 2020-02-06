import { IRouteData } from './../models/route.model';

export const SHIPPINGPAGEROUTES: IRouteData[] = [
  {
    title: 'Shipping history',
    url: 'ship/history',
    iconName: 'time'
  },
  {
    title: 'Ship a package',
    url: 'ship/send',
    iconName: 'cube'
  }
];