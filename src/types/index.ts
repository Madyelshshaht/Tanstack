export interface PsotDatatype {
    id:number;
    title:string;
    body:string;
    status: "publish" | "draft" | "block";
    topRate: boolean;
}

export type PoststatusType = "publish" | "draft" | "block" | "all" ;