import { Schedule } from './schedule.model';
import { Image } from './image.model';
import { Externals} from './externals.model'
import { Rating } from './rating.model';
export class Show{
    id: number;
    name: string;
    image: Image;
    status: string;
    schedule: Schedule;
    externals: Externals;
    officialSite: string;
    language: string;
    genres: string[];
    rating: Rating;
    summary: string;
}