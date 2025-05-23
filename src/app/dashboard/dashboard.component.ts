import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
 import { RouterModule } from '@angular/router';
 import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
    imports: [CommonModule, RouterModule,NgFor],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit{

    heroes : Hero[]=[];
    constructor(private heroService : HeroService){}
   
    ngOnInit():void{
      this.getHeroes();
    }
    getHeroes():void{
      this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1,5));
    }
}
