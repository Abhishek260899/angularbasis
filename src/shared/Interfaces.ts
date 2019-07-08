export interface IModule {
    _id: number;
    title:string;
    lessons:ILessons[];
    reward:number;
    message:string;
    
}

export interface Iresults{
    module:IModule[]
}
export interface ILessons {
   id:number;
   title:string;
   position:number;
   cards:ICards[];
   result:Iresults;
}

export interface ICards {
    id: number;
    position: number;
    type: String;
}