import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-knob',
  templateUrl: './knob.component.html',
  styleUrls: ['./knob.component.scss']
})
export class KnobComponent implements OnInit, OnChanges {

  @Input() value: number;
  @Input() text: string;
  knOptions: any;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.knOptions = {
      ... this.knOptions,
      barColor: this.getColor(changes.value.currentValue)
    };
  }

  ngOnInit(): void {
    this.value = Math.floor(this.value);
    const color = this.getColor(this.value);
    
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
    if (this.value > 70) return '#01A900'; // green 
    if (this.value > 50) return '#4495CB'; // blue
    if (this.value > 30) return '#FF6F17'; // orange
    return '#ED1C25'; // red
  }

}
