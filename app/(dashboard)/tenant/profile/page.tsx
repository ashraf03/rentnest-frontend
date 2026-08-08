import { getProfile } from "@/services/profile.service";

import ProfileForm from "@/components/profile/profile-form";

import ChangePasswordForm from "@/components/profile/change-password-form";

export default async function ProfilePage() {
  const response = await getProfile();

  const user = response.data;

  return (
    <div className="mx-auto max-w-4xl space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          My Profile
        </h1>

        <p className="mt-2 text-muted-foreground">
          Manage your personal information
          and account security.
        </p>
      </div>

      <ProfileForm user={user} />

      <ChangePasswordForm />

    </div>
  );
}