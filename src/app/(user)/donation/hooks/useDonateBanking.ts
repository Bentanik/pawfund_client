import { useServiceDonateBanking } from "@/services/donate/services";

export default function useDonateBanking() {
  const { mutate, isPending } = useServiceDonateBanking();

  const handleCreatePaymentLink = async (request: REQUEST.TDonateBanking) => {
    try {
      mutate(request);
    } catch (err) {
      console.log("err: ", err);
    }
  };

  return { handleCreatePaymentLink, isPending };
}
