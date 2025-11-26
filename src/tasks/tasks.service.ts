import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskInterface } from './interfaces/task.interface';
import { title } from 'process';

@Injectable()
export class TasksService {
    private tasks:TaskInterface[]=[];
    getAllTask(){
        return this.tasks;
    }
     getTaskById(id:number){
        const task=this.tasks.find((t)=>t.id===id);
        return task;
     }

    CreateTask(createTaskDto:CreateTaskDto){
        const task={
             id:Date.now(),
             ...createTaskDto,
             status:'Active'
        }
        this.tasks.push(task);
        return task;

    }
    DeleteTask(id:number){
        const index=this.tasks.findIndex((t)=>t.id===id);
        if(index ===-1){return {message:`Tasks with ${id} not found!`};}
        else{
            this.tasks.splice(index,1);
            return {message:`Tasks with ${id} delted successfully`};
        }
    }
    PatchTask(id:number,data:Partial<{title:string,description:string}>){
           const task=this.getTaskById(id);
           if (!task) {
          return { message: `Task with ID ${id} not found.` };
           }
            else{
            Object.assign(task,data);
            return {message:`Task with id:${id} updated successfully`,task};
            }
           
    }
    UpdateTask(id:number,data:{title?:string,description?:string,status?:string}){
        const index=this.tasks.findIndex((t)=>t.id===id);
        if(index===-1){
            return{message:`Task with id:${id} not found.`};
        }
        
            this.tasks[index]={...this.tasks[index],...data};
             return {
              message: `Task with id:${id} updated successfully`,
              task: this.tasks[index],
            };

        
    }

}
