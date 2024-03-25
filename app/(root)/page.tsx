import React from 'react';
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap:0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Your events, our priority!
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              We are a team of professionals who are dedicated to making your events memorable. We take care of everything from planning to execution so you can focus on enjoying your event.
            </p>
            <Button asChild size="lg" className="button w-full sm:w-fit">
              <Link href="#events">Explore now</Link>
            </Button>
          </div>
          <Image
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
          />
        </div>
      </section>

      <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">
          Trust by <br /> 1000+ clients
        </h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          Search
          CategoryFilter
        </div>
      </section>
    </>
  );
};

export default Home;
