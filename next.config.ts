import type { NextConfig } from "next";

// Allow Node.js to accept the Medusa backend SSL certificate
// (Medusa Cloud uses a cert that Node's built-in CA bundle doesn't always trust)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "b2bv1.medusajs.app",
      },
      {
        protocol: "https",
        hostname: "**.medusajs.app",
      },
    ],
  },
};

export default nextConfig;
