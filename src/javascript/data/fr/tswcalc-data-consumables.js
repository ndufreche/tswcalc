var tswcalc = tswcalc || {};
tswcalc.data = tswcalc.data || {};

tswcalc.data.consumables = {
    pure_anima: {
        'none': {
            name: 'None',
            description: '',
            bonus: {
                stat: 'none',
                add: 0
            }
        },
        'health': {
            name: 'Santé Max',
            description: 'Ajoute 940 à la santé pendant 60 minutes. Ne se dissipe pas au moment de la mort.',
            bonus: {
                stat: 'hitpoints',
                add: 940
            }

        },
        'attack-rating': {
            name: 'Valeur d\'Attaque',
            description: 'Ajoute 240 à la valeur d\'attaque pendant 60 minutes. Ne se dissipe pas au moment de la mort.',
            bonus: {
                stat: 'attack-rating',
                add: 240
            }
        },
        'heal-rating': {
            name: 'Valeur de Guérison',
            description: 'Ajoute 240 à la valeur de guérison pendant 60 minutes. Ne se dissipe pas au moment de la mort.',
            bonus: {
                stat: 'heal-rating',
                add: 240
            }
        }
    },
    anima: {
        'none': {
            name: 'None',
            description: '',
            bonus: {
                stat: 'none',
                add: 0
            }
        },
        'critical-rating': {
            name: 'Valeur de Critique',
            description: 'Ajoute 119 à la valeur de critique pendant 60 minutes. Se dissipe au moment de la mort.',
            bonus: {
                stat: 'critical-rating',
                add: 119
            }
        },
        'critical-power': {
            name: 'Valeur de Déguâts Critiques',
            description: 'Ajoute 100 à la valeur de dégâts critiques pendant 60 minutes. Se dissipe au moment de la mort.',
            bonus: {
                stat: 'critical-power',
                add: 100
            }
        },
        'penetration-rating': {
            name: 'Valeur de  Pénetration',
            description: 'Ajoute 100 à la valeur de pénétration pendant 60 minutes. Se dissipe au moment de la mort.',
            bonus: {
                stat: 'penetration-rating',
                add: 100
            }
        },
        'hit-rating': {
            name: 'Valeur de toucher',
            description: 'Ajoute 100 à la valeur de toucher pendant 60 minutes. Se dissipe au moment de la mort.',
            bonus: {
                stat: 'hit-rating',
                add: 100
            }
        },
        'block-rating': {
            name: 'Valeur de Parade',
            description: 'Ajoute 100 à la valeur de parade pendant 60 minutes. Se dissipe au moment de la mort.',
            bonus: {
                stat: 'block-rating',
                add: 100
            }
        },
        'defense-rating': {
            name: 'Valeur de Défense',
            description: 'Ajoute 100 à la valeur de défense pendant 60 minutes. Se dissipe au moment de la mort.',
            bonus: {
                stat: 'defense-rating',
                add: 100
            }
        },
        'evade-rating': {
            name: 'Valeur d\'Evitement',
            description: 'Ajoute 110 à la valeur d\'évitement pendant 60 minutes. Se dissipe au moment de la mort.',
            bonus: {
                stat: 'evade-rating',
                add: 110
            }
        },
        'physical-protection': {
            name: 'Valeur de Protection Physique',
            description: 'Ajoute 66 à la valeur de protection physique pendant 60 minutes. Se dissipe au moment de la mort.',
            bonus: {
                stat: 'physical-protection',
                add: 66
            }
        },
        'magical-protection': {
            name: 'Valeur de Protection Magique',
            description: 'Ajoute 100 à la valeur de protection magique pendant 60 minutes. Se dissipe au moment de la mort.',
            bonus: {
                stat: 'magical-protection',
                add: 100
            }
        }
    }
};