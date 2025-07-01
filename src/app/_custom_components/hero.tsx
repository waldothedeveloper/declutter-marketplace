// import Link from "next/link";
import Image from "next/image";

// export const HeroPage = () => {
//   return (
//     <div>
//       <div className="relative">
//         <div className="mx-auto max-w-7xl">
//           <div className="relative z-10 lg:w-full lg:max-w-2xl">
//             <svg
//               viewBox="0 0 100 100"
//               preserveAspectRatio="none"
//               aria-hidden="true"
//               className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
//             >
//               <polygon points="0,0 90,0 50,100 0,100" />
//             </svg>

//             <div className="relative px-6 py-12 lg:py-56 lg:px-8 lg:pr-0">
//               <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
//                 <div className="hidden sm:mb-10 sm:flex">
//                   <div className="relative rounded-full px-3 py-1 text-sm/6 text-muted-foreground ring-1 ring-muted-foreground hover:ring-ring hover:text-primary font-medium">
//                     🚀 Coming soon...
//                   </div>
//                 </div>
//                 <h1 className="text-5xl font-semibold tracking-tight text-pretty text-foreground sm:text-7xl">
//                   Love your Home again
//                 </h1>
//                 <p className="mt-6 text-lg text-muted-foreground font-medium text-pretty">
//                   Local experts who turn overwhelming spaces into peaceful,
//                   organized sanctuaries.
//                 </p>
//                 {/* <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
//                Connect with experienced decluttering
//                 specialists, professional organizers, and cleaning experts who
//                 understand your vision. Transform any room from chaotic to
//                 calm with trusted professionals in your neighborhood.
//               </p> */}
//                 <div className="mt-10 flex items-center gap-x-6">
//                   <Link
//                     href="/"
//                     className="text-sm/6 font-semibold text-primary"
//                   >
//                     Learn more <span aria-hidden="true">→</span>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
//           <Image
//             alt=""
//             src="https://images.unsplash.com/photo-1632323201964-f303f164378c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             className="aspect-3/2 object-cover lg:aspect-auto lg:size-full"
//             width={1587}
//             height={1058}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

export default function HeroPage() {
  return (
    <div className="bg-white">
      <div className="relative isolate pt-14">
        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="w-full mx-auto lg:max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-foreground sm:text-8xl uppercase">
                Love your home again
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-foreground sm:text-xl/8 uppercase">
                Local experts who turn overwhelming spaces into peaceful,
                organized sanctuaries.
              </p>
            </div>
            <div className="mt-16 sm:mt-24">
              <Image
                alt="App screenshot"
                src="https://images.unsplash.com/photo-1728649060658-8e64dccf2711?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={2432}
                height={1442}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
