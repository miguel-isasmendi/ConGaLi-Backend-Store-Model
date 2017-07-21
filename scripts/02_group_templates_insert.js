db.getCollection('templategroups').insert([
{
    name: 'Still lifes',
    templates: db.getCollection('cellstemplatedefinitions').find({name:{ $in: ['Block', 'Beehive', 'Loaf', 'Boat', 'Flower'] }}).toArray(),
    inactiveSince: new Date()
}, {
    name: 'Oscillators',
    templates: db.getCollection('cellstemplatedefinitions').find({name:{ $in: ['Blinker', 'Toad', 'Beacon', 'Pulsar', 'Pentadecathlon'] }}).toArray(),
    inactiveSince: new Date()
}, {
    name: 'Spaceships',
    templates: db.getCollection('cellstemplatedefinitions').find({name:{ $in: ['Glider', 'Lightweight spaceship (LWSS)'] }}).toArray(),
    inactiveSince: new Date()
}
])