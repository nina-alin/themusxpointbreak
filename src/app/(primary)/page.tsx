import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Starter Kit for SaaS - Launch your Service Today",
  description:
    "Discover the ultimate Starter Kit to build your SaaS. We make it easy to get your project off the ground with essential tools, best practices and step-by-step guides. Perfect for entrepreneurs and developers looking to accelerate the development and launch of their software-as-a-service.",
};

export default function Home() {
  return (
    <>
      <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <Badge className="mb-8" variant="secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-6 w-6"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          The MusX Point-Break
        </Badge>
        <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
        Looking for the right music to power your work?
        </h1>
        <span
          className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl"
          style={{
            display: "inline-block",
            verticalAlign: "top",
            textDecoration: "inherit",
          }}
        >
          The Best Portal For Dedicated Producers. Elevate your media with our top work.
        </span>
      </section>

      <section className="container mx-auto max-w-7xl">
        <div className="w-full mb-8">Met our producers</div>
        <div className="mb-32 grid gap-2 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href="https://cataas.com/cat"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:bg-gray-100 dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className={`mb-3 text-2xl font-semibold`}>
              Producer one{" "}<br />
              <span className="text-sm inline-block">His name</span>{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </p>
          </a>
          <a
            href="https://cataas.com/cat"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:bg-gray-100 dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className={`mb-3 text-2xl font-semibold`}>
            Producer two{" "}<br />
              <span className="text-sm inline-block">His name</span>{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </p>
          </a>
          <a
            href="https://cataas.com/cat"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:bg-gray-100 dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className={`mb-3 text-2xl font-semibold`}>
              Producer three{" "}<br />
              <span className="text-sm inline-block">His name</span>{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </p>
          </a>
        </div>
      </section>
    </>
  );
}
