import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../dto/hero.dto';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent implements OnInit {
  @Input() heroes!: string[];
  @Input() counter = 0;
  @Output() myEvent: EventEmitter<number> = new EventEmitter();

  heroesList: Hero[] = [];

  constructor(private heroesService: HeroesService) {}
  ngOnInit(): void {
    this.heroesService
      .getHeroes()
      .subscribe((heroes) => (this.heroesList = heroes));
  }

  resetCounter() {
    this.counter = 0;
  }

  increaseBy(num: number) {
    this.counter += num;
    this.myEvent.emit(this.counter);
  }
}
