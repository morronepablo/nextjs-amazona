/* eslint-disable @next/next/no-img-element */
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
