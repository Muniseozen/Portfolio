"use client";

import { createContext, useContext, type ReactNode } from "react";
import { defaultLocale, type Locale } from "./config";
import { messages, type Messages } from "./messages";

type LocaleContextValue = {
  locale: Locale;
  m: Messages;
};

const LocaleContext = createContext<LocaleContextValue>({
  locale: defaultLocale,
  m: messages[defaultLocale],
});

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return (
    <LocaleContext.Provider value={{ locale, m: messages[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
