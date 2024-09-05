import { Injectable } from "@angular/core";
import { Person } from "../interfaces/person";
import { BehaviorSubject } from "rxjs";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class HomeViewModel {
  private readonly peopleSubject = new BehaviorSubject<Person[]>([]);
  readonly people$ = this.peopleSubject.asObservable();

  public onInit() {
    this.loadPeople();
  }

  uploadPerson(person: Person) {
    const people = this.peopleSubject.value;
    const index = people.findIndex(p => p.nombre === person.nombre);
    people[index] = person;

    this.peopleSubject.next(people);
  }

  private loadPeople() {
    this.peopleSubject.next(people);
  }
}

const people: Person[] = [
  {
    "nombre": "Juan Pérez",
    "categoria": "Empleado",
    "empresa": "Tech Solutions",
    "nivelFelicidad": 8.5,
    "fav": true
  },
  {
    "nombre": "María Gómez",
    "categoria": "Gerente",
    "empresa": "InnovaTech",
    "nivelFelicidad": 9.2,
    "fav": false
  },
  {
    "nombre": "Carlos Ramírez",
    "categoria": "Empleado",
    "empresa": "SoftWare Inc.",
    "nivelFelicidad": 7.3,
    "fav": true
  },
  {
    "nombre": "Ana Martínez",
    "categoria": "Gerente",
    "empresa": "Global Finance",
    "nivelFelicidad": 6.8,
    "fav": false
  },
  {
    "nombre": "Luis Fernández",
    "categoria": "Empleado",
    "empresa": "Creative Design",
    "nivelFelicidad": 8.0,
    "fav": true
  },
  {
    "nombre": "Laura Sánchez",
    "categoria": "Gerente",
    "empresa": "HealthTech",
    "nivelFelicidad": 9.0,
    "fav": false
  },
  {
    "nombre": "David López",
    "categoria": "Empleado",
    "empresa": "Tech Solutions",
    "nivelFelicidad": 7.5,
    "fav": true
  },
  {
    "nombre": "Patricia Morales",
    "categoria": "Gerente",
    "empresa": "InnovaTech",
    "nivelFelicidad": 9.1,
    "fav": false
  },
  {
    "nombre": "Jorge Herrera",
    "categoria": "Empleado",
    "empresa": "SoftWare Inc.",
    "nivelFelicidad": 7.0,
    "fav": false
  },
  {
    "nombre": "Isabel Castro",
    "categoria": "Gerente",
    "empresa": "Global Finance",
    "nivelFelicidad": 8.7,
    "fav": true
  },
  {
    "nombre": "Fernando García",
    "categoria": "Empleado",
    "empresa": "Creative Design",
    "nivelFelicidad": 8.2,
    "fav": true
  },
  {
    "nombre": "Claudia Rodríguez",
    "categoria": "Gerente",
    "empresa": "HealthTech",
    "nivelFelicidad": 9.3,
    "fav": false
  },
  {
    "nombre": "Santiago Díaz",
    "categoria": "Empleado",
    "empresa": "Tech Solutions",
    "nivelFelicidad": 7.8,
    "fav": true
  },
  {
    "nombre": "Mónica Cruz",
    "categoria": "Gerente",
    "empresa": "InnovaTech",
    "nivelFelicidad": 8.9,
    "fav": false
  },
  {
    "nombre": "Alberto Medina",
    "categoria": "Empleado",
    "empresa": "SoftWare Inc.",
    "nivelFelicidad": 7.1,
    "fav": true
  },
  {
    "nombre": "Elena Peña",
    "categoria": "Gerente",
    "empresa": "Global Finance",
    "nivelFelicidad": 8.4,
    "fav": false
  },
  {
    "nombre": "Raúl Serrano",
    "categoria": "Empleado",
    "empresa": "Creative Design",
    "nivelFelicidad": 7.9,
    "fav": true
  },
  {
    "nombre": "Adriana Torres",
    "categoria": "Gerente",
    "empresa": "HealthTech",
    "nivelFelicidad": 9.5,
    "fav": true
  },
  {
    "nombre": "Tomás Romero",
    "categoria": "Empleado",
    "empresa": "Tech Solutions",
    "nivelFelicidad": 7.6,
    "fav": false
  },
  {
    "nombre": "Sofía Delgado",
    "categoria": "Gerente",
    "empresa": "InnovaTech",
    "nivelFelicidad": 8.8,
    "fav": true
  },
  {
    "nombre": "Ricardo Vargas",
    "categoria": "Empleado",
    "empresa": "SoftWare Inc.",
    "nivelFelicidad": 7.4,
    "fav": false
  },
  {
    "nombre": "Gabriela León",
    "categoria": "Gerente",
    "empresa": "Global Finance",
    "nivelFelicidad": 8.6,
    "fav": true
  },
  {
    "nombre": "Pablo Ortiz",
    "categoria": "Empleado",
    "empresa": "Creative Design",
    "nivelFelicidad": 7.7,
    "fav": false
  },
  {
    "nombre": "Verónica Ríos",
    "categoria": "Gerente",
    "empresa": "HealthTech",
    "nivelFelicidad": 9.4,
    "fav": true
  },
  {
    "nombre": "Martín Sandoval",
    "categoria": "Empleado",
    "empresa": "Tech Solutions",
    "nivelFelicidad": 7.2,
    "fav": false
  },
  {
    "nombre": "Lucía Bravo",
    "categoria": "Gerente",
    "empresa": "InnovaTech",
    "nivelFelicidad": 8.5,
    "fav": true
  },
  {
    "nombre": "Álvaro Reyes",
    "categoria": "Empleado",
    "empresa": "SoftWare Inc.",
    "nivelFelicidad": 7.3,
    "fav": true
  },
  {
    "nombre": "Daniela Solís",
    "categoria": "Gerente",
    "empresa": "Global Finance",
    "nivelFelicidad": 9.0,
    "fav": true
  },
  {
    "nombre": "Andrés Gutiérrez",
    "categoria": "Empleado",
    "empresa": "Creative Design",
    "nivelFelicidad": 8.1,
    "fav": false
  },
  {
    "nombre": "Carmen Navarro",
    "categoria": "Gerente",
    "empresa": "HealthTech",
    "nivelFelicidad": 9.2,
    "fav": false
  },
  {
    "nombre": "Rodrigo Álvarez",
    "categoria": "Empleado",
    "empresa": "Tech Solutions",
    "nivelFelicidad": 7.0,
    "fav": true
  },
  {
    "nombre": "Sara Guzmán",
    "categoria": "Gerente",
    "empresa": "InnovaTech",
    "nivelFelicidad": 8.7,
    "fav": true
  },
  {
    "nombre": "Victor Paredes",
    "categoria": "Empleado",
    "empresa": "SoftWare Inc.",
    "nivelFelicidad": 7.1,
    "fav": false
  },
  {
    "nombre": "Natalia Suárez",
    "categoria": "Gerente",
    "empresa": "Global Finance",
    "nivelFelicidad": 8.9,
    "fav": true
  },
  {
    "nombre": "Javier Jiménez",
    "categoria": "Empleado",
    "empresa": "Creative Design",
    "nivelFelicidad": 8.3,
    "fav": true
  },
  {
    "nombre": "Alicia Aguilar",
    "categoria": "Gerente",
    "empresa": "HealthTech",
    "nivelFelicidad": 9.1,
    "fav": false
  },
  {
    "nombre": "Miguel Flores",
    "categoria": "Empleado",
    "empresa": "Tech Solutions",
    "nivelFelicidad": 7.4,
    "fav": true
  },
  {
    "nombre": "Paula Herrera",
    "categoria": "Gerente",
    "empresa": "InnovaTech",
    "nivelFelicidad": 8.6,
    "fav": false
  },
  {
    "nombre": "Hugo Romero",
    "categoria": "Empleado",
    "empresa": "SoftWare Inc.",
    "nivelFelicidad": 7.5,
    "fav": true
  },
  {
    "nombre": "Marina Vega",
    "categoria": "Gerente",
    "empresa": "Global Finance",
    "nivelFelicidad": 9.2,
    "fav": true
  },
  {
    "nombre": "Esteban Morales",
    "categoria": "Empleado",
    "empresa": "Creative Design",
    "nivelFelicidad": 8.0,
    "fav": false
  },
  {
    "nombre": "Cristina Ramos",
    "categoria": "Gerente",
    "empresa": "HealthTech",
    "nivelFelicidad": 9.4,
    "fav": true
  },
  {
    "nombre": "Julio Castañeda",
    "categoria": "Empleado",
    "empresa": "Tech Solutions",
    "nivelFelicidad": 7.3,
    "fav": true
  },
  {
    "nombre": "Carla Domínguez",
    "categoria": "Gerente",
    "empresa": "InnovaTech",
    "nivelFelicidad": 8.8,
    "fav": false
  },
  {
    "nombre": "Óscar Figueroa",
    "categoria": "Empleado",
    "empresa": "SoftWare Inc.",
    "nivelFelicidad": 7.2,
    "fav": true
  },
  {
    "nombre": "Teresa Méndez",
    "categoria": "Gerente",
    "empresa": "Global Finance",
    "nivelFelicidad": 8.5,
    "fav": true
  },
  {
    "nombre": "Ignacio Valdez",
    "categoria": "Empleado",
    "empresa": "Creative Design",
    "nivelFelicidad": 7.8,
    "fav": false
  },
  {
    "nombre": "Alejandra Maldonado",
    "categoria": "Gerente",
    "empresa": "HealthTech",
    "nivelFelicidad": 9.0,
    "fav": true
  }
]

