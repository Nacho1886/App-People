import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Person } from '../../interfaces/person';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'no',
    'nombre',
    'categoria',
    'empresa',
    'nivelFelicidad',
    'fav',
  ];
  dataSource: MatTableDataSource<Person> | null = null;

  @Input() set items(value: Person[] | null) {
    if (value) this.dataSource = new MatTableDataSource(value);
  }

  @Output() emitPerson = new EventEmitter<Person>();

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    if (!this.dataSource) {
      throw new Error('Data source is not set');
    }
    this.dataSource.sort = this.sort;
  }

  touchFav(person: Person) {
    this.emitPerson.emit(person);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (!this.dataSource) {
      throw new Error('Data source is not set');
    }
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
