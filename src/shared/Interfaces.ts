export interface IModule {
    id: number;
    title:string;
    lessons:ILessons[];
    reward:number;
    message:string;
}

export interface results{
    module:IModule[]
}
export interface ILessons {
   id:number;
   title:string;
   position:number;
   cards:ICards[];
   result:results;
}

export interface ICards {
    id: number;
    position: number;
    type: String;
}