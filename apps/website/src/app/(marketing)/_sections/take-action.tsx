"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ApplyButton } from "~/components/apply";
import React from "react";

export function TakeActionSection() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  return (
    <section className="flex flex-col mx-auto container ">
      <div className="w-full px-4">
        <motion.h2
          className="text-md font-mono "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          TAKE ACTION
        </motion.h2>
        <motion.p
          className="text-4xl pt-10 pb-8 "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Join our next cohort to be a part of the fight.
        </motion.p>
        <div className="space-y-4">
          {[
            {
              text: "I'm a high school student",
              action: "Apply to Ámaxa for High School",
            },
            {
              text: "I'm a college student or professional",
              action: "Apply to Ámaxa for Professionals",
            },
          ].map((button, index) => (
            <React.Suspense fallback={<div>Loading...</div>}>

              <ApplyButton variant="long" key={index}>
                <a href="https://airtable.com/appPR9mkslbn3U8YZ/shrHHUtRzK4DqKt3F">
                {button.text}
                </a>
              </ApplyButton>
            </React.Suspense>

          ))}
        </div>
        <motion.div
          className="mt-8 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
        
            Not ready to apply yet?{" "}
            
              {" "}
              Learn more about <strong className="font-semibold"><a href="/program" className="transition-colors duration-200 text-[#3B3B3B] underline">our cohorts.</a></strong>{" "}
       
      
        </motion.div>
      </div>
    </section>
  );
}
