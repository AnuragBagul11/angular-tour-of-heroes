import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
 // imports: [FormsModule, NgIf, NgFor, UpperCasePipe, HeroDetailComponent,RouterModule]
 imports:[CommonModule,RouterModule,FormsModule]
})
export class HeroesComponent implements OnInit {

  // Assign the imported HEROES array to the heroes property
  //heroes: Hero[] = HEROES;

  // selectedHero: Hero | undefined;

  //selectedHero?: Hero;
  heroes: Hero[] = [];
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
