import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'
import { Helper } from '../../app.helper';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  movie = <any>{ rating: { idMovie: 0, lvlScript: 0, lvlPhotography: 0, lvlSpecialEffects: 0, lvlCast: 0 } };

  constructor(private toast: ToastrService, private service: MovieService, private route: ActivatedRoute, private location: Location, private router :Router ) {

  }

  ngOnInit() {
    this.detailMovie();
  }

  detailMovie(){
    this.service.details(Number(this.route.snapshot.paramMap.get('id'))).subscribe(data => {
      this.movie = data;
      this.movie.rating.idMovie = this.movie.id;
      Helper.hideLoader();
    }, error => {
      this.toast.error('Erro ao detalhar. ' + error.message, 'Erro!');
      Helper.hideLoader();
    });
  }

  setRating(typeRating: number, index: number) {

    if (typeRating == 1) {
      this.movie.rating.lvlScript = (index + 1)
    } else if (typeRating == 2) {
      this.movie.rating.lvlPhotography = (index + 1)
    } else if (typeRating == 3) {
      this.movie.rating.lvlSpecialEffects = (index + 1)
    } else {
      this.movie.rating.lvlCast = (index + 1)
    }

    Helper.showLoader();
    this.service.updateMovieRating(this.movie.rating).subscribe(data => {
      this.toast.success('Avaliação salva com sucesso.');
      this.detailMovie();
    }, error => {
      this.toast.error('Erro ao salvar avaliação. ' + error.message, 'Erro!');
      Helper.hideLoader();
    });

  }

  counter(i: number) {
    return new Array(i);
  }

  back(): void {
    this.router.navigate(['/'])
  }

}
