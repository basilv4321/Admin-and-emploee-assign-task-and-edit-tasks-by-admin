import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  adminLogined:boolean=false
  user:any=""
  usernameForTaskView:any;
  editFlagOfTasks:boolean=false;
  editTasks:any={}
  constructor(private router:Router) { 
    this.initialPushToUserTasks()
  }

  userTasks:any=[
    // {
    //   username:"mathew",
    //   task:"finance software development",
    //   meetingTime:"17/4/23",
    //   client:{companyname:"TCS"}
    // }
  ]

  addToLocalStorage(data:any){
    localStorage.setItem("clients",data)
  }

  initialPushToUserTasks(){
    if(localStorage.getItem("clients")){
      let data1:any=localStorage.getItem("clients")
      let data=JSON.parse(data1)
      this.userTasks=data
    }
  }

  addNewUserTask(data1:any,data2:any){

    if(this.editFlagOfTasks==true){
      this.userTasks.splice(this.editTasks.index,1,
        {
          username:this.user,
          task:data1.value.task,
          meetingTime:data1.value.meetingTime,
          taskCompleted:data1.value.taskCompleted,
          client:data2.value
         }
        )
        alert('task edited')
    }
    else if(this.editFlagOfTasks==false){
      this.userTasks.push(
        {
         username:this.user,
         task:data1.value.task,
         meetingTime:data1.value.meetingTime,
         taskCompleted:data1.value.taskCompleted,
         client:data2.value
        }
       )
       alert("client added")
    }
    this.editFlagOfTasks=false
    this.addToLocalStorage(JSON.stringify(this.userTasks))
    this.initialPushToUserTasks()
    if(this.adminLogined==true){
      this.router.navigateByUrl('/adminhome/employeeTask')
    }
    else{
      this.router.navigateByUrl('/userhome/welcome')
    }
     
  }


  deleteEmployeeTask(i:any){
    let arr: any[]=[]
    this.userTasks.map((n:any)=>{
      if(n!=i){
        arr.push(n)
      }
    })
    this.userTasks=arr
    // this.userTasks.splice(i,1)
    this.addToLocalStorage(this.userTasks)
    this.initialPushToUserTasks()
}



}
function removeElememt() {
  throw new Error('Function not implemented.');
}

