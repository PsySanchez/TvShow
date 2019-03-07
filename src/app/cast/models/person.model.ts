import { Country } from '../models/country.model';
import { Image } from 'src/app/models/image.model';

export class Person{
    id: number;
    url: string;
    name: string;
    country: Country;
    image: Image;
}