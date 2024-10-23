import Home from "@/app/page";
import ActiveChangeEmail from "@/app/active/active-change-email/components/active-change-email";

export default function ActiveChangeEmailPage({ params }: any) {
  return (
    <div>
      <ActiveChangeEmail userId={decodeURIComponent(params?.userId)}>
        <Home />
      </ActiveChangeEmail>
    </div>
  );
}
