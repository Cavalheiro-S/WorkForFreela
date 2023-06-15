import { Project } from "./Project";

export interface Propose {
    id: number;
    idProject: string;
    idHired: string;
    description: string;
    value: number;
    deadline: Date;
    project?: Project;
}