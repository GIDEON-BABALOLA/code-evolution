import { UserProfile } from "@clerk/nextjs";
export default function UserProfilePage() {
    return (
<div className="flex justify-center items-center py-8">
<UserProfile path="/user-profile"/>
   {/* If you don't want user profile in nextJs to use the modal but have its own page */}
        </div>
    )
}