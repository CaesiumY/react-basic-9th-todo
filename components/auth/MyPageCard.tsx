import { getProfile } from "@/api/profiles-api";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function MyPageCard() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/login");
  }

  const { id, email } = data.user;

  const { full_name } = await getProfile(id);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>User Profile</CardTitle>
        <CardDescription>Manage your user profile settings.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="id">id</Label>
              <Input id="id" placeholder="User ID" readOnly value={id} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="User Email"
                readOnly
                value={email}
              />
            </div>
            {full_name && (
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="fullName">fullName</Label>
                <Input
                  id="fullName"
                  placeholder="Full Name"
                  readOnly
                  value={full_name}
                />
              </div>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
