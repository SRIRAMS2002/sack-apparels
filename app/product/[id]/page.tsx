'use client';

import { GlobeAmericasIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
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

import { useParams } from 'next/navigation'

import { notFound } from 'next/navigation';
import { products } from '@/lib/products';
import { use } from 'react';
import { Radio, RadioGroup } from '@headlessui/react';
import SizeGuideModal from '@/components/ui/SizeGuideModal';
import { fieldset } from 'framer-motion/client';
import SizeGuideSection from '@/components/ui/SizeGuideModal';

type Props = {
  params: { id: string };
};

type Policy = {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
};

type Product = {
  name: string;
  price: string;
  href: string;
  breadcrumbs: { id: number; name: string; href: string }[];
  images: { src: string; alt: string }[];
  colors: { name: string; class: string; selectedClass: string }[];
  sizes: { name: string; inStock: boolean }[];
  piece: { name: string; inStock: boolean }[];
  description: string;
  highlights: string[];
  details: string;
sizeGuide: {
  chart: Array<[string, number, number]>,
  measureImg: string,
  fitImg: string,
  fitTips: string[]
}

};

type Review = {
  href: string;
  average: number;
  totalCount: number;
};

type SizeChartEntry = [string | number, string | number, string | number]; // accepts number or string 

interface SizeGuide {
  chart: SizeChartEntry[];
  measureImg: string;
  fitImg: string;
  fitTips: string[];
}

interface ProductWithSizeGuide {
  sizeGuide?: SizeGuide;
}

const policies: Policy[] = [
  { name: 'International delivery', icon: GlobeAmericasIcon, description: 'Get your order in 2 years' },
  { name: 'Loyalty rewards', icon: CurrencyDollarIcon, description: "Don't look at other tees" },
];

const reviews: Review = {
  href: '#',
  average: 4,
  totalCount: 117,
};



// 3. Utility
function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}



