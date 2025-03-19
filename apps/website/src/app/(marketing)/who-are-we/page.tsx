import Link from "next/link";
import { ApplyButton } from "~/components/apply";
import { ProfileCard } from "./_components/people";
import React from "react";

export default function WhoAreWePage() {
  return (
    <main>
      <div className="relative w-full min-h-[400px] md:min-h-[517px] bg-[#F5F2F2] flex flex-col px-6 md:px-12 lg:px-20">
        {/* Background container - hidden but preserved for reference */}
        <div className="absolute inset-0 invisible">
          <div className="w-full h-full" style={{ background: "url(/Untitled design.png)" }} />
        </div>

        {/* Content container with flex layout */}
        <div className="flex flex-col justify-center h-full w-full relative z-10 py-12 md:py-20">
          {/* Main heading - centered on mobile, left-aligned on larger screens */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
            <h1 className="text-[40px] md:text-[50px] lg:text-[60px] leading-tight text-[#3B3B3B] font-normal mb-12 md:mb-0">
              Who We Are
            </h1>
          </div>

          {/* Apply now link - positioned at bottom right on larger screens */}
          <div className="flex justify-end mt-8 md:mt-16 lg:mt-24">
            <React.Suspense fallback={<div>Loading...</div>}>
              <ApplyButton
                variant="ghost"
              >
                Apply now →
              </ApplyButton>
            </React.Suspense>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-[#F5F2F2] flex flex-col justify-center items-start px-6 md:px-16 lg:px-20">
        <div className="relative mb-8 w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#3B3B3B] leading-tight">
            ámaxa (άμαξα): Greek for vehicle
          </h2>
          <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2">
            <svg
              width="200"
              height="40"
              viewBox="0 0 200 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-32 md:w-48 lg:w-56"
            >
              <path
                d="M1 20C1 20 40 5 60 20C80 35 120 5 140 20C160 35 199 20 199 20"
                stroke="#BCD96C"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#3B3B3B] leading-tight max-w-5xl">
          We aim to be a{" "}
          <span className="font-semibold">vehicle for impact</span> for
          thousands of people globally.
        </h2>
      </section>
      <section className="w-full bg-[#F5F2F2] py-16 md:py-20 lg:py-24 px-6 md:px-12 lg:px-20">
        <div className="flex flex-col">
          {/* Heading - left aligned */}
          <h2 className="font-normal text-[40px] md:text-[50px] lg:text-[60px] leading-tight text-[#3B3B3B] mb-10 md:mb-14">
            Our Vision
          </h2>

          {/* Vision text content - left aligned */}
          <div className="font-normal text-[22px] md:text-[28px] lg:text-[32px] leading-snug text-[#3B3B3B] max-w-4xl space-y-8">
            <p>
              For the first time in history, we can see in crystal clear detail the
              challenges faced by others across the world. Also for the first
              time in history, we can change that person's life across the world
              easier than ever before.
            </p>

            <p>
              But, it's not quite that easy. Who do you help? What's the best
              way to help? How do I raise the money or spread the word? How
              do I find others who want to do it with me?
            </p>

            <p>
              We want to build a world where anyone who wants to make a
              difference can do it. That's why we set out to build the only place
              where we take you from start to finish of what's needed to truly
              effect change.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full absolute">
        {
          [
            {
              name: "Lauren McMillen",
              title: "Founder & CEO",
              bio: `Lauren, a New York University Abu Dhabi graduate in Computer Science and Arabic, is now pursuing a Master's in Middle Eastern Studies at the University of Edinburgh. With a strong foundation in technology and experience in over a dozen non-profits, she's driven by a powerful mission: empowering others to recognize their potential to make a real difference in the world.`,
              imageUrl: "https://b47pkz22xs.ufs.sh/f/OxFTTzjZGToOTtH94SrPvV4ygRa57DXtJwU9SfhC1qxONmlA"
            },
            {
              name: "Alexi Jones",
              title: "COO",
              bio: `
"The world is a crazy place right now. I love that Amaxa empowers students and young professionals to face it head on, and to come up with creative, innovative and energetic solutions to the problems we are facing. Getting to be a part of the Amaxa team is a chance for me to tell students, young adults and dreamers what I wish I'd been told: 'Your ideas matter and you can make a difference; now let's get started."
Lexi grew up in central Illinois, where cornfields stretch to the horizon and Friday nights are for football. Currently, she is pursuing a degree in International Studies with a Political Science minor at the University of Tampa. Lexi's journey includes internships at CHANGE Illinois and United Way Suncoast, volunteering on the Polish-Ukrainian border, and contributing to the North America for Ukraine leadership team.
`,
              imageUrl: "https://b47pkz22xs.ufs.sh/f/OxFTTzjZGToOeKcidoyvrS3NH5LD0fGBOXwFydpiVbYzJMa1"
            },
            {
              name: "Aniketh Chenjeri",
              title: "CTO",
              bio: `
Ani drives the development of the ámaxa platform, tackling key challenges and creating innovative software solutions. A junior in high school, he has invested thousands of hours in programming and problem-solving. His skills have earned national recognition, with multiple state and national titles in programming and cybersecurity.
            `,
              imageUrl: ""
            }
          ].map((person, idx) => (
            <ProfileCard key={idx} name={person.name} title={person.title} bio={person.bio} imageUrl={person.imageUrl} />
          ))
        }
      </section>
      <section className="w-full bg-[#F5F2F2] py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 relative">
        <div className="flex flex-col">
          {/* Main heading - large text */}
          <h2 className="font-normal text-[36px] md:text-[48px] lg:text-[60px] leading-tight md:leading-[78px] text-[#3B3B3B] max-w-[90%] md:max-w-[1074px] mb-16 md:mb-24 lg:mb-32">
            We want to build a world where anyone who wants to help the world can do it.
          </h2>

          {/* Button with border */}
          <div className="mt-auto">
            <Link
              href="/support"
              className="inline-flex items-center justify-center px-7 py-3 border border-[#3B3B3B] rounded-full bg-white text-[#3B3B3B] text-[18px] md:text-[20px] hover:bg-gray-50 transition-colors"
            >
              Support Our Vision →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
