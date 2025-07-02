export {} // This makes this file a module
// we define what roles are avilable in our application
export type Roles = "admin" | "moderator"
declare global {
   interface CustomJwtSessionsClaims {
       metadata: {
        role?: Roles;
       }
   }
}