import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MovieService } from '../movie.service';
import { Helper } from '../../app.helper';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  page: number = 1;
  query = null;
  returnApi = <any>{ results: [], total_pages: 0 };
  returnMoreResults = <any>{ results: [] };
  queryChanged = false;

  constructor(private service: MovieService, private toast: ToastrService, private route: Router) {

  }

  ngOnInit() {
  }

  search() {
    Helper.showLoader();

    if (this.query == null || this.query == '') {
      this.toast.warning('O campo pesquisa é obrigatório.');
      Helper.hideLoader();
      return;
    }

    this.service.search(this.page, this.query).subscribe(data => {
      this.returnApi = data;

      if (this.returnApi.results == null || this.returnApi.results.length == 0)
        this.toast.warning('Nenhum filme encontrado', 'Atenção!');

      this.queryChanged = false;
      Helper.hideLoader();
    }, error => {
      this.toast.error('Erro ao carregar lista. ' + error.message, 'Erro!');
      Helper.hideLoader();
    });
  }

  changeQuery() {
    this.queryChanged = true;
  }

  showMoreResults() {
    Helper.showLoader();

    this.page++;
    this.service.search(this.page, this.query).subscribe(data => {

      this.returnMoreResults = data;

      for (var i = 0; i < this.returnMoreResults.results.length; i++) {
        this.returnApi.results.push(this.returnMoreResults.results[i])
      }

      Helper.hideLoader();
    }, error => {
      this.toast.error('Erro ao carregar lista. ' + error.message, 'Erro!');
      Helper.hideLoader();
    });
  }

  detailMovie(id:number) {
    Helper.showLoader();
    this.route.navigate(['details', id]);
  }

}
