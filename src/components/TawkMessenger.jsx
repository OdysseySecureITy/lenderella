import { useEffect } from "react";

export default function TawkMessenger() {
  useEffect(() => {
    const s1 = document.createElement("script");
    s1.src = "https://embed.tawk.to/683e3174eb5b621916300774/1ispf2c91";
    s1.async = true;
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    document.body.appendChild(s1);
  }, []);

  return null; // This component injects the script but renders nothing
}