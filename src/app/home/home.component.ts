import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { TableComponent } from '../components/table/table.component';
import { HomeViewModel } from './home.view-model';
import { Person } from '../interfaces/person';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TableComponent, MatButton],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  openFavs(people: Person[]) {

  }
  
  private readonly vm = inject(HomeViewModel);

  people$ = this.vm.people$;

  ngOnInit(): void {
    this.vm.onInit();
  }

  changePersonFav(person: Person) {
    const newPerson: Person = {...person, fav: !person.fav};
    this.vm.uploadPerson(newPerson);
  }
}
