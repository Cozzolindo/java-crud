import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { AppMaterialModule } from "../../app-material/app-material-module";

// This interface defines the shape of data that will be passed to this dialog
export interface DialogData {
  bookName: string;
}

@Component({
  selector: 'app-confirmation-dialog',
  imports: [MatButtonModule, MatDialogActions, MatDialogTitle, MatDialogContent, AppMaterialModule],
  templateUrl: './confirmation-dialog.html',
  styleUrl: './confirmation-dialog.scss',
  standalone: true // This makes it a standalone component
})
export class ConfirmationDialog {

  // This is the constructor for the ConfirmationDialog component
  // It injects the MatDialogRef and MAT_DIALOG_DATA services
  constructor(
    // This is the reference to the dialog that will be used to close it
    public dialogRef: MatDialogRef<ConfirmationDialog>,
    // This is the data that will be injected into the dialog, typically passed from the parent component
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  // This method sends a cancellation signal back to the dialog's parent component
  // when the user cancels the action
  onCancel(): void {
    this.dialogRef.close(false);
  }

  // This method sends a confirmation signal back to the dialog's parent component
  // when the user confirms the action
  onConfirm(): void {
    this.dialogRef.close(true);
  }

}
