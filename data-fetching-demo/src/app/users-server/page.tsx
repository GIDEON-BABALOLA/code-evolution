type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}
export default async function UsersServer() {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users: User[] = await response.json();
    return (
        <ul className="space-y-4 p-4">
{users.map((user) => (
    <li
    key={user.id}
    className="p-4 bg-white shadow-md rounded-lg text-gray-700"
    >
        <div className="font-bold">{user.name}</div>
        <div className="text-sm">
          <div>Username: {user.username}</div>
          <div>Email: {user.email}</div>
          <div>Phone: {user.phone}</div>
        </div>
    </li>
))}
        </ul>
    )
}

// Loading and Error states in server components
// While client components require you to manage these states with separate variables and conditional rendering, server components make this process much cleaner
// To implement a loading state, all we need to do is define and export a React component in the loading.tsx
// For handling errors, define and export a React component in error.tsx


// Two common patterns for data fetching
// Sequential
// Parallel
// Sequential: requests in a component tree are dependent on each other. This can lead to longer loading times
// Parallel:

// Sequential fetching
// we create a posts component
// - fetches all posts
// - for each post, fetch author using the userId property
// - example of sequential fetching because we need the userId from each post before we can fetch its author