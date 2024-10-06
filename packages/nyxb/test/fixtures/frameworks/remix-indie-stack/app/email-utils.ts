export function validateEmail(email: unknown): email is string {
   return typeof email === "string" && email.length > 3 && email.includes("@");
 }
