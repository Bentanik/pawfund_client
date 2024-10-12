import { GoogleOAuthProvider } from "@react-oauth/google";
import dynamic from "next/dynamic";

const StoreProvider = dynamic(
  () => import("@/provider/redux-provider").then((mod) => mod.StoreProvider),
  {
    ssr: false,
  }
);

const ReactQueryProvider = dynamic(
  () => import("@/provider/query-provider").then((mod) => mod.default),
  { ssr: false }
);

export default function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <ReactQueryProvider>
        <GoogleOAuthProvider clientId="215549219184-dj1tggel62f370kcrlsk1pmbivc6l0ke.apps.googleusercontent.com">
          {children}
        </GoogleOAuthProvider>
      </ReactQueryProvider>
    </StoreProvider>
  );
}
