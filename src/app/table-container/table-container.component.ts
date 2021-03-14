import { Component, OnInit } from '@angular/core';
import { SENSOR_DATA } from '../sensor-data';
import { sortByDate, sortByString } from '../../utils/sort';

type SortColumn = 'time' | 'type' | '';

@Component({
  selector: 'app-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.css'],
})
export class TableContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  sortColumn: SortColumn = '';
  sensorReadings = SENSOR_DATA;
  // note: Cloned for ease of reset - SFR 2021-03-14
  readingClone = [...SENSOR_DATA];

  typeClasses() {
    return { 'click-able': true, selected: this.sortColumn === 'type' };
  }

  timeClasses() {
    return { 'click-able': true, selected: this.sortColumn === 'time' };
  }

  updateReadings() {
    if (this.sortColumn === 'type') {
      this.sensorReadings = sortByString(this.readingClone, 'sensor_type');
    } else if (this.sortColumn === 'time') {
      this.sensorReadings = sortByDate(this.readingClone, 'reading_ts', 'desc');
    } else {
      this.sensorReadings = SENSOR_DATA;
    }
  }

  setSortColumn(column: SortColumn) {
    if (this.sortColumn === column) {
      this.sortColumn = '';
    } else {
      this.sortColumn = column;
    }
    this.updateReadings();
  }
}
