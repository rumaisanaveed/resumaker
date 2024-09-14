import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Providers } from "./providers";
import { ConfigProvider } from "antd";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "ResuMaker",
  description:
    "Your go-to tool for creating professional resumes with ease. Start building your resume today!",
};

export default function RootLayout({ children }) {
  return (
    <Providers>
      <ClerkProvider>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#a133ff",
            },
          }}
        >
          <html lang="en">
            <body className={poppins.className}>{children}</body>
          </html>
        </ConfigProvider>
      </ClerkProvider>
    </Providers>
  );
}
