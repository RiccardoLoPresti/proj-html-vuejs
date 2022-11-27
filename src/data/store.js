import {reactive} from 'vue';

export const store = reactive({
    jumbo:[
        {
            cat:'photography',
            text:'how to take better concert pictures in 30 seconds',
            img:'../src/assets/images/blog-46.jpg',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore provident velit blanditiis exercitationem nisi fugit! Rem eaque atque numquam minima ut adipisci tempore debitis vero non, obcaecati nobis odit?'
        },
        {
            cat:'gadgets',
            text:'gadgets that make your smartphone even smarter',
            img:'../src/assets/images/blog-47.jpg',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore provident velit blanditiis exercitationem nisi fugit! Rem eaque atque numquam minima ut adipisci tempore debitis vero non, obcaecati nobis odit?'
        },
        {
            cat:'travel',
            text:'20 top-rated tourist attractions ins manhattan',
            img:'../src/assets/images/blog-48.jpg',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore provident velit blanditiis exercitationem nisi fugit! Rem eaque atque numquam minima ut adipisci tempore debitis vero non, obcaecati nobis odit?'
        },
        {
            cat:'lifestyle',
            text:'the best way to ride a motorcycle',
            img:'../src/assets/images/blog-49.jpg',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore provident velit blanditiis exercitationem nisi fugit! Rem eaque atque numquam minima ut adipisci tempore debitis vero non, obcaecati nobis odit?'
        },
        {
            cat:'travel',
            text:'5 fun things to do at beach',
            img:'../src/assets/images/blog-50.jpg',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore provident velit blanditiis exercitationem nisi fugit! Rem eaque atque numquam minima ut adipisci tempore debitis vero non, obcaecati nobis odit?'
        },
        {
            cat:'recipes',
            text:'amazingly fresh fruit and herb drinks for summer',
            img:'../src/assets/images/blog-51.jpg',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore provident velit blanditiis exercitationem nisi fugit! Rem eaque atque numquam minima ut adipisci tempore debitis vero non, obcaecati nobis odit?'
        }
    ],
    info:[
        {
            cat:'recipes',
            text:'tips to help you quickly prepare your lunch',
            img:'../src/assets/images/blog-66.jpg',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore provident velit blanditiis exercitationem nisi fugit! Rem eaque atque numquam minima ut adipisci tempore debitis vero non, obcaecati nobis odit?'
        },
    ],
    mainPosts:[
        {
            text:'how to make friends as a grown-up',
            img:['../src/assets/images/blog-54.jpg'],
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore provident velit blanditiis exercitationem nisi fugit! Rem eaque atque numquam minima ut adipisci tempore debitis vero non, obcaecati nobis odit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore provident velit blanditiis exercitationem nisi fugit! Rem eaque atque numquam minima ut adipisci tempore debitis vero non, obcaecati nobis odit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore provident velit blanditiis exercitationem nisi fugit! Rem eaque atque numquam minima ut adipisci tempore debitis vero non, obcaecati nobis odit?',
            author: {
                name:'john doe',
                href:'#'
            },
            cat:{
                badge:'lifestyle, travel',
                href:'#'
            },
            comments:{
                number:'12 comments',
                href:'#'
            },
            date:{
                day:12,
                month: 'jan'
            }
        },
        {
            text:'simple ways to have a pretty face',
            img:['../src/assets/images/blog-55-big.jpg'],
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore provident velit blanditiis exercitationem nisi fugit! Rem eaque atque numquam minima ut adipisci tempore debitis vero non, obcaecati nobis odit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore provident velit blanditiis exercitationem nisi fugit! Rem eaque atque numquam minima ut adipisci tempore debitis vero non, obcaecati nobis odit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore provident velit blanditiis exercitationem nisi fugit! Rem eaque atque numquam minima ut adipisci tempore debitis vero non, obcaecati nobis odit?',
            author: {
                name:'john doe',
                href:'#'
            },
            cat:{
                badge:'photography, travel',
                href:'#'
            },
            comments:{
                number:'12 comments',
                href:'#'
            },
            date:{
                day:12,
                month: 'jan'
            }
        },
        {
            text:'ranking the greatest player in basketball',
            img:['../src/assets/images/blog-56-big.jpg'],
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore provident velit blanditiis exercitationem nisi fugit! Rem eaque atque numquam minima ut adipisci tempore debitis vero non, obcaecati nobis odit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore provident velit blanditiis exercitationem nisi fugit! Rem eaque atque numquam minima ut adipisci tempore debitis vero non, obcaecati nobis odit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore provident velit blanditiis exercitationem nisi fugit! Rem eaque atque numquam minima ut adipisci tempore debitis vero non, obcaecati nobis odit?',
            author: {
                name:'john doe',
                href:'#'
            },
            cat:{
                badge:'sport, business',
                href:'#'
            },
            comments:{
                number:'12 comments',
                href:'#'
            },
            date:{
                day:12,
                month: 'jan'
            }
        },
        {
            text:'top camper trailer towing tips',
            img:['../src/assets/images/blog-58-big.jpg'],
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore provident velit blanditiis exercitationem nisi fugit! Rem eaque atque numquam minima ut adipisci tempore debitis vero non, obcaecati nobis odit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore provident velit blanditiis exercitationem nisi fugit! Rem eaque atque numquam minima ut adipisci tempore debitis vero non, obcaecati nobis odit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore provident velit blanditiis exercitationem nisi fugit! Rem eaque atque numquam minima ut adipisci tempore debitis vero non, obcaecati nobis odit?',
            author: {
                name:'john doe',
                href:'#'
            },
            cat:{
                badge:'travel, lifestyle',
                href:'#'
            },
            comments:{
                number:'12 comments',
                href:'#'
            },
            date:{
                day:12,
                month: 'jan'
            }
        },
        {
            text:'10 best travel tips after 5 years traveling the word',
            img:[
                '../src/assets/images/blog-13.jpg',
                '../src/assets/images/blog-16.jpg',
                '../src/assets/images/blog-20.jpg',
                '../src/assets/images/blog-23.jpg',
                '../src/assets/images/blog-29.jpg',
                '../src/assets/images/blog-40.jpg',
            ],
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore provident velit blanditiis exercitationem nisi fugit! Rem eaque atque numquam minima ut adipisci tempore debitis vero non, obcaecati nobis odit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore provident velit blanditiis exercitationem nisi fugit! Rem eaque atque numquam minima ut adipisci tempore debitis vero non, obcaecati nobis odit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore provident velit blanditiis exercitationem nisi fugit! Rem eaque atque numquam minima ut adipisci tempore debitis vero non, obcaecati nobis odit?',
            author: {
                name:'john doe',
                href:'#'
            },
            cat:{
                badge:'travel, lifestyle',
                href:'#'
            },
            comments:{
                number:'12 comments',
                href:'#'
            },
            date:{
                day:8,
                month: 'jan'
            }
        }
    ],
    insta:[
        {
            img:[
                '../src/assets/images/29739607_2020680068220520_4509928046932787200_n.jpg',
                '../src/assets/images/30087804_253872848488989_8792603541668626432_n.jpg',
                '../src/assets/images/29415620_196477127626244_3250318472361541632_n.jpg',
                '../src/assets/images/30078414_1274410412703843_8290935809419247616_n.jpg',
                '../src/assets/images/30077195_2066750973610181_3733150062893596672_n.jpg',
                '../src/assets/images/29415304_166583630713703_1032667922171953152_n.jpg',
            ]
        }
    ]
})