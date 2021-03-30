import { Component } from '@angular/core';
import { GlobalfotoService } from '../services/globalfoto.service';
import {AngularFireStorage} from '@angular/fire/storage'
import { Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  kambing : any
  constructor(public globalFotoService:GlobalfotoService,private  afStorage : AngularFireStorage,public router : Router,public route : ActivatedRoute) {
    this.kambing = this.route.snapshot.paramMap.get('kambing');
  }
  
  async ngOnInit(){
    console.log(this.kambing)
    await this.globalFotoService.loadFoto();
  }

}
