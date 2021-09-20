import React from 'react';
import { Link, useI18next, useTranslation } from 'gatsby-plugin-react-i18next';

export default function LanguageSwitcher() {
  const { languages, originalPath } = useI18next();

  // access current langauge
  const { i18n } = useTranslation();
  const getLanguage = () => i18n.language || window.localStorage.i18nextLng;

  return (
    <>
      {/* Language Switcher */}
      {languages.map((lng) => (
        <li key={lng}>
          <Link to={originalPath} language={lng} className={`pr-5 ${getLanguage() === lng ? 'hidden' : 'block'}`}>
            {lng.toUpperCase()}
          </Link>
        </li>
      ))}
    </>
  );
}
