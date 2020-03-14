export const PackageTypes: PackageType[] = [
  {type: 'Envelope', description: 'Strong envelope for documents up to legal size.', maxWeight: 70, weightUnit: 'lbs' },
  {type: 'My Package', maxWeight: 150, weightUnit: 'lbs', maxHeight: 100, maxLength: 100, maxWidth: 100, lengthUnit: 'in' },
  {type: 'Small Box', description: 'This Box is suited for a wide range of items, including computer printouts and electronic parts.',
   maxWeight: 150, weightUnit: 'lbs', maxHeight: 13, maxLength: 11, maxWidth: 2, lengthUnit: 'in' },
  {type: 'Medium Box', description: 'This Box is suited for a wide range of items, including computer printouts and electronic parts.',
   maxWeight: 150, weightUnit: 'lbs', maxHeight: 16, maxLength: 11, maxWidth: 3, lengthUnit: 'in' },
  {type: 'Large Box', description: 'This Box is suited for a wide range of items, including computer printouts and electronic parts.',
   maxWeight: 150, weightUnit: 'lbs', maxHeight: 18, maxLength: 13, maxWidth: 3, lengthUnit: 'in' },
  {type: 'Pak', maxWeight: 150, weightUnit: 'lbs', maxHeight: 17, maxLength: 13, maxWidth: 1, lengthUnit: 'in' },
];

export class PackageType {
  type: string;
  description?: string;
  maxWeight: number;
  weightUnit: string;
  maxHeight?: number;
  maxWidth?: number;
  maxLength?: number;
  lengthUnit?: string;
}
