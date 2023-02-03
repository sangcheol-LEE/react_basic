export interface HandleUpdate {() : void};
export interface HandleAdd{() : void};
export interface HandleDelete {() : void}

export interface Actions {
   type : string;
   prev ?: string | null;
   current ?: string | null;
   name ?: string | null;
   title ?: string | null;
}