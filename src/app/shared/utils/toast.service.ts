import { Injectable, inject } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarRef,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: null,
})
export class ToastService {
  snackBarConfig!: MatSnackBarConfig;
  snackBarRef!: MatSnackBarRef<any>;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  snackBarAutoHide = '3500';

  snackBar = inject(MatSnackBar);

  constructor() {
    this.snackBarConfig = new MatSnackBarConfig();
    this.snackBarConfig.horizontalPosition = this.horizontalPosition;
    this.snackBarConfig.verticalPosition = this.verticalPosition;
    this.snackBarConfig.duration = parseInt(this.snackBarAutoHide, 0);
  }

  error = (message: string) => {
    this.snackBarConfig.panelClass = 'snackbar-error';
    return this.snackBar.open(message, 'x', this.snackBarConfig);
  };

  success = (message: string) => {
    this.snackBarConfig.panelClass = 'snackbar-success';
    return this.snackBar.open(message, 'x', this.snackBarConfig);
  };

  info = (message: string) => {
    this.snackBarConfig.panelClass = 'snackbar-info';
    return this.snackBar.open(message, 'x', this.snackBarConfig);
  };

  warning = (message: string) => {
    this.snackBarConfig.panelClass = 'snackbar-warning';
    return this.snackBar.open(message, 'x', this.snackBarConfig);
  };
}
