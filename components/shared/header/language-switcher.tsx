// 'use client'

// import * as React from 'react'
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuLabel,
//   DropdownMenuRadioGroup,
//   DropdownMenuRadioItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu'

// import { useLocale } from 'next-intl'
// import { Link, usePathname } from '@/i18n/routing'
// import useSettingStore from '@/hooks/use-setting-store'
// import { i18n } from '@/i18n-config'
// import { setCurrencyOnServer } from '@/lib/actions/setting.actions'
// import { ChevronDownIcon } from 'lucide-react'

// export default function LanguageSwitcher() {
//   const { locales } = i18n
//   const locale = useLocale()
//   const pathname = usePathname()

//   const {
//     setting: { availableCurrencies, currency },
//     setCurrency,
//   } = useSettingStore()
//   const handleCurrencyChange = async (newCurrency: string) => {
//     await setCurrencyOnServer(newCurrency)
//     setCurrency(newCurrency)
//   }
//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger className='header-button h-[41px]'>
//         <div className='flex items-center gap-1'>
//           <span className='text-xl'>
//             {locales.find((l) => l.code === locale)?.icon}
//           </span>
//           {locale.toUpperCase().slice(0, 2)}
//           <ChevronDownIcon />
//         </div>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent className='w-56'>
//         <DropdownMenuLabel>Language</DropdownMenuLabel>
//         <DropdownMenuRadioGroup value={locale}>
//           {locales.map((c) => (
//             <DropdownMenuRadioItem key={c.name} value={c.code}>
//               <Link
//                 className='w-full flex items-center gap-1'
//                 href={pathname}
//                 locale={c.code}
//               >
//                 <span className='text-lg'>{c.icon}</span> {c.name}
//               </Link>
//             </DropdownMenuRadioItem>
//           ))}
//         </DropdownMenuRadioGroup>

//         <DropdownMenuSeparator />

//         <DropdownMenuLabel>Currency</DropdownMenuLabel>
//         <DropdownMenuRadioGroup
//           value={currency}
//           onValueChange={handleCurrencyChange}
//         >
//           {availableCurrencies.map((c) => (
//             <DropdownMenuRadioItem key={c.name} value={c.code}>
//               {c.symbol} {c.code}
//             </DropdownMenuRadioItem>
//           ))}
//         </DropdownMenuRadioGroup>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   )
// }

// "use client";

// import * as React from "react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuLabel,
//   DropdownMenuRadioGroup,
//   DropdownMenuRadioItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// import { useLocale } from "next-intl";
// import { Link, usePathname } from "@/i18n/routing";
// import useSettingStore from "@/hooks/use-setting-store";
// import { i18n } from "@/i18n-config";
// import { setCurrencyOnServer } from "@/lib/actions/setting.actions";
// import { ChevronDownIcon } from "lucide-react";

// export default function LanguageSwitcher() {
//   const { locales } = i18n;
//   const locale = useLocale();
//   const pathname = usePathname();

//   const {
//     setting: { availableCurrencies, currency },
//     setCurrency,
//   } = useSettingStore();
//   const handleCurrencyChange = async (newCurrency: string) => {
//     await setCurrencyOnServer(newCurrency);
//     setCurrency(newCurrency);
//   };

//   // Encuentra el locale actual para mostrar su ícono
//   const currentLocale = locales.find((l) => l.code === locale);

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger className="header-button h-[41px]">
//         <div className="flex items-center gap-1">
//           <span className="text-xl">{currentLocale?.icon}</span>
//           {locale.toUpperCase().slice(0, 2)}
//           <ChevronDownIcon />
//         </div>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent className="w-56">
//         <DropdownMenuLabel>Language</DropdownMenuLabel>
//         <DropdownMenuRadioGroup value={locale}>
//           {locales.map((c) => (
//             <DropdownMenuRadioItem key={c.name} value={c.code}>
//               <Link
//                 className="w-full flex items-center gap-1"
//                 href={pathname}
//                 locale={c.code}
//               >
//                 <span className="text-lg">{c.icon}</span> {c.name}
//               </Link>
//             </DropdownMenuRadioItem>
//           ))}
//         </DropdownMenuRadioGroup>

//         <DropdownMenuSeparator />

//         <DropdownMenuLabel>Currency</DropdownMenuLabel>
//         <DropdownMenuRadioGroup
//           value={currency}
//           onValueChange={handleCurrencyChange}
//         >
//           {availableCurrencies.map((c) => (
//             <DropdownMenuRadioItem key={c.name} value={c.code}>
//               {c.symbol} {c.code}
//             </DropdownMenuRadioItem>
//           ))}
//         </DropdownMenuRadioGroup>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }

// "use client";

