// src/utils/dateUtils.ts
export function toShamsiString(date: Date): string {
    const persianDate = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false, // use 24-hour format
    }).format(date);

    // Convert Persian digits to English digits if you prefer
    const englishDigits = persianDate.replace(/[۰-۹]/g, (d) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d)));

    return englishDigits.replace(',', ''); // optional cleanup
}
