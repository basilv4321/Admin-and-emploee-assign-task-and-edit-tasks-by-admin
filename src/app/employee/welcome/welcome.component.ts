import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from 'src/app/service/userdata.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  username:any=""
  tasks:any=[]
  indexPushedTask:any=[]
  constructor(private router:Router,private service:UserdataService) { }

  ngOnInit(): void {
    this.username=this.service.user
    this.getTasks()
  }

  navigateToRegister(){
    this.router.navigateByUrl("/userhome/addclient")
  }

  getTasks(){
    this.tasks=this.service.userTasks.filter((n:any)=>
    n.username==this.username
    )

    this.tasks.map((i:any)=>{
      i.index=this.service.userTasks.indexOf(i)
      // console.log(this.service.userTasks.indexOf(i));
      this.indexPushedTask.push(i)
    })

  }

  
  delete(i:any){

  }
  edit(i:any){
    console.log(i);
    this.service.editFlagOfTasks=true
    console.log(this.service.editFlagOfTasks);
    this.service.editTasks={
      index:i,
      taskObject:this.service.userTasks[i]
    }
    console.log(this.service.editTasks);
    
    this.router.navigateByUrl('/userhome/addclient')
  }
}