// import * as React from "react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuLabel,
//   DropdownMenuRadioGroup,
//   DropdownMenuRadioItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// import { useLocale } from "next-intl";
// import { Link, usePathname } from "@/i18n/routing";
// import useSettingStore from "@/hooks/use-setting-store";
// import { i18n } from "@/i18n-config";
// import { setCurrencyOnServer } from "@/lib/actions/setting.actions";
// import { ChevronDownIcon } from "lucide-react";

// // Función para obtener el código de país desde el código de locale
// const getCountryCode = (localeCode: string) => {
//   if (localeCode === "en-US") return "US"; // 'en-US' corresponde a Estados Unidos
//   if (localeCode === "fr") return "FR"; // 'fr' corresponde a Francia
//   if (localeCode === "ar") return "SA"; // 'ar' corresponde a Arabia Saudita
//   if (localeCode === "es") return "ES"; // 'es' corresponde a España
//   console.log(localeCode);
//   return "US"; // Por defecto, devuelve 'US'
// };

// export default function LanguageSwitcher() {
//   const { locales } = i18n;
//   const locale = useLocale();
//   const pathname = usePathname();

//   const {
//     setting: { availableCurrencies, currency },
//     setCurrency,
//   } = useSettingStore();
//   const handleCurrencyChange = async (newCurrency: string) => {
//     await setCurrencyOnServer(newCurrency);
//     setCurrency(newCurrency);
//   };

//   // Obtener el código de país para el locale actual
//   const countryCode = getCountryCode(locale);

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger className="header-button h-[41px]">
//         <div className="flex items-center gap-1">
//           <span className="text-xl">
//             {String.fromCodePoint(
//               ...[...countryCode].map((c) => 127397 + c.charCodeAt(0))
//             )}
//           </span>
//           {locale.toUpperCase().slice(0, 2)}
//           <ChevronDownIcon />
//         </div>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent className="w-56">
//         <DropdownMenuLabel>Language</DropdownMenuLabel>
//         <DropdownMenuRadioGroup value={locale}>
//           {locales.map((c) => {
//             const countryCode = getCountryCode(c.code);
//             return (
//               <DropdownMenuRadioItem key={c.name} value={c.code}>
//                 <Link
//                   className="w-full flex items-center gap-1"
//                   href={pathname}
//                   locale={c.code}
//                 >
//                   <span className="text-lg">
//                     {String.fromCodePoint(
//                       ...[...countryCode].map((c) => 127397 + c.charCodeAt(0))
//                     )}
//                   </span>
//                   {c.name}
//                 </Link>
//               </DropdownMenuRadioItem>
//             );
//           })}
//         </DropdownMenuRadioGroup>

//         <DropdownMenuSeparator />

//         <DropdownMenuLabel>Currency</DropdownMenuLabel>
//         <DropdownMenuRadioGroup
//           value={currency}
//           onValueChange={handleCurrencyChange}
//         >
//           {availableCurrencies.map((c) => (
//             <DropdownMenuRadioItem key={c.name} value={c.code}>
//               {c.symbol} {c.code}
//             </DropdownMenuRadioItem>
//           ))}
//         </DropdownMenuRadioGroup>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }

// "use client";

// import * as React from "react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuLabel,
//   DropdownMenuRadioGroup,
//   DropdownMenuRadioItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// import { useLocale } from "next-intl";
// import { Link, usePathname } from "@/i18n/routing";
// import useSettingStore from "@/hooks/use-setting-store";
// import { i18n } from "@/i18n-config";
// import { setCurrencyOnServer } from "@/lib/actions/setting.actions";
// import { ChevronDownIcon } from "lucide-react";

// export default function LanguageSwitcher() {
//   const { locales } = i18n;
//   const locale = useLocale();
//   const pathname = usePathname();

//   const {
//     setting: { availableCurrencies, currency },
//     setCurrency,
//   } = useSettingStore();
//   const handleCurrencyChange = async (newCurrency: string) => {
//     await setCurrencyOnServer(newCurrency);
//     setCurrency(newCurrency);
//   };

//   // Encuentra el locale actual para mostrar su ícono
//   const currentLocale = locales.find((l) => l.code === locale);

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger className="header-button h-[41px]">
//         <div className="flex items-center gap-1">
//           <span className="text-xl">{currentLocale?.icon}</span>
//           {currentLocale?.icon}
//           {locale.toUpperCase().slice(0, 2)}
//           <ChevronDownIcon />
//         </div>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent className="w-56">
//         <DropdownMenuLabel>Language</DropdownMenuLabel>
//         <DropdownMenuRadioGroup value={locale}>
//           {locales.map((c) => (
//             <DropdownMenuRadioItem key={c.name} value={c.code}>
//               <Link
//                 className="w-full flex items-center gap-1"
//                 href={pathname}
//                 locale={c.code}
//               >
//                 <span className="text-lg">{c.icon}</span> {c.name}
//               </Link>
//             </DropdownMenuRadioItem>
//           ))}
//         </DropdownMenuRadioGroup>

