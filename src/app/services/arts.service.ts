import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const API_ENDPOINT = 'https://creative-gallery.firebaseio.com/items.json';


@Injectable()
export class ArtsService {

    constructor(private http: Http) { }

    addArt(art) {
        return this.http.post(API_ENDPOINT, art)
            .map(res => res.json());
    }
}