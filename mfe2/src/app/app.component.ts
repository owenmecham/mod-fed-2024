import { Component } from '@angular/core';
import { Chart1Component } from './chart1/chart1.component';
import { Chart2Component } from './chart2/chart2.component';
import { Chart3Component } from './chart3/chart3.component';
import { Chart4Component } from './chart4/chart4.component';

@Component({
  selector: 'mfe2-root',
  standalone: true,
  imports: [Chart1Component, Chart2Component, Chart3Component, Chart4Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mfe2';
}
