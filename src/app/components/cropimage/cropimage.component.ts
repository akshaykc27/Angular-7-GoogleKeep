import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from 'src/app/service/dataService/data.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UserService } from 'src/app/service/user.service';
import { HttpService } from 'src/app/service/httpService/httpservice.service';


@Component({
  selector: 'app-cropimage',
  templateUrl: './cropimage.component.html',
  styleUrls: ['./cropimage.component.scss']
})
export class CropimageComponent implements OnInit {
  croppedImage: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data, public userService: UserService,
    public dataService: DataService,
    public dialogRef: MatDialogRef<DashboardComponent>) { }

  ngOnInit() {
  }

  imageCropped(event) {
    console.log("event in image cropped function", event);
    this.croppedImage = event.file;
  }

  uploadPic() {
    //   if(this.croppedImage != null ){
    //     this.dialogRef.close(this.croppedImage);
    //   }
    //   console.log("inside uploadPic function",this.croppedImage);
    //   this.userService.setProfilePic(this.croppedImage);

    const uploadData= "file"+this.croppedImage

    this.userService.setProfilePic(uploadData).subscribe(response => {
      console.log("response in add image",response);
      this.dialogRef.close();
    })
  }
}