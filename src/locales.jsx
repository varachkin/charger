export const CHARGER_TYPES = ['CCS', 'CHAdeMO'];

export const LANGUAGES_CONFIG = {
    pl: {
        START_PAGE: {
            TITLE_EMPTY: 'Dotknij aby rozpocząć lub podłącz wtyczkę do pojazdu',
            TITLE_BUSY: 'Obecnie trwa ...',
            CARD_READY: 'Koniec ładowania Odłącz wtyczkę',
            CARD_CHARGING: 'Ładowanie ...',
            CARD_SUCCESS: 'Gotowe do użycia',
            CARD_NOT_AVAILABLE: 'Niedostępne',
            CARD_ERROR: 'Awaria',
            CARD_INFO_TITLE: 'Rozpocznij ładowanie',
            CARD_INFO_SUBTITLE: 'lub podłącz wtyczkę do pojazdu',
            REST_CARD_TITLE: 'Pozostałe...',
        },
        INITIALIZATION_PAGE: {
            TITLE_PAGE: 'Wykryto podłączenie',
            SUBTITLE_PAGE: 'Inicjalizacja',
            PARAGRAPH_PAGE_1: 'Upłynęło ',
            PARAGRAPH_PAGE_2: ' sek.',
            PARAGRAPH_PAGE_3: 'Potwierdź wybór stacji ładowania aby kontynuować.',

        },
        MAKE_SURE_PAGE: {
            TITLE_PAGE: 'Upewnij się, że ...',
            SUBTITLE_PAGE: 'wtyczka jest wypięta aby kontynuować.',
        },
        CARD: {
            STATION: 'Stanowisko',
        },
        CONNECTOR_TYPE_PAGE: {
            PAGE_TITLE: 'Wybierz typ złącza',
            PAGE_SUBTITLE: 'lub podłącz wtyczkę do pojazdu.',
            ECO_TITLE: 'Ekonomiczne',
            FAST_TITLE: 'Ultraszybkie',
            TILL: 'Do',
        },
        CHOOSE_STATION_PAGE: {
            TITLE_PAGE: 'Wybierz stanowisko',
        },
        PREPARING_FOR_CHARGING_PAGE: {
            TITLE_PAGE: 'Przygotowanie do ładowania'
        },
        CARD_PAYMENT_PAGE: {
            TITLE_PAGE: 'Postępuj zgodnie z instrukcjami na terminalu',
            SUBTITLE_PAGE: 'Terminal płatniczy znajdziesz zaraz pod ekranem.',
        },
        CHARGING_PAGE: {
            TITLE_PAGE: 'Rozpoczęliśmy ładowanie Twojego pojazdu!',
            TIME_PASSED: 'Upłynęło',
            TIME_TO_FINISH: 'Koniec za',
            INFO_SUBTITLE: 'Przydatne:',
            INFO_LINK_RECIPT: 'Wystaw paragon',
            INFO_LINK_INVOICE: 'Podaj dane do faktury'
        },
        ERROR_STATION_PAGE: {
            TITLE_PAGE: 'Wystąpił problem',
            SUBTITLE_PAGE_1: 'Sprawdź połączenie wtyczki z Twoim pojazdem.',
            SUBTITLE_PAGE_2: 'Wystąpił błąd podczas ładowania.',
            ARTICLE_PAGE: 'Prosimy o kontakt z infolinią:',
        },
        RATING_PAGE: {
            TITLE_PAGE: 'Oceń nas',
            SUBTITLE_PAGE: 'Jaka jest Twoja ogólna ocena satysfakcji z naszej usługi?',
            BUTTON_4_STAR: 'Bardzo dobrze',
            BUTTON_3_STAR: 'Dobrze',
            BUTTON_2_STAR: 'Nie mam zdania',
            BUTTON_1_STAR: 'Źle',
        },
        THANKS_PAGE: {
            TITLE_PAGE: 'Dziękujemy!',
            SUBTITLE_PAGE: 'Dziękujemy za Twoją ocenę.',
        },
        BUTTONS: {
            GET_STARTED: 'Rozpocznij',
            BACK: 'wstecz',
            START_CHARGING: 'Rozpocznij ładowanie',
            FINISH_CHARGING: 'Zakończ ładowanie',
            COMPLEATE_CHARGING: 'Koniec na dzisiaj',
            SUBMIT: 'Potwierdź',
            YES: 'Tak',
            NO: 'Nie',
            CONFIRM: 'Potwierdzam',
            MANUAL_CHOOSE: 'Wybiorę ręcznie',
            CONFIRM_CHECK: 'Potwierdź sprawdzenie',
        },
        FORM: {
            FORM_TITLE: 'Wymagane:',
            REGULATIONS: 'Akceptuję warunki ',
            REGULATIONS_LINK: 'regulaminu',
            PRIVATE_POLICY: 'Akceptuję warunki ',
            PRIVATE_POLICY_LINK: 'polityki prywatności',
            FORM_ERROR_MESSAGE: 'Wymagana akceptacja warunków usługi.',
        },
        REGULATIONS: {
            REGULATIONS_TITLE: 'Regulamin usług'
        },
        PRIVATE_POLICY: {
            PRIVATE_POLICY_TITLE: 'Polityka Prywatności'
        },
        MODAL_CONTENT: {
            TITLE_EMAIL: 'Podaj adres email',
            ARTICLE_EMAIL_BOLD: 'Paragon z transakcji',
            ARTICLE_EMAIL_REGULAR: ' zostanie automatycznie wysłany po zakończeniu ładowania.',
            INPUT_PLACEHOLDER_EMAIL: 'Podaj adres email',
            INPUT_LABEL_EMAIL: 'Twój Email',
            TITLE_INVOICE: 'Dane do faktury',
            SUBTITLE_INVOICE: 'Zeskanuj kod swoim telefonem aby wprowadzić dane do faktury.',
            TITLE_FINISH: 'Zakończenie ładowania',
            SUBTITLE_FINISH: 'Twój rachunek zostanie obciążony kwotą ',
            SUBTITLE_SECOND_FINISH: 'Czy chcesz kontynuować?',

        }
    },
    en: {
        START_PAGE: {
            TITLE: 'Tap to start or connect the plug to your vehicle',
            TITLE_EMPTY: 'Tap to start or plug in the vehicle',
            TITLE_BUSY: 'Currently in progress...',
            CARD_READY: 'Charging complete. Unplug the cable',
            CARD_CHARGING: 'Charging ...',
            CARD_SUCCESS: 'Ready to use',
            CARD_NOT_AVAILABLE: 'Unavailable',
            CARD_ERROR: 'Error',
            CARD_INFO_TITLE: 'Start charging',
            CARD_INFO_SUBTITLE: 'or plug in the vehicle',
            REST_CARD_TITLE: 'Others...',
        },
        INITIALIZATION_PAGE: {
            TITLE_PAGE: 'Connection detected',
            SUBTITLE_PAGE: 'Initialization',
            PARAGRAPH_PAGE_1: 'Elapsed ',
            PARAGRAPH_PAGE_2: ' seconds.',
            PARAGRAPH_PAGE_3: 'Confirm the charging station selection to continue.',
        },
        MAKE_SURE_PAGE: {
            TITLE_PAGE: 'Make sure that...',
            SUBTITLE_PAGE: 'the plug is unplugged to continue.',
        },
        CARD: {
            STATION: 'Position',
        },
        CONNECTOR_TYPE_PAGE: {
            PAGE_TITLE: 'Select connector type',
            PAGE_SUBTITLE: 'or plug in the vehicle.',
            ECO_TITLE: 'Economical',
            FAST_TITLE: 'Ultra-fast',
            TILL: 'Till',
        },
        CHOOSE_STATION_PAGE: {
            TITLE_PAGE: 'Select station',
        },
        PREPARING_FOR_CHARGING_PAGE: {
            TITLE_PAGE: 'Preparing for charging'
        },
        CARD_PAYMENT_PAGE: {
            TITLE_PAGE: 'Follow the instructions on the terminal',
            SUBTITLE_PAGE: 'You will find the payment terminal just below the screen.',
        },
        CHARGING_PAGE: {
            TITLE_PAGE: 'We have started charging your vehicle!',
            TIME_PASSED: "Elapsed",
            TIME_TO_FINISH: "Ends in",
            INFO_SUBTITLE: "Useful:",
            INFO_LINK_RECIPT: "Issue a receipt",
            INFO_LINK_INVOICE: "Provide invoice details",
        },
        ERROR_STATION_PAGE: {
            TITLE_PAGE: 'There was a problem',
            SUBTITLE_PAGE_1: 'Check the plug connection with your vehicle.',
            SUBTITLE_PAGE_2: 'An error occurred during charging.',
            ARTICLE_PAGE: 'Please contact the helpline:',
        },
        RATING_PAGE: {
            TITLE_PAGE: 'Rate us',
            SUBTITLE_PAGE: 'What is your overall satisfaction with our service?',
            BUTTON_4_STAR: 'Very good',
            BUTTON_3_STAR: 'Good',
            BUTTON_2_STAR: 'No opinion',
            BUTTON_1_STAR: 'Bad',
        },
        THANKS_PAGE: {
            TITLE_PAGE: 'Thank you!',
            SUBTITLE_PAGE: 'Thank you for your rating.',
        },
        BUTTONS: {
            GET_STARTED: 'Get started',
            BACK: 'back',
            START_CHARGING: 'Start charging',
            FINISH_CHARGING: 'Finish charging',
            COMPLEATE_CHARGING: 'Done for today',
            SUBMIT: 'Submit',
            YES: 'Yes',
            NO: 'No',
            CONFIRM: 'Confirm',
            MANUAL_CHOOSE: 'Choose manually',
            CONFIRM_CHECK: 'Confirm check',
        },
        FORM: {
            FORM_TITLE: 'Required:',
            REGULATIONS: 'I accept the terms of the ',
            REGULATIONS_LINK: 'regulations',
            PRIVATE_POLICY: 'I accept the terms of the ',
            PRIVATE_POLICY_LINK: 'privacy policy',
            FORM_ERROR_MESSAGE: 'Acceptance of the terms of service is required.',
        },
        REGULATIONS: {
            REGULATIONS_TITLE: 'Terms of Service'
        },
        PRIVATE_POLICY: {
            PRIVATE_POLICY_TITLE: 'Privacy Policy'
        },
        MODAL_CONTENT: {
            TITLE_EMAIL: "Enter email address",
            ARTICLE_EMAIL_BOLD: "Transaction receipt",
            ARTICLE_EMAIL_REGULAR: " will be automatically sent after the charging is completed.",
            INPUT_PLACEHOLDER_EMAIL: "Enter email address",
            INPUT_LABEL_EMAIL: "Your Email",
            TITLE_INVOICE: 'Invoice Details',
            SUBTITLE_INVOICE: 'Scan the code with your phone to enter invoice details.',
            TITLE_FINISH: "Charging Completion",
            SUBTITLE_FINISH: "Your account will be charged an amount of ",
            SUBTITLE_SECOND_FINISH: "Do you want to continue?"
        }
    }
}