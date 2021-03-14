import data from '../data/sensor_readings.json';
import { SensorReading } from './sensor-reading';

export const SENSOR_DATA: SensorReading[] = data.slice(0, 1000);
