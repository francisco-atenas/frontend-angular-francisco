import { Pipe, PipeTransform } from '@angular/core';

const FILE_SIZE_UNITS = ['B', 'KB', 'MB', 'GB', 'TB'];
const FILE_SIZE_UNITS_LONG = [
  'Bytes',
  'Kilobytes',
  'Megabytes',
  'Gigabytes',
  'Terabytes',
];

@Pipe({
  name: 'fileSize',
})
export class FileSizePipe implements PipeTransform {
  transform(sizeInBytes: number, longForm?: boolean): string {
    const units = longForm ? FILE_SIZE_UNITS_LONG : FILE_SIZE_UNITS;

    let power = Math.round(Math.log(sizeInBytes) / Math.log(1024));
    power = Math.min(power, units.length - 1); // Ensure we don't exceed the

    const size = sizeInBytes / Math.pow(1024, power);
    const formattedSize = Math.round(size * 100) / 100; // Round to two decimal places
    const unit = units[power];

    return size ? `${formattedSize} ${unit}` : '0 B';
  }
}
