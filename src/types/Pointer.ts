export interface Dots{
   x : number;
   y : number;
}

interface Mentor {
   name ?: string | null;
   title ?: string | null;
}

export interface Person {
   name : string ;
   title : string;
   mentor : Mentor
}


