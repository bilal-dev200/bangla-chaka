"use client";
import React, { useEffect, useState } from "react";

const GoogleTranslate = ({ isHomePage }) => {
    const [currentLang, setCurrentLang] = useState("en");

    useEffect(() => {
        const addScript = () => {
            if (document.getElementById("google-translate-script")) {
                if (window.google && window.google.translate) {
                    window.googleTranslateElementInit();
                }
                return;
            }
            const script = document.createElement("script");
            script.id = "google-translate-script";
            script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
            script.async = true;
            document.body.appendChild(script);
        };

        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement(
                {
                    pageLanguage: "en",
                    includedLanguages: "en,bn",
                    autoDisplay: false,
                },
                "google_translate_element"
            );
        };

        addScript();

        // Check for existing translation cookie to set initial state
        const checkCookie = () => {
            const match = document.cookie.match(/googtrans=\/en\/(bn|en)/);
            if (match) {
                setCurrentLang(match[1]);
            }
        };
        checkCookie();
    }, []);

    const toggleLanguage = () => {
        try {
            const newLang = currentLang === "en" ? "bn" : "en";
            const googleCombo = document.querySelector(".goog-te-combo");

            if (googleCombo) {
                googleCombo.value = newLang;
                googleCombo.dispatchEvent(new Event("change"));
                setCurrentLang(newLang);
            } else {
                // Fallback: Set cookie directly and reload if combo not found after script load
                document.cookie = `googtrans=/en/${newLang}; path=/;`;
                document.cookie = `googtrans=/en/${newLang}; path=/; domain=.${window.location.host};`;
                window.location.reload();
            }
        } catch (error) {
            console.error("Error toggling language:", error);
        }
    };

    return (
        <div className="flex items-center gap-2">
            {/* Google Translate Element - Hidden but present for initialization */}
            <div
                id="google_translate_element"
                className="fixed top-[-9999px] left-[-9999px] opacity-0 pointer-events-none"
            ></div>

            {/* Custom Toggle Button */}
            <button
                onClick={toggleLanguage}
                className={`lang-toggle-btn border transition-all duration-300 flex items-center gap-2 h-9 px-3 rounded-md ${isHomePage
                    ? "text-white border-white hover:bg-white/10"
                    : "text-black border-gray-400 hover:bg-gray-100"
                    }`}
            >
                <span className={`${currentLang === "en" ? "font-bold" : "opacity-60"} notranslate`}>EN</span>
                <span className="opacity-40">|</span>
                <span className={`${currentLang === "bn" ? "font-bold bengali-font" : "opacity-60 bengali-font"} notranslate`}>
                    বাংলা
                </span>
            </button>
        </div>
    );
};

export default GoogleTranslate;
