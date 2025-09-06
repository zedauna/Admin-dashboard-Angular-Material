import {ChangeDetectionStrategy, Component, effect, input} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [MatCardModule, MatIcon],
  templateUrl: './info-card.html',
  styleUrl: './info-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoCard {

  total = input<number>(0);
  limit = input<number>(0);
  skip = input<number>(0);

  constructor() {
    effect(() => {

    });
  }

}
