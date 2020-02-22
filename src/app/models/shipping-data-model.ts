export class ShippingOrderModel {
  senderAddress: Address;
  receiverAddress: Address;
  service: string;
  weight: number;
  description: string;
}
export class Address {
  name: string;
  businessName?: string;
  address1: string;
  address2?: string;
  country: string;
  state: string;
  city: string;
  postalCode?: string;
  phone: string;
  email: string;
  isResidential: boolean;
}
