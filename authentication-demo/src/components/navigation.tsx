import Link from "next/link";
import { SignInButton,
     SignOutButton,
     SignUpButton,
     SignedIn,
     SignedOut
    //   UserButton 
    } from "@clerk/nextjs";
export const Navigation = () => {
  return (
    <nav className="bg-[var(--background)] border-b border-[var(--foreground)]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-semibold text-[var(--foreground)]">
              Next.js App
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <SignedOut>
{/* <SignInButton mode="modal"/>
<SignUpButton mode="modal"/> */}
<SignInButton>
  <button className="px-2 py-1 text-sm border border-neutral-300 dark:border-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-700">Sign in</button>
</SignInButton>
<SignUpButton>
<button className="px-2 py-1 text-sm border border-neutral-300 dark:border-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-700">Sign up</button>
</SignUpButton>
            </SignedOut>
            <SignedIn>
<SignOutButton />
<Link href={"/user-profile"}>Profile</Link>
            </SignedIn>
{/* <UserButton /> */}
{/* This means clicking the button will open a nice modal dialog instead of redirecting to a separate page */}
{/* For signing out, clerk provides even a user button for signing out */}
          </div>
        </div>
      </div>
    </nav>
  );
};