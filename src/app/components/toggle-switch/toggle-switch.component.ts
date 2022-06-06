import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss']
})
export class ToggleSwitchComponent implements OnInit {
  @Input() label?: string;
  @Output() switchChange: EventEmitter<any>= new EventEmitter();
  private _value: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  getChecked() {
    return this._value;
  }
  setChecked(v: Event) {
    this._value = (<HTMLInputElement>v.target).checked;
    this.switchChange.emit(this._value);
  }

}
