import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-knob',
  templateUrl: './knob.component.html',
  styleUrls: ['./knob.component.scss']
})
export class KnobComponent implements OnInit {

  @Input() value: number;
  @Input() text: string;
  knOptions: any;
  constructor() { }

  ngOnInit(): void {
    const color = this.getColor(this.value);
    this.value = Math.floor(this.value);
    this.knOptions = {
      animate: {
        enabled: true,
        ease: 'linear',
        duration: 500
      },
      readOnly: true,
      size: 100,
      unit: '%',
      textColor: '#000000',
      fontSize: '18',
      fontWeigth: '700',
      valueformat: 'percent',
      value: 0,
      max: 100,
      trackWidth: 10,
      barWidth: 11,
      trackColor: '#D8D8D8',
      barColor: color,
      subText: {
        enabled: true,
        font: '12',
        text: this.text,
        color: '#000000',
        offset: 7
      },
    }
  }

  getColor(value: number): string {
    return this.value > 70 ? '#01A900' :
      this.value > 50 ? '#4495CB' :
        this.value > 30 ? '#FF6F17' : '#ED1C25';
  }

}
