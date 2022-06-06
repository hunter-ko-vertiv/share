import { Component, OnInit } from '@angular/core';
import { GuardStateManagerService } from "../services/guard-state-manager.service";

@Component({
  selector: 'app-router-control-panel',
  templateUrl: './router-control-panel.component.html',
  styleUrls: ['./router-control-panel.component.scss']
})
export class RouterControlPanelComponent implements OnInit {

  constructor(private guardStateManagerService: GuardStateManagerService) { }

  ngOnInit(): void {

  }

  setActivateState(v: boolean) {
    this.guardStateManagerService.setActivate(v);
  }
  setActivateChildState(v: boolean) {
    this.guardStateManagerService.setActivateChild(v);
  }
  setDeActivateState(v: boolean) {
    this.guardStateManagerService.setDeactivate(v);
  }
  setLoadState(v: boolean) {
    this.guardStateManagerService.setLoad(v);
  }
  setResolve(v: boolean) {
    this.guardStateManagerService.setResolve(v);
  }


}
