export interface Dots{
   x : number;
   y : number;
}

export interface Mentor {
   name ?: string | null;
   title ?: string | null;
}

export interface Person {
   name : string ;
   title : string;
   mentor : Mentor;
}

export interface Persons {
   name : string ;
   title : string;
   mentors ?: Mentor[]
}


