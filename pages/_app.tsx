import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import Loading from "../components/Loading";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    isMobile
      ? (window.location.href = "https://m.avocat-asmaekirimov.com")
      : setLoading(false);
  }, []);

  if (loading) return <Loading />;
  return <Component {...pageProps} />;
}
