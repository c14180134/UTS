import { Component, OnInit } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage'
import { GlobalfotoService } from '../services/globalfoto.service';

export interface fileFoto{
  name:string;//filepath
  path:string;//webviewpath
}
@Component({
  selector: 'app-tab-galery',
  templateUrl: './tab-galery.page.html',
  styleUrls: ['./tab-galery.page.scss'],
})
export class TabGaleryPage implements OnInit {
  urlImageStorage :string[] = []
  namaImage : string[] = []
  constructor(public globalFotoService:GlobalfotoService,private  afStorage : AngularFireStorage) { }

  ngOnInit() {
    
  }

  async ionViewDidEnter(){
    this.tampilkanData();
  }

  tampilkanData(){
    
    this.urlImageStorage=[];
    var refImage = this.afStorage.storage.ref('imgStorage');
    refImage.listAll()
    .then((res)=>{
      res.items.forEach((itemRef)=>{
        itemRef.getMetadata().then(nama=>{
          this.namaImage.unshift(nama.name)
          
        })
        itemRef.getDownloadURL().then(url=>{
          this.urlImageStorage.unshift(url)
        })
      });
    }).catch((error)=>{
      console.log(error);
    })
    
  }

}
