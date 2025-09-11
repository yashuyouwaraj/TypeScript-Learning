type User = {
    name: string;
    age?: number; // optional property
    readonly location: string; // readonly property
}

const user1:User={
    name: "Alice",
    location: "New York"
}

// user1.location='Los Angeles' // Error: Cannot assign to 'location' because it is a read-only property

console.log(`Name: ${user1.name}, Age: ${user1.age}, Location: ${user1.location}`)