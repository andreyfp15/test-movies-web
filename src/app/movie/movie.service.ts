import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  public search(page: number, query: string){
    return this.http.get(environment.API + 'movie/' + page.toString() + '/' + query);
  }

  public details(id:number){
    return this.http.get(environment.API + 'movie/' + id.toString());
  }

  public updateMovieRating(movieRating: any){
    return this.http.put(environment.API + 'movierating', movieRating);
  }

}
