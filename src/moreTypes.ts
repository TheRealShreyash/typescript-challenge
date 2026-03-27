let response: any = "42";

let numericLength: number = (response as string).length;

type Book = {
  name: string;
};

let bookString = '{"name":"The Alchemist"}';
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject.name);

const inputElement = document.getElementById("username") as HTMLInputElement;

let value: any;
value = "chai";
value = [1, 2, 3];
value = 2.5;
value.toUpperCase(); // this will throw runtime error because any allows everything

let newValue: unknown;
newValue = "chai";
newValue = [1, 2, 3];
newValue = 2.5;
// newValue.toUpperCase(); this shows error because unkown type doesn't allow methods to apply without knowing the type.
if (typeof newValue === "string") {
  newValue.toUpperCase();
}

try {
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log("Error: ", error);
}

const data: unknown = "chai aur code";
const strData: string = data as string;

type Role = "admin" | "user";
// type Role = "admin" | "user" | "superadmin"; when we add 'superadmin' the type of role in the last line of function is superadmin instead of never.

function redirectBasedOnRole(role: Role): void {
  if (role === "admin") return console.log("Redirecting to admin dashboard");
  if (role === "user") return console.log("Redirecting to user dashboard");
  role; // here type: 'never' means this value was never supposed to be called as all possible values of this have been checked
}

function neverReturn():never {
    while (true) {
        
    }
}