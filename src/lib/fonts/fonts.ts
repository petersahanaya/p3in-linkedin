import { Figtree } from "next/font/google";

export const figtree = Figtree({
  subsets: ["latin"],
  fallback: ["system-ui", "sans-serif"],
  weight: ["300", "400", "500", "600", "700", "800"],
});
