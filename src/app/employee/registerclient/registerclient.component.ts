import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';
import { UserdataService } from 'src/app/service/userdata.service';

@Component({
  selector: 'app-registerclient',
  templateUrl: './registerclient.component.html',
  styleUrls: ['./registerclient.component.css']
})
export class RegisterclientComponent implements OnInit {

  clientRegistrationForm!:FormGroup;
  taskSubmitForm!:FormGroup;
  tasks:any=[]
  editBoolean:boolean=false
  editTaskObject:any
  editIndex:any
  constructor(private service:UserdataService,private _fb:FormBuilder,private service1:LoginService) { }

  ngOnInit(): void {
    
    this.taskSubmitForm=this._fb.group({
      task:["",[Validators.required,Validators.minLength(1),Validators.maxLength(50)]],
      meetingTime:[null,Validators.required],
      taskCompleted:['not completed',Validators.required]
    })

    this.clientRegistrationForm=this._fb.group({

      tradecode:["",[Validators.required,Validators.minLength(1),Validators.maxLength(50)]],
      companyName:["",[Validators.required,Validators.minLength(1),Validators.maxLength(50)]],
      email:["",[Validators.required,Validators.email]],
      phoneNo:[null,[Validators.required,Validators.pattern("[0-9]{10}")]],
      address:["",[Validators.required,Validators.minLength(1),Validators.maxLength(50)]],
      clientName:["",[Validators.required,Validators.minLength(1),Validators.maxLength(50)]],
      designation:["",[Validators.required,Validators.minLength(1),Validators.maxLength(50)]],
      interest:["",[Validators.required,Validators.minLength(1),Validators.maxLength(50)]]
    })

    this.editTask()
    
  }

  editTask(){
    this.editBoolean=this.service.editFlagOfTasks
    if(this.editBoolean==true){
      this.editTaskObject=this.service.editTasks.taskObject
      this.editIndex=this.service.editTasks.index
      // console.log(this.editTaskObject.client.companyName);
      let clientobj={
        tradecode:this.editTaskObject.client.tradecode,
      companyName:this.editTaskObject.client.companyName,
      email:this.editTaskObject.client.email,
      phoneNo:this.editTaskObject.client.phoneNo,
      address:this.editTaskObject.client.address,
      clientName:this.editTaskObject.client.clientName,
      designation:this.editTaskObject.client.designation,
      interest:this.editTaskObject.client.interest,
      }
      this.clientRegistrationForm.setValue(clientobj)
      // this.clientRegistrationForm.controls['tradecode']=this.editTaskObject.client.tradecode,
      // this.clientRegistrationForm.controls['companyName']=this.editTaskObject.client.companyName,
      // this.clientRegistrationForm.controls['email']=this.editTaskObject.client.email,
      // this.clientRegistrationForm.controls['phoneNo']=this.editTaskObject.client.phoneNo,
      // this.clientRegistrationForm.controls['address']=this.editTaskObject.client.address,
      // this.clientRegistrationForm.controls['clientName']=this.editTaskObject.client.clientName,
      // this.clientRegistrationForm.controls['designation']=this.editTaskObject.client.designation,
      // this.clientRegistrationForm.controls['interest']=this.editTaskObject.client.interest,
      
      // 
      let taskobj={
        task:this.editTaskObject.task,
      meetingTime:this.editTaskObject.meetingTime,
      taskCompleted:this.editTaskObject.taskCompleted
      }
      this.taskSubmitForm.setValue(taskobj)
      // this.taskSubmitForm.controls['task']=this.editTaskObject.task
      // this.taskSubmitForm.controls['meetingTime']=this.editTaskObject.meetingTime
      // this.taskSubmitForm.controls['taskCompleted']=this.editTaskObject.taskCompleted
    }
  }
  

  registerNewClient(){
    
    // this.taskSubmitForm.controls["username"]=this.user
    // setValue({
    //   username:this.user,
    //   task:this.taskSubmitForm.value.task,
    //   meetingTime:this.taskSubmitForm.value.meetingTime
    // })
    // console.log(this.taskSubmitForm);
    
    if(this.taskSubmitForm.valid && this.clientRegistrationForm.valid){
      this.service.addNewUserTask(this.taskSubmitForm,this.clientRegistrationForm)
      // if(this.editBoolean==true){
      //   this.service.addNewUserTask(this.taskSubmitForm,this.clientRegistrationForm)
      // }
      // else{
        
      // }
    }
    else{
      alert("invalid form")
    }
  }


}
