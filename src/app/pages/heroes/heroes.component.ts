import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  heroes = ['Batman', 'Iron Man', 'Hulk', 'Spiderman'];

  checkCounter(num: number) {
    if (num <= 0) {
      console.log(' less than 0: num =', num);
    }
    if (num >= 5) {
      console.log(' greater than 5: num =', num);
    }
  }
}
