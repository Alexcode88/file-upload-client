import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'file-upload-client';
  image: any = "";

  constructor( private _http: HttpClient ){

  }

  selectImage( event: any ): void{
    if( event.target.files.length > 0 ){
      const file:any = event.target.files[0];
      this.image = file;
    }
  }

  submitImage( event: any ): void{
    event.preventDefault();
    const formData: FormData = new FormData();
    formData.append( 'myImage', this.image );

    this._http.post<any>( 'http://localhost:8080/upload', formData )
      .subscribe( (data: any) => {
        console.log( data );
      });
  }
}

