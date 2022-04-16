import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Tasks } from "./task.entity";


@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Tasks)
        private taskRepository: Repository<Tasks>
    ) {}

    async getListOfTasks(): Promise<Tasks[]> {
       return await this.taskRepository.find();
    }
}