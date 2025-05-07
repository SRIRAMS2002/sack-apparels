"use client"
import AccordionSection from "@/components/ui/AccordionItem"
import Banners from "@/components/ui/banners"
import BulkOrderBanner from "@/components/ui/BulkOrderBanner"
import { Compare } from "@/components/ui/compare"
import Header from "@/components/ui/header"
import ProductSection from "@/components/ui/ProductSection"
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar"
import { useState } from "react"

export default function NavbarDemo() {
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Products",
      link: "#Shop",
    },


  ]


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  return (
    <div id="features" className="relative w-full   bg-gradient-to-tr from-[#edede9] from-10% via-[#c2b191] via-30%  to-[#f5ebe0] to-90%">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />



          <div className="flex flex-col gap-4 z-10">
            <a
              href="https://api.whatsapp.com/message/J2COZUC5F7T3J1?autoload=1&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-gradient-to-b from-[#ad314e] to-[#410214] rounded-md text-white shadow-xs  px-3 py-2 "
            >
              Contact Us
            </a>
          </div>

        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <a key={idx} href={item.link} onClick={() => setIsMobileMenuOpen(false)} className="text-neutral-600">
                {item.name}
              </a>
            ))}
            <div className="flex flex-col gap-4">
              <a
                href="https://api.whatsapp.com/message/J2COZUC5F7T3J1?autoload=1&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full rounded-md bg-white px-4 py-2 text-black text-sm font-bold text-center "
              >
                Contact Us
              </a>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      <div className="  mt-5 relative w-full bg-gradient-to-b from-[#ad314e] to-[#410214]">
        <Header />
      </div>

       {/* Logo cloud */}
       <div className="mx-auto mt-8 max-w-7xl px-6 sm:mt-16 lg:px-8">
  <h2 className="text-center text-lg font-semibold leading-8 text-black">
    The world’s most innovative companies use our Services
  </h2>
  <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-5">
    <div className="col-span-1 text-center text-5xl font-bold text-gray-800">
      ZOHO
    </div>
    <div className="col-span-1 text-center text-5xl font-bold text-gray-800">
      PSG
    </div>
    <div className="col-span-1 text-center text-5xl font-bold text-gray-800">
    MICE Globals
    </div>
    <div className="col-span-1 text-center text-5xl font-bold text-gray-800">
      DB Events
    </div>
    <div className="col-span-1 text-center text-5xl font-bold text-gray-800">
      NKS - Events
    </div>
  </div>
</div>



      <h1 className="mb-4 text-center text-3xl font-bold pt-12">Your Design. Your T-Shirt. Your Style.</h1>
      <p className="mb-5 text-center text-md max-w-xl mx-auto text-zinc-500">
        Bring your ideas to life with high-quality custom T-shirt printing. Whether it’s for your brand, team, or just for fun — design it your way and wear it with pride.
      </p>

      <div className="p-4">

        <Compare className="features" />
      </div>

      <h1 id="Shop" className="mb-4 text-center text-3xl font-bold pt-12">Products</h1>
      <p className="mb-5 text-center text-md max-w-xl mx-auto text-zinc-500">
        Bring your ideas to life with high-quality custom T-shirt printing. Whether it’s for your brand, team, or just for fun — design it your way and wear it with pride.
      </p>


      <div >
        <ProductSection />

      </div>

      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                We built our business on great customer service
              </h2>
              <p className="mt-4 text-gray-700">
                At the beginning at least, but then we realized we could make a lot more money if we kinda stopped caring about that. Our new strategy is to write a bunch of things 
                that look really good in the headlines, then clarify in the small print but hope people don't actually read it. We used to reply to every email, answer every call, and bend over backwards to keep our customers happy </p>
                <p className="mt-4 text-gray-700">
                But now, we’ve optimized the process. That means automated replies, endless FAQ loops, and “unexpectedly high volumes” of support requests every single day. It's not that we don't care — it's just that it's way more efficient (and profitable) to appear like we do. At the end of the day, good service costs money, and we figured you'd rather spend that on something shiny.</p>
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
              <img
                alt=""
                src="/customer.jpg"
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:flex-shrink-0">
                  <img alt="" src={incentive.imageSrc} className="h-32 w-32 rounded-md"  />
                </div>
                <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      <Banners />

      <BulkOrderBanner />
      {/* FAQ section */}
      <AccordionSection />



      {/* Footer */}
      <footer aria-labelledby="footer-heading" className="relative bg-white/55 mt-5">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-4 lg:px-8">
          <div className="border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              {footerNavigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-400"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="h-6 w-6" />
                </a>
              ))}

            </div>
            <p className="mt-8 text-sm leading-5 text-gray-400 md:order-1 md:mt-0">
              &copy; 2025 Sack Apparels              , Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const DummyContent = () => {
  return (
    <div className="container mx-auto p-8 pt-24">
      <h1 className="mb-4 text-center text-3xl font-bold">Check the navbar at the top of the container</h1>
      <p className="mb-10 text-center text-sm text-zinc-500">
        For demo purpose we have kept the position as <span className="font-medium">Sticky</span>. Keep in mind that
        this component is <span className="font-medium">fixed</span> and will not move when scrolling.
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {[
          {
            id: 1,
            title: "The",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 2,
            title: "First",
            width: "md:col-span-2",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 3,
            title: "Rule",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 4,
            title: "Of",
            width: "md:col-span-3",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 5,
            title: "F",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 6,
            title: "Club",
            width: "md:col-span-2",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 7,
            title: "Is",
            width: "md:col-span-2",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 8,
            title: "You",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 9,
            title: "Do NOT TALK about",
            width: "md:col-span-2",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 10,
            title: "F Club",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
        ].map((box) => (
          <div
            key={box.id}
            className={`${box.width} ${box.height} ${box.bg} flex items-center justify-center rounded-lg p-4 shadow-sm`}
          >
            <h2 className="text-xl font-medium">{box.title}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}
type IconProps = React.SVGProps<SVGSVGElement>;

const footerNavigation = {

  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61558257801758&mibextid=dGKdO6',
      icon: (props: IconProps) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/sack_apparels2.0/',
      icon: (props: IconProps) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },

    {
      name: 'WhatsApp',
      href: 'https://api.whatsapp.com/message/J2COZUC5F7T3J1?autoload=1&app_absent=0',
      icon: (props: IconProps) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15s-.767.967-.94 1.166c-.173.198-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.15-.173.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.669-1.611-.916-2.2-.242-.581-.487-.502-.67-.511-.173-.007-.372-.009-.571-.009a1.093 1.093 0 00-.796.372c-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.488 1.694.624.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 6.564h-.003a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.25c.001-5.45 4.436-9.886 9.888-9.886a9.84 9.84 0 016.981 2.894 9.85 9.85 0 012.893 6.994c-.003 5.45-4.438 9.884-9.889 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .184 5.312.181 11.868c0 2.093.547 4.136 1.588 5.945L.057 24l6.324-1.654a11.87 11.87 0 005.665 1.446h.005c6.554 0 11.865-5.312 11.868-11.868a11.82 11.82 0 00-3.496-8.465"
          />
        </svg>
      ),
    },

  ],
}
const incentives = [
  {
    name: 'Free shipping',
    imageSrc: 'free-shipping.jpg',
    description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
  },
  {
    name: 'Customer support',
    imageSrc: '/customer-support.webp',
    description: "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
  },
  {
    name: 'Offers',
    imageSrc: '/special-offer.jpg',
    description:
      "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
  },
]
