
import { CheckboxIcon } from "@nextui-org/react";
import { divider } from "@nextui-org/theme";
import Link from "next/link";
import CheckoutButton from "./CheckoutButton";
//using the Checkicon from NextUI checkbox element
const CheckIcon = (props: any) =>
  (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

const SubscriptionPlans = [
    {
        id: 1,
        name: "Basic",
        price: 9.99,
        features: [
            "1 Person",
            "Access to all Movies",
            "Stream on any device anytime anywhere in Full HD",
        ],
        button: "Learn More",
    },
    {
        id: 2,
        name: "Professional",
        price: 19.99,
        features: [
            "3 Persons",
            "Access to all Movies",
            "Stream on any device anytime anywhere in Full HD",
        ],
        button: "Learn More",
    },
    {
        id: 3,
        name: "Master",
        price: 39.99,
        features: [
            "Up to 5 Persons",
            "Access to all Movies",
            "Stream on any device anytime anywhere in 4K",
        ],
        button: "Learn More",
    },
];



function PricingCards({redirect} : {redirect: boolean}) {
    return <div>
        <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2 ">
        {SubscriptionPlans.map((plan) => (
            <div key={plan.id}
            className="flex flex-col justify-between p-8  bg-white rounded-3xl shadow-xl ring-1 ring-gray-900/10 sm:p-10"
            >
                <div>
                    <h3 id={plan.id + plan.name} 
                    className="text-base font-semibold text-indigo-600">{plan.name}</h3>
                    <div className="flex items-baseline mt-4 gap-x-2">
                        {plan.price ? (
                            <>
                            <span className="text-5xl font-bold tracking-tight text-gray-900">
                                {plan.price}
                            </span>
                            <span className=" text-base font-semibold leading-7 text-gray-600">
                                /month
                            </span>
                            </>
                        ) : (
                            <span className="text-5xl font-bold tracking-tight text-gray-900">
                                Free
                                </span>
                                )}
                    
                    </div>
                    <p className="mt-6 text-base leading-7 text-gray-500">{plan.features}</p>
                    <ul role="list" className="mt-10 space-y-4 text-sm loading-6 text-gray-600">
                        {plan.features.map((feature) => (
                            <li key={feature} className="flex gap-x-3">
                                <CheckIcon
                                    className= " w-5 h-5 text-indigo-500"
                                    aria-hidden="true"
                                />
                                {feature}
                            </li>
                        ))}

                    </ul>
                  
                </div>
                 {redirect ? (
              <a
                href="https://buy.stripe.com/test_00g9CBd3O3KneoU144"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 black rounded bg-in px-3.5 py-2 text-center text-sm font-semibold
  leading-6 text-white sadow-sn hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2
  focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
              >
                Get Started Now
              </a>
            ) : (
  plan.id && <CheckoutButton />
)}
                

            </div>
        ))}



    </div>
    </div>
}
export default PricingCards;

