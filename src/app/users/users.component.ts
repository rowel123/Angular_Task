import { Component, OnInit } from '@angular/core';
import { UsersService } from '.././_sharedServices/users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
private movedIndex;
private userFields;
private userData;
private cachedName; //reference to original name if name is being updated for search index

  constructor(private usersService:UsersService) {
    this.fetchConfig();
  }

  ngOnInit() {

  }

  fetchData(){
    this.usersService.getAllUsers().subscribe(res=>{
        if(res){
            this.userData = res;
            this.updateNullImage();
        }
      })
  }

  fetchConfig(){
    this.usersService.getUsersConfig().subscribe(res=>{
      if(res){
          this.userFields = res['columndFields'];
          this.fetchData();
      }
    })
  }

  saveNameIdentity(i){
    this.cachedName = this.userData[i].fullname;
  }

  updateData(i){
    this.usersService.updateUsers(this.cachedName,this.userData[i]).subscribe(res=>{
    })
  }




  updateNullImage(){
    for(var i in this.userData){
      if(this.userData[i].displayImage==''){
        this.userData[i].displayImage="/assets/images/profile.jpg"
      }
    }
  }

  onCardDrop(data,i){
    this.userData.splice(this.movedIndex,1);
    this.userData.splice(i,0,data.dragData);


  }

  onCardMove(i){
    this.movedIndex = i;
  }

  ngOnDestroy(){
    this.usersService.updateArrangement(this.userData).subscribe(res=>{
    })
  }
}
