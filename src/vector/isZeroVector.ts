import { IVector } from "../types";
import values from 'lodash/values';

const isZeroVector = (vector: IVector) => {
  return values(vector).every(v => v === 0);
}

export default isZeroVector;