//         <DropdownMenuSeparator />

//         <DropdownMenuLabel>Currency</DropdownMenuLabel>
//         <DropdownMenuRadioGroup
//           value={currency}
//           onValueChange={handleCurrencyChange}
//         >
//           {availableCurrencies.map((c) => (
//             <DropdownMenuRadioItem key={c.name} value={c.code}>
//               {c.symbol} {c.code}
//             </DropdownMenuRadioItem>
//           ))}
//         </DropdownMenuRadioGroup>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }

// "use client";
// import * as React from "react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuLabel,
//   DropdownMenuRadioGroup,
//   DropdownMenuRadioItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { useLocale } from "next-intl";
// import { Link, usePathname } from "@/i18n/routing";
// import useSettingStore from "@/hooks/use-setting-store";
// import { i18n } from "@/i18n-config";
// import { setCurrencyOnServer } from "@/lib/actions/setting.actions";
// import { ChevronDownIcon } from "lucide-react";

// export default function LanguageSwitcher() {
//   const { locales } = i18n;
//   const locale = useLocale();
//   const pathname = usePathname();
//   const {
//     setting: { availableCurrencies, currency },
//     setCurrency,
//   } = useSettingStore();

//   // Función para manejar el cambio de moneda
//   const handleCurrencyChange = async (newCurrency: string) => {
//     await setCurrencyOnServer(newCurrency);
//     setCurrency(newCurrency);
//   };

//   // Encuentra el locale actual para mostrar su ícono
//   const currentLocale = locales.find((l) => l.code === locale);

//   return (
//     <DropdownMenu>
//       {/* Botón desplegable */}
//       <DropdownMenuTrigger className="header-button h-[41px]">
//         <div className="flex items-center gap-1">
//           {/* Ícono de la bandera */}
//           <span className="text-xl">
//             {currentLocale?.icon || locale.toUpperCase()}
//           </span>
//           {/* Código del idioma */}
//           {locale.toUpperCase().slice(0, 2)}
//           {/* Flecha hacia abajo */}
//           <ChevronDownIcon />
//         </div>
//       </DropdownMenuTrigger>

//       {/* Contenido del menú desplegable */}
//       <DropdownMenuContent className="w-56">
//         {/* Sección de selección de idioma */}
//         <DropdownMenuLabel>Language</DropdownMenuLabel>
//         <DropdownMenuRadioGroup value={locale}>
//           {locales.map((localeOption) => (
//             <DropdownMenuRadioItem
//               key={localeOption.code}
//               value={localeOption.code}
//             >
//               <Link
//                 className="w-full flex items-center gap-1"
//                 href={pathname}
//                 locale={localeOption.code}
//               >
//                 {/* Ícono de la bandera */}
//                 <span className="text-lg">{localeOption.icon}</span>
//                 {/* Nombre del idioma */}
//                 {localeOption.name}
//               </Link>
//             </DropdownMenuRadioItem>
//           ))}
//         </DropdownMenuRadioGroup>

//         {/* Separador */}
//         <DropdownMenuSeparator />

//         {/* Sección de selección de moneda */}
//         <DropdownMenuLabel>Currency</DropdownMenuLabel>
//         <DropdownMenuRadioGroup
//           value={currency}
//           onValueChange={handleCurrencyChange}
//         >
//           {availableCurrencies.map((currencyOption) => (
//             <DropdownMenuRadioItem
//               key={currencyOption.code}
//               value={currencyOption.code}
//             >
//               {/* Símbolo y código de la moneda */}
//               {currencyOption.symbol} {currencyOption.code}
//             </DropdownMenuRadioItem>
//           ))}
//         </DropdownMenuRadioGroup>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }

// "use client";
// import * as React from "react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuLabel,
//   DropdownMenuRadioGroup,
//   DropdownMenuRadioItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { useLocale } from "next-intl";
// import { Link, usePathname } from "@/i18n/routing";
// import useSettingStore from "@/hooks/use-setting-store";
// import { i18n } from "@/i18n-config";
// import { setCurrencyOnServer } from "@/lib/actions/setting.actions";
// import { ChevronDownIcon } from "lucide-react";

// export default function LanguageSwitcher() {
//   const { locales } = i18n;
//   const locale = useLocale();
//   const pathname = usePathname();
//   const {
//     setting: { availableCurrencies, currency },
//     setCurrency,
//   } = useSettingStore();

//   // Función para manejar el cambio de moneda
//   const handleCurrencyChange = async (newCurrency: string) => {
//     await setCurrencyOnServer(newCurrency);
//     setCurrency(newCurrency);
//   };

//   // Encuentra el locale actual para mostrar su ícono
//   const currentLocale = locales.find((l) => l.code === locale);

