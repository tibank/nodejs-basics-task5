import { user } from '../modules/users/user.schema';
import { genre } from '../modules/genres/genre.schema';
import { album } from '../modules/albums/album.schema';
import { artist } from '../modules/artists/artist.schema';
import { band } from '../modules/bands/band.schema';
import { favourites } from '../modules/favourites/favourites.schema';
import { track } from '../modules/tracks/track.schema';

export const typeDefs = [user, genre, album, artist, band, favourites, track];
