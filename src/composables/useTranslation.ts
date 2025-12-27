import { ref, computed } from 'vue'
import { translations } from '../locales/translations'

type Language = 'ru' | 'uz' | 'en'

const STORAGE_KEY = 'acex-lang'
const DEFAULT_LANGUAGE: Language = 'ru'

// Load initial language from localStorage or use default
const currentLanguage = ref<Language>(
    (localStorage.getItem(STORAGE_KEY) as Language) || DEFAULT_LANGUAGE
)

// Get current translations
const currentTranslations = computed(() => translations[currentLanguage.value])

/**
 * Translation composable for multi-language support
 */
export function useTranslation() {
    /**
     * Get translated text by path
     * @param path - Dot notation path to translation key (e.g., 'header.services')
     */
    const t = (path: string): string => {
        const keys = path.split('.')
        let value: any = currentTranslations.value

        for (const key of keys) {
            if (value && typeof value === 'object' && key in value) {
                value = value[key]
            } else {
                console.warn(`Translation key not found: ${path}`)
                return path
            }
        }

        return typeof value === 'string' ? value : path
    }

    /**
     * Get translated array by path
     * @param path - Dot notation path to translation array
     */
    const tArray = (path: string): string[] => {
        const keys = path.split('.')
        let value: any = currentTranslations.value

        for (const key of keys) {
            if (value && typeof value === 'object' && key in value) {
                value = value[key]
            } else {
                console.warn(`Translation key not found: ${path}`)
                return []
            }
        }

        return Array.isArray(value) ? value : []
    }

    /**
     * Set current language
     * @param lang - Language code ('ru', 'uz', 'en')
     */
    const setLanguage = (lang: Language) => {
        currentLanguage.value = lang
        localStorage.setItem(STORAGE_KEY, lang)
    }

    return {
        t,
        tArray,
        currentLanguage,
        setLanguage
    }
}