//   // Depuración del valor de currentLocale
//   console.log("Current Locale:", currentLocale);

//   return (
//     <DropdownMenu>
//       {/* Botón desplegable */}
//       <DropdownMenuTrigger className="header-button h-[41px]">
//         <div className="flex items-center gap-1">
//           {/* Ícono de la bandera */}
//           <span className="text-xl">
//             {currentLocale?.icon || locale.toUpperCase()}
//           </span>
//           {/* Código del idioma */}
//           {locale.toUpperCase().slice(0, 2)}
//           {/* Flecha hacia abajo */}
//           <ChevronDownIcon />
//         </div>
//       </DropdownMenuTrigger>

//       {/* Contenido del menú desplegable */}
//       <DropdownMenuContent className="w-56">
//         {/* Sección de selección de idioma */}
//         <DropdownMenuLabel>Language</DropdownMenuLabel>
//         <DropdownMenuRadioGroup value={locale}>
//           {locales.map((localeOption) => (
//             <DropdownMenuRadioItem
//               key={localeOption.code}
//               value={localeOption.code}
//             >
//               <Link
//                 className="w-full flex items-center gap-1"
//                 href={pathname}
//                 locale={localeOption.code}
//               >
//                 {/* Ícono de la bandera */}
//                 <span className="text-lg">
//                   {localeOption.icon || localeOption.code.toUpperCase()}
//                 </span>
//                 {/* Nombre del idioma */}
//                 {localeOption.name}
//               </Link>
//             </DropdownMenuRadioItem>
//           ))}
//         </DropdownMenuRadioGroup>

//         {/* Separador */}
//         <DropdownMenuSeparator />

//         {/* Sección de selección de moneda */}
//         <DropdownMenuLabel>Currency</DropdownMenuLabel>
//         <DropdownMenuRadioGroup
//           value={currency}
//           onValueChange={handleCurrencyChange}
//         >
//           {availableCurrencies.map((currencyOption) => (
//             <DropdownMenuRadioItem
//               key={currencyOption.code}
//               value={currencyOption.code}
//             >
//               {/* Símbolo y código de la moneda */}
//               {currencyOption.symbol} {currencyOption.code}
//             </DropdownMenuRadioItem>
//           ))}
//         </DropdownMenuRadioGroup>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }

"use client";
import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import useSettingStore from "@/hooks/use-setting-store";
import { i18n } from "@/i18n-config";
import { setCurrencyOnServer } from "@/lib/actions/setting.actions";
import { ChevronDownIcon } from "lucide-react";

export default function LanguageSwitcher() {
  const { locales } = i18n;
  const locale = useLocale();
  const pathname = usePathname();
  const {
    setting: { availableCurrencies, currency },
    setCurrency,
  } = useSettingStore();

  // Función para manejar el cambio de moneda
  const handleCurrencyChange = async (newCurrency: string) => {
    await setCurrencyOnServer(newCurrency);
    setCurrency(newCurrency);
  };

  // Encuentra el locale actual para mostrar su ícono
  const currentLocale = locales.find((l) => l.code === locale);

  return (
    <DropdownMenu>
      {/* Botón desplegable */}
      <DropdownMenuTrigger className="header-button h-[41px]">
        <div className="flex items-center gap-1">
          {/* Ícono de la bandera */}
          <img src={currentLocale?.icon} alt={locale} className="w-6 h-6" />
          {/* Código del idioma */}
          {locale.toUpperCase().slice(0, 2)}
          {/* Flecha hacia abajo */}
          <ChevronDownIcon />
        </div>
      </DropdownMenuTrigger>

      {/* Contenido del menú desplegable */}
      <DropdownMenuContent className="w-56">
        {/* Sección de selección de idioma */}
        <DropdownMenuLabel>Language</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={locale}>
          {locales.map((localeOption) => (
            <DropdownMenuRadioItem
              key={localeOption.code}
              value={localeOption.code}
            >
              <Link
                className="w-full flex items-center gap-1"
                href={pathname}
                locale={localeOption.code}
              >
                {/* Ícono de la bandera */}
                <img
                  src={localeOption.icon}
                  alt={localeOption.code}
                  className="w-6 h-6"
                />
                {/* Nombre del idioma */}
                {localeOption.name}
              </Link>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>

        {/* Separador */}
        <DropdownMenuSeparator />

        {/* Sección de selección de moneda */}
        <DropdownMenuLabel>Currency</DropdownMenuLabel>
        <DropdownMenuRadioGroup
          value={currency}
          onValueChange={handleCurrencyChange}
        >
          {availableCurrencies.map((currencyOption) => (
            <DropdownMenuRadioItem
              key={currencyOption.code}
              value={currencyOption.code}
            >
              {/* Símbolo y código de la moneda */}
              {currencyOption.symbol} {currencyOption.code}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
