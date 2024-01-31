import { Red_Hat_Display, Roboto_Mono, UnifrakturCook } from "next/font/google";

export const unifraktur_cook = UnifrakturCook({ subsets: ["latin"],weight: "700", variable: "--font-unifraktur-cook" });
export const red_hat_display = Red_Hat_Display({ subsets: ["latin"], display: "swap", variable: "--font-red_hat_display" });
export const roboto_mono = Roboto_Mono({ subsets: ["latin"], display: "swap", variable: "--font-roboto_mono" });
