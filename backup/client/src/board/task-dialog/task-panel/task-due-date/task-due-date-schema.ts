import * as Yup from 'yup';
import { MAX_DATE, MIN_DATE } from './task-due-date.const';

const isDateValid = (value: string | null | undefined) => {
  return typeof value === 'string' && !Number.isNaN(Date.parse(value));
};
const isDateBlowMax = (value: string) => Date.parse(value) < MAX_DATE.getTime();

const isDateBlowMin = (value: string) => new Date(value).getFullYear() > MIN_DATE.getFullYear();

export const taskDueDateSchema = Yup.object().shape({
  dueDate: Yup.string()
    .required()
    .test('dueDate', 'Invalid Date', (value) => isDateValid(value))
    .test('dueDate', "${path} can' be below the year: " + MIN_DATE.getFullYear() + '.', (value) => {
      return isDateValid(value) && isDateBlowMin(value as string);
    })
    .test(
      'dueDate',
      "${path} can' be above or equal to the year: " + MAX_DATE.getFullYear() + '.',
      (value) => {
        return isDateValid(value) && isDateBlowMax(value as string);
      }
    ),
});
