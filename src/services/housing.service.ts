import {Housing} from '../interfaces/housing.interfaces';

export const fetchHousingData = async (): Promise<
  [Housing[] | null, unknown]
> => {
  try {
    const result = await fetch(
      'http://5e148887bce1d10014baea80.mockapi.io/keycash/challenge',
    );
    const json: Housing[] = await result.json();
    console.log('[Service]', {length: json.length});
    return [json, null];
  } catch (error) {
    return [null, error];
  }
};
