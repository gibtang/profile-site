import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Faq() {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  // {
  //   question: "Is this template completely free to use?",
  //   answer: "Yes, this template is completely free to use.",
  // },
  {
    question: "What type of companies do you work with",
    answer: "Startups are my specialty. I work with early stage startups who are struggling with engineering issues and require an experienced tech executive to help provide clarity and direction",
  },
  {
    question: "What can you help me with?",
    answer:
      "Assessing software engineers, driving tech strategy and optimizing of engineering departments are some of the services that I provide. I am also not afraid to get into the weeds of doing pair programming, code review and providing guidance to engineers if necessary",
  },
  {
    question: "What is your rate?",
    answer:
      "My rates are $300 SGD per hour. Drop me an email at gibtang@gmail.com",
  },
];
