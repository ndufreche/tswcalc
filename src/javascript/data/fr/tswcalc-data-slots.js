var tswcalc = tswcalc || {};
tswcalc.data = tswcalc.data || {};

tswcalc.data.template_data = {
    slots: [{
            id_prefix: 'weapon',
            name: 'Arme principale',
            is_weapon: true,
            group: 'weapon',
            is_primary: true
        },{
            id_prefix: 'weapon2',
            name: 'Arme secondaire',
            is_weapon: true,
            group: 'weapon',
            is_primary: false
        }, {
            id_prefix: 'head',
            name: 'Talisman de Tête',
            group: 'head'
        }, {
            id_prefix: 'ring',
            name: 'Talisman de Doigt',
            group: 'major'
        }, {
            id_prefix: 'neck',
            name: 'Talisman de Cou',
            group: 'major'
        }, {
            id_prefix: 'wrist',
            name: 'Talisman de Poignet',
            group: 'major'
        }, {
            id_prefix: 'luck',
            name: 'Talisman de la Chance',
            group: 'minor'
        }, {
            id_prefix: 'waist',
            name: 'Talisman de Ceinture',
            group: 'minor'
        }, {
            id_prefix: 'occult',
            name: 'Talisman Occulte',
            group: 'minor'
        }
    ]
};