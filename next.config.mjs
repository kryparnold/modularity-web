import { withContentlayer } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	output: "export",
};

export default withContentlayer(nextConfig);
