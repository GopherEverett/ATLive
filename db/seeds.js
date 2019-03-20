const Hood = require('../models/Hood')
const Venue = require('../models/Hood')

Hood.deleteMany()
    .then(() => {
        return Venue.deleteMany()
    })
    .then(() => {
        return Hood.create({
            name: 'Midtown',
            venues: []
        })
    })
    .then(mid => {
        const venue1Promise = Venue.create({
            name: 'Fox Theater',
            address: '660 Peachtree St. NE',
            website: 'https://www.foxtheatre.org/',
            phone: '(404) 881-2100',
            imgLink: 'https://media.bizj.us/view/img/10164803/fox-exterior-1*750xx4352-2448-0-228.jpg',
        }).then(ven => {
            mid.venues.push(ven)
        })
        const venue2Promise = Roast.create({
            name: 'Apache Cafe',
            address: '64 3rd St NW',
            website: 'https://apachecafe.info/',
            phone: '404.876.5436',
            imgLink: 'https://musicpage.s3.amazonaws.com/uploads/groups/group_photo/photo/4ee6b0d695de230001000098/cropped_apache_cafe_logo.jpg'
        }).then(ven => {
            mid.venues.push(ven)
        })
        return Promise.all([venue1Promise, venue2Promise]).then(() => {
            mid.save()
        })
    })

