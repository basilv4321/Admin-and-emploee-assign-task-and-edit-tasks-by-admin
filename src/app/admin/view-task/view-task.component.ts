import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from 'src/app/service/userdata.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  tasks:any=[]
  username:any=""
  constructor(private service:UserdataService,private router:Router) { }

  ngOnInit(): void {
    this.username=this.service.usernameForTaskView
    this.service.user=this.username
    this.fetchUserTasks()
  }

  edit(i:any){
    this.service.editFlagOfTasks=true
    console.log(this.service.editFlagOfTasks);
    this.service.editTasks={
      index:i,
      taskObject:this.service.userTasks[i]
    }
    console.log(this.service.editTasks);
    
    this.router.navigateByUrl('/userhome/addclient')
  }
  fetchUserTasks(){
    this.tasks=this.service.userTasks.filter((n:any)=>
    n.username==this.username
    )
  }

  deleteTask(i:any){
    
    
    let data=this.service.userTasks.find((n:any)=>
    n==i
    );
    this.service.deleteEmployeeTask(data)
    
    this.fetchUserTasks()
  }
}
