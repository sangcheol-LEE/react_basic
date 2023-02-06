import { SetStateAction,Dispatch } from "react";

export interface User {
      name : string;
      title : string;
      image : string;
      isNew ?: boolean;
}

export interface AvartarType {
      image : string;
      isNew ?: boolean;
}


export interface CounterFunc {
      total ?: number;
      setTotal : Dispatch<SetStateAction<number>>
}

export interface ProductType {
      id: number;
      name : string;
      price: string;
}

