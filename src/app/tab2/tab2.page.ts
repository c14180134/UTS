import { Component } from '@angular/core';
import { from } from 'rxjs';
import { GlobalfotoService } from '../services/globalfoto.service';
import {AngularFireStorage} from '@angular/fire/storage'

export interface fileFoto{
  name:string;//filepath
  path:string;//webviewpath
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  urlImageStorage :string[] = []
  constructor(public globalFotoService:GlobalfotoService,private  afStorage : AngularFireStorage) {}

  async ngOnInit(){
    await this.globalFotoService.loadFoto();
  }
  
  TambahFoto(){
    this.globalFotoService.tambahFoto();
  }

  uploadFoto(index:number){
    console.log(index);
        const imageFilepath = `imgStorage/${this.globalFotoService.dataFoto[index].filePath}`;
        this.afStorage.upload(imageFilepath, this.globalFotoService.dataFoto[index].dataImage).then(() =>{
        this.afStorage.storage.ref().child(imageFilepath).getDownloadURL().then((url) =>{
            this.urlImageStorage.unshift(url)
        });
      });
      
  }

}