export default function ProductDetail() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)


  const params = useParams();
  const productId = Number(params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) return notFound();

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  const [selectedPiece, setSelectedPiece] = useState(product.piece[0]);




  const navItems = [
    {
      name: "Features",
      link: "/#features",
    },
    {
      name: "Products",
      link: "/#Shop",
    },


  ]
  const [isModalOpen, setModalOpen] = useState(false)
  return (
    <div className="relative w-full bg-gradient-to-tr from-[#edede9] via-[#c2b191] to-[#f5ebe0]">
      {/* Navbar */}
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

      {/* Product Details */}
      <div className="pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">

            {/* FORM SECTION — LEFT ON DESKTOP, TOP ON MOBILE */}
            <div className="order-1 lg:order-none">
            <div className="mt-8 space-y-4">
              <div className='flex space-x-3.5'>
  <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
    {product.name}
  </h1>
    <button className="bg-slate-700 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-1 px-4 ring-1 ring-white/10">
        <span>Customizable</span>
        {/* <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M10.75 8.75L14.25 12L10.75 15.25"
          />
        </svg> */}
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
    </button>
              </div>


  <p className="text-2xl font-semibold text-red-600">
    {product.price}
  </p>
  <h2 className="mt-3 text-lg font-semibold text-gray-900">Details</h2>
  <p className="text-md text-gray-600">{product.details}</p>
  <p className="text-base sm:text-lg text-gray-700 font-bold leading-relaxed">
    {product.description}
  </p>

  <div className="mt-2 inline-flex items-center gap-2 text-md font-medium text-gray-600">
    <span className="uppercase tracking-wide text-md text-gray-900">GSM Quality:</span>
    <span className="text-gray-800 text-lg font-bold">{product.gsm}</span>
  </div>
</div>


              {/* Color Picker */}
              <div className="mt-8">
                <h3 className="text-sm font-medium text-gray-900">Color</h3>
                <fieldset aria-label="Choose a color" className="mt-4">
                  <RadioGroup
                    value={selectedColor}
                    onChange={setSelectedColor}
                    className="flex flex-wrap gap-3 sm:gap-5"
                  >
                    {product.colors.map((color) => (
                      <Radio
                        key={color.name}
                        value={color}
                        aria-label={color.name}
                        className={classNames(
                          color.selectedClass,
                          'flex flex-col items-center space-y-1 p-2 rounded-md focus:outline-none transition ring-offset-2 ring-indigo-500 data-checked:ring-2 data-focus:data-checked:ring-2'
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.class,
                            'size-8 min-w-8 rounded-full border border-black/10'
                          )}
                        />
                        <span className="text-xs text-gray-700 sm:text-sm">{color.name}</span>
                      </Radio>
                    ))}
                  </RadioGroup>
                </fieldset>
              </div>


              {/* Piece Picker */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Pieces</h3>

                </div>
                <fieldset aria-label="Choose a size" className="mt-4">
                  <RadioGroup
                    value={selectedPiece}
                    onChange={setSelectedPiece}
                    className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                  >
                    {product.piece.map((piece) => (
                      <Radio
                        key={piece.name}
                        value={piece}
                        disabled={!piece.inStock}
                        className={classNames(
                          piece.inStock
                            ? 'cursor-pointer bg-white text-gray-900 shadow-xs'
                            : 'cursor-not-allowed bg-gray-50 text-gray-200',
                          'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-hidden data-focus:ring-2 data-focus:ring-indigo-500 sm:flex-1 sm:py-6',
                        )}
                      >
                        <span>{piece.name}</span>
                        {piece.inStock ? (
                          <span aria-hidden="true" className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-checked:border-indigo-500 group-data-focus:border" />
                        ) : (
                          <span aria-hidden="true" className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                            <svg stroke="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 size-full stroke-2 text-gray-200">
                              <line x1={0} x2={100} y1={100} y2={0} vectorEffect="non-scaling-stroke" />
                            </svg>
                          </span>
                        )}
                      </Radio>
                    ))}
                  </RadioGroup>
                </fieldset>
              </div>
              {/* Size Picker */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>

                </div>
                <fieldset aria-label="Choose a size" className="mt-4">
                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                  >
                    {product.sizes.map((size) => (
                      <Radio
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        className={classNames(
                          size.inStock
                            ? 'cursor-pointer bg-white text-gray-900 shadow-xs'
                            : 'cursor-not-allowed bg-gray-50 text-gray-200',
                          'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-hidden data-focus:ring-2 data-focus:ring-indigo-500 sm:flex-1 sm:py-6',
                        )}
                      >
                        <span>{size.name}</span>
                        {size.inStock ? (
                          <span aria-hidden="true" className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-checked:border-indigo-500 group-data-focus:border" />
                        ) : (
                          <span aria-hidden="true" className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                            <svg stroke="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 size-full stroke-2 text-gray-200">
                              <line x1={0} x2={100} y1={100} y2={0} vectorEffect="non-scaling-stroke" />
                            </svg>
                          </span>
                        )}
                      </Radio>
                    ))}
                  </RadioGroup>
                </fieldset>
              </div>




              <a
  href={`https://wa.me/919600668214?text=${encodeURIComponent(
    `Hello Sir, I'm interested in the product:\nProduct Name: ${product.name}\nGSM Qualty:${product.gsm}\nColor: ${selectedColor.name}\nSize: ${selectedSize.name}\nPieces: ${selectedPiece.name}`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-md border border-green-600 bg-green-600 px-8 py-3 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
>
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15s-.767.967-.94 1.166c-.173.198-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.15-.173.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.669-1.611-.916-2.2-.242-.581-.487-.502-.67-.511-.173-.007-.372-.009-.571-.009a1.093 1.093 0 00-.796.372c-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.488 1.694.624.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347M12.051 20.946h-.003a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.25C2.169 5.514 6.604 1.078 12.056 1.078a9.84 9.84 0 016.981 2.894 9.85 9.85 0 012.893 6.994c-.003 5.45-4.438 9.884-9.889 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .184 5.312.181 11.868c0 2.093.547 4.136 1.588 5.945L.057 24l6.324-1.654a11.87 11.87 0 005.665 1.446h.005c6.554 0 11.865-5.312 11.868-11.868a11.82 11.82 0 00-3.496-8.465" />
  </svg>
  WhatsApp for Order
</a>


            </div>

            {/* IMAGE SECTION — ORDERED AFTER FORM ON MOBILE, LEFT ON DESKTOP */}
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="w-full max-w-sm h-auto rounded-md bg-amber-50 object-cover mx-auto"
            />



            {/* DETAILS SECTION — ALWAYS LAST */}
            <div className="order-3 lg:col-span-2">

              <h2 className="mt-6 text-lg font-semibold text-gray-900">Highlights</h2>
              <ul className="mt-2 list-disc pl-5 text-md text-gray-800 space-x-1.5">
                {product.highlights.map((item, i) => (
                  <li key={i} className='mt-1'>{item}</li>
                ))}
              </ul>
<SizeGuideSection product={product as ProductWithSizeGuide} />
             
            </div>

          </div>
        </div>
      </div>



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
