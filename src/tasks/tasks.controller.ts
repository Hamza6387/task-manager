import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { get } from 'http';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}
  @Get()
  GetAllTask() {
    return this.tasksService.getAllTask();
  }
  @Post()
  CreateTask(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.CreateTask(createTaskDto);
  }
  @Get(':id')
  GettaskById(@Param('id') id: string) {
    return this.tasksService.getTaskById(Number(id));
  }
  @Delete(':id')
  DeleteTask(@Param('id') id: string) {
    return this.tasksService.DeleteTask(Number(id));
  }
  @Patch(':id')
  PatchTask(
    @Param('id') id: string,
    @Body() updateData: Partial<{ title: string; description: string }>,
  ) {
    return this.tasksService.PatchTask(Number(id), updateData);
  }

  @Put(':id')
  UpdateTask(
    @Param('id') id:string,
    @Body() body:{title:string;description:string;status:string}
  ){
    return this.tasksService.UpdateTask(Number(id),body);
  }
  
  
}
