import 'i18next';
import type FA_TRANSLATION from "./locals/fa/translation.json";
import type EN_TRANSLATION from "./locals/en/translation.json";
import type AR_TRANSLATION from "./locals/ar/translation.json";
declare module "i18next" {
	interface CustomTypeOptions {
		defaultNS: "FA_TRANSLATION";
		resources: {
			FA_TRANSLATION: typeof FA_TRANSLATION;
			EN_TRANSLATION: typeof FA_TRANSLATION;
			AR_TRANSLATION: typeof AR_TRANSLATION;

		};
	}
}
