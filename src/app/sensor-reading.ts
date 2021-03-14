type SensorType = 'O3' | 'NO2' | 'CO' | 'TEMP' | 'RH' | string;
type Unit = 'ppm' | '%' | '\u00baC' | string;

export interface SensorReading {
  /** UUID for this sensor reading */
  id: string;
  /** UUID of the box */
  box_id: string;
  /** type of the sensor */
  sensor_type: SensorType;
  /** type of data read by sensor */
  name: string;
  /** measuring range lower bound */
  range_l: number;
  /** measuring range upper bound */
  range_u: number;
  /** location of the box (lon) */
  longitude: number;
  /** location of the box (lat) */
  latitude: number;
  /** actual value being read */
  reading: number;
  /** measurement unit */
  unit: Unit;
  /** when the reading was taken */
  reading_ts: string;
}
