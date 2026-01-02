export interface Translation {
    header: {
        services: string
        pricing: string
        contact: string
        getAudit: string
    }
    hero: {
        title: string
        titleHighlight: string
        subtitle: string
        ctaButton: string
    }
    pricing: {
        sectionTitle: string
        sectionSubtitle: string
        recommended: string
        perMonth: string
        orderPlan: string
        leadCost: string
        premium: {
            features: string[]
        }
        standard: {
            features: string[]
        }
        vip: {
            features: string[]
        }
    }
    contact: {
        sectionTitle: string
        sectionSubtitle: string
        telegram: string
        instagram: string
        phone: string
        auditTitle: string
        auditDescription: string
        getAnalysis: string
    }
    footer: {
        tagline: string
        rights: string
    }
}

export const translations: Record<'ru' | 'uz' | 'en', Translation> = {
    ru: {
        header: {
            services: 'Услуги',
            pricing: 'Тарифы',
            contact: 'Контакты',
            getAudit: 'Купить тариф'
        },
        hero: {
            title: 'Профессиональный',
            titleHighlight: 'SMM и таргет',
            subtitle:
                'Продвигаем ваш бизнес в соцсетях системно: стратегия, контент и реклама, которые приводят клиентов и увеличивают прибыль.',
            ctaButton: 'Выбрать тариф'
        },
        pricing: {
            sectionTitle: 'Тарифы',
            sectionSubtitle:
                'Подберите план под ваши задачи. Честные условия, понятная структура и прогнозируемый результат.',
            recommended: 'Лучший выбор',
            perMonth: '/мес',
            orderPlan: 'Выбрать тариф',
            leadCost: 'Таргет',
            premium: {
                features: [
                    '6 видеопостов',
                    '6 SMD или карусель-постов',
                    '20 сторис',
                    'Instagram, Telegram, FB, YouTube',
                    'Рекламная стратегия',
                    'Анализ конкурентов',
                    'Определение целевой аудитории',
                    'Управление бюджетом',
                    'Оптимизация таргета',
                    'Ежемесячные отчёты'
                ]
            },
            standard: {
                features: [
                    '12 видеопостов',
                    '8 SMD или карусель-постов',
                    '30 сторис',
                    'Instagram, Telegram, FB, YouTube',
                    'Базовая стратегия продвижения',
                    'Анализ конкурентов',
                    'Определение целевой аудитории',
                    'Управление бюджетом',
                    'Оптимизация кампаний',
                    'Ежемесячные отчёты'
                ]
            },
            vip: {
                features: [
                    '15 видеопостов',
                    '10 SMD или карусель-постов',
                    '40 сторис',
                    'Все площадки + YouTube',
                    'Полная стратегия продвижения',
                    'Глубокий маркетинговый анализ',
                    'Портрет ЦА и клиента',
                    'Построение воронки продаж',
                    'Лид-магнит',
                    'Сценарии продаж',
                    'Годовая стратегия'
                ]
            }
        },
        contact: {
            sectionTitle: 'Свяжитесь с нами',
            sectionSubtitle:
                'Расскажите о проекте — предложим стратегию роста под ваш рынок и бюджет. Ответим в кратчайшее время.',
            telegram: 'Telegram',
            instagram: 'Instagram',
            phone: 'Телефон',
            auditTitle: 'Выберите тариф',
            auditDescription:
                'Подберём оптимальный план продвижения под ваши задачи и бюджет. Начните расти уже сегодня.',
            getAnalysis: 'Заказать тариф'
        },
        footer: {
            tagline: 'Ваш результат — наша главная цель',
            rights: '© Все права защищены'
        }
    },
    uz: {
        header: {
            services: 'Xizmatlar',
            pricing: 'Tariflar',
            contact: 'Aloqa',
            getAudit: 'Tarif sotib olish'
        },
        hero: {
            title: 'Professional',
            titleHighlight: 'SMM va Target',
            subtitle:
                'Biznesingizni ijtimoiy tarmoqlarda tizimli ravishda rivojlantiramiz: strategiya, kontent va mijoz olib keladigan reklama.',
            ctaButton: 'Tarif tanlash'
        },
        pricing: {
            sectionTitle: 'Tariflar',
            sectionSubtitle:
                'Maqsadingizga mos rejani tanlang. Shaffof narxlar va aniq natija.',
            recommended: 'Eng maqbul tanlov',
            perMonth: '/oy',
            orderPlan: 'Tarifni tanlash',
            leadCost: 'Target',
            premium: {
                features: [
                    '6 ta video post',
                    '6 ta SMD yoki karusel post',
                    '20 ta stories',
                    'Instagram, Telegram, FB, YouTube',
                    'Reklama strategiyasi',
                    'Raqobatchilar tahlili',
                    'Maqsadli auditoriya aniqlash',
                    'Byudjetni boshqarish',
                    'Targetni optimallashtirish',
                    'Oylik hisobotlar'
                ]
            },
            standard: {
                features: [
                    '12 ta video post',
                    '8 ta SMD yoki karusel post',
                    '30 ta stories',
                    'Instagram, Telegram, FB, YouTube',
                    'Asosiy SMM strategiya',
                    'Raqobatchilar tahlili',
                    'Maqsadli auditoriya',
                    'Byudjetni boshqarish',
                    'Kampaniyalarni optimallashtirish',
                    'Oylik hisobotlar'
                ]
            },
            vip: {
                features: [
                    '15 ta video post',
                    '10 ta SMD yoki karusel post',
                    '40 ta stories',
                    'Barcha platformalar + YouTube',
                    'To\'liq marketing strategiyasi',
                    'Chuqur tahlil',
                    'MA va mijoz portreti',
                    'Sotuv voronkasi',
                    'Lead-magnit',
                    'Sotuv ssenariylari',
                    'Yillik strategiya'
                ]
            }
        },
        contact: {
            sectionTitle: 'Biz bilan bog\'laning',
            sectionSubtitle:
                'Loyihangizni muhokama qilamiz va bozoringizga mos rivojlanish strategiyasini taklif qilamiz.',
            telegram: 'Telegram',
            instagram: 'Instagram',
            phone: 'Telefon',
            auditTitle: 'Tarif tanlang',
            auditDescription:
                'Maqsad va byudjetingizga eng mos tarifni tanlaymiz. Bugundan boshlab o\'sing.',
            getAnalysis: 'Tarif buyurtma qilish'
        },
        footer: {
            tagline: 'Sizning natijangiz — bizning maqsadimiz',
            rights: '© Barcha huquqlar himoyalangan'
        }
    },
    en: {
        header: {
            services: 'Services',
            pricing: 'Pricing',
            contact: 'Contacts',
            getAudit: 'Buy Plan'
        },
        hero: {
            title: 'Professional',
            titleHighlight: 'SMM & Targeting',
            subtitle:
                'We grow your brand on social media with strategy, content, and ads designed to attract real clients and drive revenue.',
            ctaButton: 'Choose Plan'
        },
        pricing: {
            sectionTitle: 'Pricing Plans',
            sectionSubtitle:
                'Choose the plan that fits your goals. Transparent pricing and measurable results.',
            recommended: 'Best Choice',
            perMonth: '/mo',
            orderPlan: 'Choose Plan',
            leadCost: 'Target',
            premium: {
                features: [
                    '6 video posts',
                    '6 SMD or carousel posts',
                    '20 stories',
                    'Instagram, Telegram, FB, YouTube',
                    'Advertising strategy',
                    'Competitor research',
                    'Target audience definition',
                    'Budget management',
                    'Campaign optimization',
                    'Monthly reports'
                ]
            },
            standard: {
                features: [
                    '12 video posts',
                    '8 SMD or carousel posts',
                    '30 stories',
                    'Instagram, Telegram, FB, YouTube',
                    'Basic promotion strategy',
                    'Competitor research',
                    'Target audience',
                    'Budget management',
                    'Optimization',
                    'Monthly reports'
                ]
            },
            vip: {
                features: [
                    '15 video posts',
                    '10 SMD or carousel posts',
                    '40 stories',
                    'All platforms + YouTube',
                    'Full marketing strategy',
                    'Deep analytics',
                    'Audience & client persona',
                    'Sales funnel',
                    'Lead magnet',
                    'Sales scripts',
                    'Annual strategy'
                ]
            }
        },
        contact: {
            sectionTitle: 'Get in Touch',
            sectionSubtitle:
                'Tell us about your project and we\'ll build a growth strategy tailored to your business.',
            telegram: 'Telegram',
            instagram: 'Instagram',
            phone: 'Phone',
            auditTitle: 'Choose Your Plan',
            auditDescription:
                'We\'ll help you select the best plan for your goals and budget. Start growing today.',
            getAnalysis: 'Order Plan'
        },
        footer: {
            tagline: 'Your results — our priority',
            rights: '© All rights reserved'
        }
    }
}
