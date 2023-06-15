export interface Project {
    id?: string;
    idContractor: string;
    idHired?: string;
    name: string;
    description: string;
    value: number;
    deadline: Date;
    category: ProjectCategory;
}

export enum ProjectCategory {
    "Back End" = 1,
    "Front End" = 2,
    "Banco De Dados" = 3,
}