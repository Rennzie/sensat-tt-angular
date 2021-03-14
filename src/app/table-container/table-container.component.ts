import { Component, OnInit } from '@angular/core';
import { SENSOR_DATA } from '../sensor-data';

@Component({
  selector: 'app-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.css'],
})
export class TableContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  hero = 'Sean';

  sensorReadings = SENSOR_DATA;
}
