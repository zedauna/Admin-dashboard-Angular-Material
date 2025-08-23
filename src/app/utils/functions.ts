import { IPeriodicElement } from "../interfaces/periodic.interface.js";
import { NAMES, SYMBOL } from "../models/periodic.model.js";

    /** Builds and returns a new User. */
export const createNewRender=(id: number): IPeriodicElement =>{
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';
  return {
    position: id,
    name: name,
    weight: Math.round(Math.random() * 100),
    symbol: SYMBOL[Math.round(Math.random() * (SYMBOL.length - 1))],
  }

}

interface Gender{
  gender: 'male' | 'female';
};

export const genderCount = (obj: Gender[]):{male:number;female:number}=> {
    return obj.reduce(
      (acc, g) => {
        if (g.gender === 'male') {
            acc.male += 1;
        } else {
            acc.female += 1;
        } 
        return acc; 
    }, {male: 0, female: 0});
}
