import { useServiceLogout } from "@/services/auth/services";

export default function useLogout() {
  const { mutate, isPending } = useServiceLogout();
  const handleLogout = () => {
    try {
      mutate();
    } catch (err) {
      console.log("err: ", err);
    }
  };
  return {
    isPending,
    handleLogout,
  };
}
