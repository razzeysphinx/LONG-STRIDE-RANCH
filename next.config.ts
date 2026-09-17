import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/about.html", destination: "/about", permanent: true },
      { source: "/training.html", destination: "/training", permanent: true },
      { source: "/boarding.html", destination: "/boarding", permanent: true },
      { source: "/horses.html", destination: "/horses", permanent: true },
      { source: "/sales.html", destination: "/horse-sales", permanent: true },
      {
        source: "/horse-sales/manuka-honey.html",
        destination: "/horse-sales/manuka-honey",
        permanent: true,
      },
      {
        source: "/renewables.html",
        destination: "/renewables",
        permanent: true,
      },
      { source: "/contact.html", destination: "/contact", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
