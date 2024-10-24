import Home from "@/app/page";
import ActiveChangePassword from "@/app/active/active-change-password/components/active-change-password";

export default function ActiveChangePasswordPage({ params }: any) {
  return (
    <div>
      <ActiveChangePassword userId={decodeURIComponent(params?.userId)}>
        <Home />
      </ActiveChangePassword>
    </div>
  );
}
