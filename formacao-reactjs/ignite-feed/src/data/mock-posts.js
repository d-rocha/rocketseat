const posts = [
    {
        id: 1,
        author: {
            avatar: 'https://github.com/d-rocha.png',
            name: 'Davi Rocha',
            role: 'Software Engineer'
        },
        content: [
            {type: 'greeting', content: 'Fala galera👋'},
            {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
            {type: 'link', content: '👉github.com/d-rocha/doctorcare'},
            {type: 'link', content: '#novoprojeto #nlw #rocketseat'}
        ],
        publishedAt: new Date('2024-11-14 08:00:00'),
    },
    {
        id: 2,
        author: {
            avatar: 'https://github.com/ldrbraga.png',
            name: 'Leandro Braga',
            role: 'Dev Flamenguista'
        },
        content: [
            {type: 'greeting', content: 'Fala galera👋'},
            {type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻'},
            {type: 'link', content: '👉github.com/ldrbraga/portifolio'},
            {type: 'link', content: '#portifolio #mengao #rocketseat'}
        ],
        publishedAt: new Date('2024-11-14 09:00:00'),
    },
    {
        id: 3,
        author: {
            avatar: 'https://github.com/ligiasalzano.png',
            name: 'Ligia Salzano',
            role: 'Full Stack Developer'
        },
        content: [
            {type: 'greeting', content: 'Fala galera👋'},
            {type: 'paragraph', content: 'Finalizei um sistema de integração de pedidos para múltiplos e-commerces. Me ajuuuuuuuuuuda 😀'},
            {type: 'link', content: '👉github.com/ligiasalzano/portifolio'},
            {type: 'link', content: '#backend #frontend #plantas #e-commerce #rocketseat'}
        ],
        publishedAt: new Date('2024-11-14 10:15:00'),
    },
    {
        id: 4,
        author: {
            avatar: 'https://github.com/macielsalzano.png',
            name: 'Maciel Salzano',
            role: 'Front-End Developer'
        },
        content: [
            {type: 'greeting', content: 'Fala galera👋'},
            {type: 'paragraph', content: 'Finalmente finalizei meu app em React Native. Foi fácil não, mas bora que bora 💪🏻'},
            {type: 'link', content: '👉github.com/macielsalzano/menudigital'},
            {type: 'link', content: '#app #frontend #reactnative #rocketseat'}
        ],
        publishedAt: new Date('2024-11-14 11:30:00'),
    }
]

export default posts;