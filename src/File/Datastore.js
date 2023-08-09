import {useState,createContext} from "react";

export const Store=createContext();
const Datastore = (props)=>{
    const [data,setData]=useState([
        {
       id:1,
       Heading:"Bawaal under fire for ‘trivial’ portrayal",
       image:"https://www.livemint.com/lm-img/img/2023/07/28/600x338/Bawaal-stars-Janhvi-Kapoor-and-Varun-Dhawan_1690506964442_1690506981305.jpg",
       description:'Bawaal under fire for ‘trivial’ portrayal',
       date:"Travel/August 5 2023",
       name:"Amith K",
       fulldescription:"The Bollywood film Bawaal is facing criticism for its portrayal of the Holocaust, with a Jewish organisation, the Simon Wiesenthal Center, urging Amazon Prime to remove the film from its platform. The organisation contends that the movie trivialises the suffering and systematic murder of millions The Bollywood film Bawaal is facing criticism for its portrayal of the Holocaust, with a Jewish organisation, the Simon Wiesenthal Center, urging Amazon Prime to remove the film from its platform. The organisation contends that the movie trivialises the suffering and systematic murder of millions The Bollywood film Bawaal is facing criticism for its portrayal of the Holocaust, with a Jewish organisation, the Simon Wiesenthal Center, urging Amazon Prime to remove the film from its platform. The organisation contends that the movie trivialises the suffering and systematic murder of millions",
       cat:"Bollywood"
    },
    {
        id:2,
        Heading:'Akshay had made his entry into Bollywood with the 1991...',
        image:'https://c.saavncdn.com/artists/Akshay_Kumar_003_20230228120453_500x500.jpg',
        description:'Although Akshay had made his entry into Bollywood with the 1991 film Saugandh',
        date:"Travel/August 5 2023",
        name:"Amith K",
        fulldescription:`Rajiv Hari Om Bhatia (born 9 September 1967),[4] known professionally as Akshay Kumar , is an Indian-born naturalised Canadian actor and film producer who works in Hindi cinema. In over 30 years of acting, Kumar has appeared in over 100 films and has won several awards, including two National Film Awards and two Filmfare Awards. He received the Padma Shri, India's fourth-highest civilian honour, from the Government of India in 2009. Kumar is one of the most prolific actors in Indian cinema.[5][6] Forbes included Kumar in their lists of both highest-paid celebrities and highest-paid actors in the world from 2015 to 2020.`,
        cat:"Bollywood"
     },
     {
        id:3,
        Heading:' Rocky Aur Rani Kii Prem Kahaani box',
        image:"https://images.indianexpress.com/2023/07/rocky-aur-rani-box-office.jpg?w=640",
        description:'Director Karan Johar’s Rocky Aur Rani Kii Prem Kahaani debuted in theatres on Friday...',
        date:"Travel/August 5 2023",
        name:"Amith K",
        fulldescription:"New Delhi: Ranveer Singh and Alia Bhatt's Rocky Aur Rani Kii Prem Kahaani was released on July 28. The Karan Johar film has been receiving much love from fans. Now, as per a tweet by trade analyst Taran Adarsh, the film “packs an impressive number in Week 1.” He added that Rocky Aur Rani Kii Prem Kahaani collected ₹ 73.33 crore in the first week at the box office. Taran Adarsh wrote, “Rocky Aur Rani Kii Prem Kahaani packs an impressive number in Week 1…The solid trending at metros should ensure a strong Weekend 2… Friday ₹ 11.10 cr, Saturday ₹ 16.05 cr, Sunday ₹ 18.75 cr, Monday ₹ 7.02 cr, Tuesday ₹ 7.30 cr, Wednesday ₹ 6.90 cr, Thursday ₹ 6.21 cr. Total: ₹ 73.33 cr. #India biz.”",
        cat:"Bollywood"
     },
     {
        id:4,
        Heading:'Popular Bollywood actor headed for divorce',
        image:"https://cdn.123telugu.com/content/wp-content/uploads/2023/07/fareed.jpg",
        description:'Fardeen Khan is one actor that needs no introduction. He is the son of the legendary...',
        date:"Travel/August 5 2023",
        name:"Amith K",
        fulldescription:`Fardeen Khan is one actor that needs no introduction. He is the son of the legendary actor Feroz Khan and made his debut with a bang in 1998 with the film Prem Agan which was a good hit at the box office.
        In 2005, he married Natasha Madhvani, the daughter of legendary heroine Mumtaz. Well, 18 years later, news has come out from Bollywood that the star couple is headed for a divorce.
        He has lost all the weight and looks fab now.`,
        cat:"Bollywood"
     },
     {
        id:5,
        Heading:'Sara Ali Khan and Saif Ali Khan come together ',
        image:"https://www.hindustantimes.com/ht-img/img/2023/07/30/550x309/sara_1690732554477_1690732554795.jpg",
        description:"Sara Ali Khan and Saif Ali Khan starred in an ad for the first time as a cop and a convict respectively. Watch video inside.ayed a convict.",
        date:"Travel/August 5 2023",
        name:"Amith K",
        fulldescription:`ather-daughter duo Saif Ali Khan and Sara Ali Khan will be seen sharing screen space soon.
        If you are wondering that they have signed a film, then you must control your excitement. The two will be seen in an ad together.
        Actor Brijendra Kala recently took to Instagram and shared pictures from the sets of a shoot.
        One of the images shows Sara and Saif posing with Brijendra Kala.`,
        cat:"Bollywood"
     },
     {
      id:6,
      Heading:"Pathaan is a 2023 Indian Hindi-language",
      image:"https://upload.wikimedia.org/wikipedia/en/c/c3/Pathaan_film_poster.jpg",
      description:"Pathaan is a 2023 Indian Hindi-language action thriller film directed by Siddharth Anand and written by Shridhar Raghavan and Abbas Tyrewala, ...",
      date:"Travel/August 5 2023",
      name:"Amith K",
      fulldescription:`Bollywood Badshah, Shah Rukh Khan dropped a major surprise on his fans as he officially announced the release date of his highly anticipated film 'Pathaan'.
      Joined by co-stars Deepika Padukone and John Abraham, the actor shared a video announcing that the action film has been locked and loaded for a January 25, 2023 release.
      "I know it’s late… But remember the date… Pathaan time starts now… See you in cinemas on 25th January 2023," SRK wrote as he booked his movie date with his fans.`,
      cat:'Bollywood',
     },
     {
      id:7,
      Heading:"Amitabh begins shooting for Kaun Banega Crorepati 15",
      image:"https://assets.gqindia.com/photos/62f223ac0d4e31701fb885af/16:9/pass/Here%E2%80%99s-how-much-money-Amitabh-Bachchan-has-charged-for-each-season-of-KBC-over-the-years.jpg",
      description:"took to his blog to share some photos from the set of the game show and said that his opening of the show, where he runs.",
      date:"Travel/August 5 2023",
      name:"Amith K",
      fulldescription:`Megastar Amitabh Bachchan is back to shooting for the game show, Kaun Banega Crorepati 15. The popular television host shared new photos on social media which prove he is as committed to his work as ever.
      Big B shared a series of tweets on Sunday (July 23) in which he first announced that he has begun shooting for KBCand followed it by posting a picture wherein he is seen looking in the mirror, all dressed up.`,
      cat:"Bollywood"

     },
     {
      id:8,
      Heading:"Naseeruddin Shah on bitter truth of film industry",
      image:"https://images.indianexpress.com/2023/07/Naseeruddin-Shah.jpg?w=640",
      description:"They have spent their entire life in a dark room to entertain and need to be applauded, actor Naseeruddin Shah said at an event to honour three projectionists",
      date:"Travel/August 5 2023",
      name:"Amith K",
      fulldescription:"They have spent their entire life in a dark room to entertain and need to be applauded, actor Naseeruddin Shah said at an event to honour three projectionistsThey have spent their entire life in a dark room to entertain and need to be applauded, actor Naseeruddin Shah said at an event to honour three projectionistsThey have spent their entire life in a dark room to entertain and need to be applauded, actor Naseeruddin Shah said at an event to honour three projectionistsThey have spent their entire life in a dark room to entertain and need to be applauded, actor Naseeruddin Shah said at an event to honour three projectionists",
      cat:"Bollywood"

     },
     {
      id:9,
      Heading:"In an old interview clip, actor Aamir Khan",
      image:"https://images.indianexpress.com/2023/07/aamir-6.jpg?w=640",
      description:"Ever since its release, Christopher Nolan’s Oppenheimer is generating tremendous buzz in India. The film is touted to be among the best by the auteur ",
      date:"Travel/August 5 2023",
      name:"Amith K",
      fulldescription:"Ever since its release, Christopher Nolan’s Oppenheimer is generating tremendous buzz in India. The film is touted to be among the best by the auteur Ever since its release, Christopher Nolan’s Oppenheimer is generating tremendous buzz in India. The film is touted to be among the best by the auteur Ever since its release, Christopher Nolan’s Oppenheimer is generating tremendous buzz in India. The film is touted to be among the best by the auteur",
      cat:"Bollywood",
     },
     {
      id:10,
      Heading:"Shabana Azmi recalls chaotic shoot with Rajesh Khanna",
      image:"https://images.indianexpress.com/2023/07/rajesh-khanna-shabana-azmi.jpg?w=640",
      description:"Speaking about the major differences between working on a Hollywood project and an Indian project, actor Shabana Azmi recalled a story about a film...",
      date:"Travel/August 5 2023",
      name:"Amith K",
      fulldescription:"Speaking about the major differences between working on a Hollywood project and an Indian project, actor Shabana Azmi recalled a story about a film Speaking about the major differences between working on a Hollywood project and an Indian project, actor Shabana Azmi recalled a story about a film  Hollywood project and an Indian project, actor Shabana Azmi recalled a story about a film ",
      cat:"Bollywood",
     },{
      id:11,
      Heading:"Anil Kapoor says his Bollywood colleagues",
      image:"https://images.indianexpress.com/2023/07/anil-3.jpg?w=640",
      description:"Anil spoke about always looking forward to Tom’s films, and revealed that some of his Bollywood colleagues...",
      date:"Travel/August 5 2023",
      name:"Amith K",
      fulldescription:`Talking about Tom, Anil said in an interview with Film Companion, “I’m looking forward to Christopher Nolan’s (Oppenheimer) — I always look forward to all his films. I look forward to Tom Cruise’s films, the kind of action he’s done. These are the people whom I really look up to.”
        He added, “I was very fortunate when I did (Ghost Protocol), and when I spoke to my then colleagues, they said ‘Nahi nahi yaar, woh baat nahi hai.’ I said, ‘Pata chalega aapko.’ Now everybody’s a fan after Top Gun: Maverick.”`,
      cat:"Bollywood",
     },
     {
      id:12,
      Heading:"Anurag Kashyap confesses watching Rocky Aur Rani Kii Prem Kahaani",
      image:"https://stat4.bollywoodhungama.in/wp-content/uploads/2023/07/Anurag_Kashyap_RRKPK_KJo-346x260.jpeg",
      description:"Renowned filmmaker Anurag Kashyap has joined the chorus of praise for Karan Johar's latest directorial venture",
      date:"Travel/August 5 2023",
      name:"Amith K",
      fulldescription:`Renowned filmmaker Anurag Kashyap has joined the chorus of praise for Karan Johar's latest directorial venture, Rocky Aur Rani Kii Prem Kahaani, starring Alia Bhatt and Ranveer Singh. The romantic comedy has struck a chord with audiences and critics alike, with Anurag Kashyap sharing his thoughts on the film through an enthusiastic review on Instagram.`,
      cat:"Bollywood",
     },
     {
      id:13,
      Heading:"The Xpose",
      image:"https://i.ytimg.com/vi/l_ig8zvxMWA/maxresdefault.jpg",
      description:"This is a dramatic chain of events in the most glamorous ,swinging era of Hindi films... the 1960s. It was a decade when film stars tasted success and carried their larger than life screen image...",
      date:"Travel/August 5 2023",
      name:"Amith K",
      fulldescription:`This is a dramatic chain of events in the most glamorous ,swinging era of Hindi films... the 1960s. It was a decade when film stars tasted success and carried their larger than life screen image This is a dramatic chain of events in the most glamorous ,swinging era of Hindi films... the 1960s. It was a decade when film stars tasted success and carried their larger than life screen image This is a dramatic chain of events in the most glamorous ,swinging era of Hindi films... the 1960s. It was a decade when film stars tasted success and carried their larger than life screen image`,
      cat:"Bollywood", 
   },
     {
      id:14,
      Heading:"HRITHIK ROSHAN",
      image:"https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSQ9mqxisnWgLZXvvoEx-H7R5CxEl6H1yyikOWfow7-878RnF43fpxz3HAP1ewTQHUtKNKSamqzxLtcT9Y",
      description:"NewsAboutHrithik Roshan, He is often cited as one of most attractive male celebrities in the country. Hrithik has won six Filmfare awards. ",
      date:"Travel/August 5 2023",
      name:"Rohith",
      fulldescription:`Hrithik Roshan is an Indian actor who works in Hindi cinema. He has portrayed a variety of characters and is known for his dancing skills. One of the highest-paid actors in India, he has won many awards, including six Filmfare Awards, of which four were for Best Actor. Starting from 2012, he has appeared in Forbes India's Celebrity 100 several times based on his income and popularity.

      Roshan has frequently collaborated with his father, Rakesh Roshan. He made brief appearances as a child actor in several films in the 1980s and later worked as an assistant director on four of his father's films. His first leading role was in the box-office success Kaho Naa... Pyaar Hai (2000), for which he received several awards. Performances in the 2000 terrorism drama Fiza and the 2001 ensemble family drama Kabhi Khushi Kabhie Gham... consolidated his reputation but were followed by several poorly received films.`,
      cat:"Bollywood",
     },
     {
      id:15,
      Heading:"Avatar: The Way of Water",
      image:
      "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_.jpg",
      description:"'Avatar: The Way of Water' begins to tell the story of the Sully family  the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
      date:"Travel/August 5 2023",
      name:"Rohith",
      fulldescription:`Avatar (Extended Cut) - The following scenes have been added:
      The biggest addition is the alternate opening, where Jake describes life on Earth. At a bar with his friend, he gets into a fight with a man who was hitting his girlfriend. However, the doorman throws him out into a back alley. Two men then approach him to inform him of his twin brother Tommy's`,
      cat:"Hollywood"
     },
     {
      id:16,
      Heading:"Tom Holland Recalled Being Cast ",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ0ncw0lyZIAyFf1Njks3MsskMONMYxtqCvw&usqp=CAU",
      description:"Recalling his reaction to reading the news – and that of his family, Tom Holland continued, My poor dog Tessa was terrified. And Harry who is pretty savvy with technology and stuff’",
      date:"Travel/August 5 2023",
      name:"Rohith",
      fulldescription:`Recalling his reaction to reading the news – and that of his family, Tom Holland continued, My poor dog Tessa was terrified. And Harry who is pretty savvy with technology and stuff Recalling his reaction to reading the news – and that of his family, Tom Holland continued, My poor dog Tessa was terrified. And Harry who is pretty savvy with technology and stuffRecalling his reaction to reading the news – and that of his family, Tom Holland continued, My poor dog Tessa was terrified.`,
      cat:"Hollywood",
     },
     {
      id:17,
      Heading:"Captain Jack Sparrow",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3BZ3Z8-kWrKLPPpeZNx4OJCs7P32WKNp-Cg&usqp=CAU",
      description:"Captain Jack Sparrow is a fictional character and the main protagonist of the Pirates of the Caribbean film series. The character was created by screenwriters Ted Elliott and Terry Rossio",
      date:"Travel/August 5 2023",
      name:"Rohith",
      fulldescription:`Captain Jack Sparrow is a fictional character and the main protagonist of the Pirates of the Caribbean film series. The character was created by screenwriters Ted Elliott and Terry Rossio and is portrayed by Johnny Depp Captain Jack Sparrow is a fictional character and the main protagonist of the Pirates of the Caribbean film series. The character was created by screenwriters Ted Elliott and Terry Rossio and is portrayed by Johnny Depp Captain Jack Sparrow is a fictional character`,
      cat:"Hollywood",
     },
     {
      id:18,
      Heading:"Leonardo Wilhelm DiCaprio ",
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Leonardo_Dicaprio_Cannes_2019.jpg/220px-Leonardo_Dicaprio_Cannes_2019.jpg",
      description:"Born in Los Angeles, DiCaprio began his career in the late 1980s by appearing in television commercials. In the early 1990s, he had recurring roles in various television shows,",
      date:"Travel/August 5 2023",
      name:"Rohith",
      fulldescription:`Born in Los Angeles, DiCaprio began his career in the late 1980s by appearing in television commercials. In the early 1990s, he had recurring roles in various television shows, such as the sitcom Parenthood Born in Los Angeles, DiCaprio began his career in the late 1980s by appearing in television commercials. In the early 1990s, he had recurring roles in various television shows, such as the sitcom Parenthood`,
      cat:"Hollywood",
     },{
      id:19,
      Heading:"Priyanka Chopra Jonas’ new Hollywood film Love Again ",
      image:"https://images.livemint.com/img/2023/02/22/1600x900/A-poster-from-the-movie---Mint-_1677042204897.png",
      description:"Priyanka Chopra Jonas’ new Hollywood film Love Again will release in cinemas on 12 May.Strouse also stars Sam Heughan, Russell Tovey.",
      date:"Travel/August 5 2023",
      name:"Rohith",
      fulldescription:`Priyanka Chopra Jonas’ new Hollywood film Love Again will release in cinemas on 12 May.Strouse also stars Sam Heughan, Russell Tovey Priyanka Chopra Jonas’ new Hollywood film Love Again will release in cinemas on 12 May.Strouse also stars Sam Heughan, Russell ToveyPriyanka Chopra Jonas’ new Hollywood film Love Again will release in cinemas on 12 May.Strouse also stars Sam Heughan, Russell Tovey`,
      cat:"Hollywood",
     },
     {
      id:20,
      Heading:"Fast X becomes Hollywood’s first film to join the Rs 100 crore club",
      image:"https://static.toiimg.com/thumb/msid-100627160,imgsize-54856,width-400,resizemode-4/100627160.jpg",
      description:"Fast X, the tenth installment in the Fast and Furious Diesel, has earned impressive Rs.105 crore in its first ten days in India, making it the first Hollywood",
      date:"Travel/August 5 2023",
      name:"Rohith",
      fulldescription:`Fast X, the tenth installment in the Fast and Furious Diesel, has earned impressive Rs.105 crore in its first ten days in India, making it the first Hollywood Fast X, the tenth installment in the Fast and Furious Diesel, has earned impressive Rs.105 crore in its first ten days in India, making it the first Hollywood Fast X, the tenth installment in the Fast and Furious Diesel, has earned impressive Rs.105 crore in its first ten days in India, making it the first Hollywood`,
      cat:"Hollywood"
     },
     {
      id:21,
      Heading:"Thor: Love and Thunder",
      image:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRHXV5at6mvLIF852fvIA5jeUi6bVYs8swuCPUCRWdRxWp0sr5Q",
      description:"Thor: Love and Thunder is a 2022 superhero film, based on the Marvel Comics superhero of the same name. The film is a sequel to Thor, Thor: The Dark World, Thor: Ragnarok ",
      date:"Travel/August 5 2023",
      name:"Rohith",
      fulldescription:`Thor: Love and Thunder is a 2022 superhero film, based on the Marvel Comics superhero of the same name. The film is a sequel to Thor, Thor: The Dark World, Thor: Ragnarok Thor: Love and Thunder is a 2022 superhero film, based on the Marvel Comics superhero of the same name. The film is a sequel to Thor, Thor: The Dark World, Thor: Ragnarok`,
      cat:"Hollywood"
     },
     {
      id:22,
      Heading:"James Cameron: Diving Deep, Dredging Up Titanic",
      image:"https://media.npr.org/assets/img/2012/03/29/titanic_custom-fc6a03aedd8e562d780ecf9b9a8a947d4dcbf163-s800-c85.webp",
      description:"They don't call it the Challenger Deep for nothing,Cameron tells NPR's Renee Montagne. Because deep places that, together, form the last unexplored frontier on our planet.",
      date:"Travel/August 5 2023",
      name:"Rohith",
      fulldescription:`They don't call it the Challenger Deep for nothing,Cameron tells NPR's Renee Montagne. Because deep places that, together, form the last unexplored frontier on our planet They don't call it the Challenger Deep for nothing,Cameron tells NPR's Renee Montagne. Because deep places that, together, form the last unexplored frontier on our planet`,
      cat:"Hollywood"
     },
     {
      id:23,
      Heading:"Every Daniel Craig James Bond movie",
      image:"https://images.immediate.co.uk/production/volatile/sites/3/2021/09/daniel-craig-007.jpg-303a730.png?quality=90&webp=true&resize=620,414",
      description:"Daniel Craig's era as James Bond 007 is officially  while we wait for news on who his replacement might be, we can reflect on his tenure as Ian Fleming's spy, which radically changed ",
      date:"Travel/August 5 2023",
      name:"Rohith",
      fulldescription:`Daniel Craig's era as James Bond 007 is officially  while we wait for news on who his replacement might be, we can reflect on his tenure as Ian Fleming's spy, which radically changed the face of one of cinema s Daniel Craig's era as James Bond 007 is officially  while we wait for news on who his replacement might be, we can reflect on his tenure as Ian Fleming's spy, which radically changed the face of one of cinema's` ,
      cat:"Hollywood"
      },
      {
         id:24,
         Heading:"Avengers Endgame",
         image:"https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/04/13/Pictures/_a6416322-5dea-11e9-aa5c-e004eddcd1be.jpg",
         description:"Marvel screened 20 minutes of footage from the hotly anticipated Avengers: Endgame, and early reactions claim that the film will be ‘mind-blowing’ and a ‘tearjerker’",
         date:"Travel/August 5 2023",
      name:"Rohith",
      fulldescription:`Marvel screened 20 minutes of footage from the hotly anticipated Avengers: Endgame, and early reactions claim that the film will be ‘mind-blowing’ and a ‘tearjerker’", Cinematographers relish going out of the studios and setting their cameras in the great unknowns, capturing the wild haunting beauty of the outdoors.in essence, becomes the central character in many such films Cinematographers relish going out of the studios and setting their cameras in the great unknowns, capturing the wild haunting beauty of the outdoors.in essence, becomes the central character in many such films Cinematographers relish going out of the studios and setting their cameras in the great unknowns, capturing the wild haunting beauty of the outdoors.in essence, becomes the central character in many such films`,
         cat:"Hollywood"
        },  {
         id:25,
         Heading:"Hollow Man",
         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYzWWzlIfEpxredPKWlQBRXUPOv68HAh2efD2M3KEIgfx3NU7m",
         description:"Hollow Man is a 2000 American science fiction horror film directed by Paul Verhoeven, written by Andrew W. Marlowe, and starring Elisabeth Shue, Josh Brolin, Kim Dickens, Joey Slotnick and William Devane.",
         date:"Travel/August 5 2023",
      name:"Rohith",
      fulldescription:`Hollow Man is a 2000 American science fiction horror film directed by Paul Verhoeven, written by Andrew W. Marlowe, and starring Elisabeth Shue, Josh Brolin, Kim Dickens, Joey Slotnick and William Devane Cinematographers relish going out of the studios and setting their cameras in the great unknowns, capturing the wild haunting beauty of the outdoors.in essence, becomes the central character in many such films Cinematographers relish going out of the studios and setting their cameras in the great unknowns, capturing the wild haunting beauty of the outdoors.in essence, becomes the central character in many such films Cinematographers relish going out of the studios and setting their cameras in the great unknowns, capturing the wild haunting beauty of the outdoors.in essence, becomes the central character in many such films `,
         cat:"Hollywood"
        },
        {
         id:26,
         Heading:"The Way Back (2010)",
         image:"https://filmfare.wwmindia.com/content/2021/jun/tophollywoodadventuresmoviesoflastdecade91623856201.jpg",
         description:"Cinematographers relish going out of the studios and setting their cameras in the great unknowns, capturing the wild haunting beauty of the outdoors.in essence, becomes the central character in many such films",
         date:"Travel/August 5 2023",
      name:"Rohith",
      fulldescription:`Cinematographers relish going out of the studios and setting their cameras in the great unknowns, capturing the wild haunting beauty of the outdoors.in essence, becomes the central character in many such films Cinematographers relish going out of the studios and setting their cameras in the great unknowns, capturing the wild haunting beauty of the outdoors.in essence, becomes the central character in many such films Cinematographers relish going out of the studios and setting their cameras in the great unknowns, capturing the wild haunting beauty of the outdoors.in essence, becomes the central character in many such films`,
         cat:"Hollywood"
        },
        {
         id:27,
         Heading:"Artificial Intelligence",
         image:"https://cdn.pixabay.com/photo/2019/08/06/22/48/artificial-intelligence-4389372_1280.jpg",
        description:"The digital revolution has already changed how people live, work, and communicate. And it’s only just getting started. But the same technologies that have the potential to help billions of people live happier",
         name:'Rahul',
         date:"Travel/August 5 2023",
         fulldescription:`At its simplest form, artificial intelligence is a field, which combines computer science and robust datasets, to enable problem-solving. It also encompasses sub-fields of machine learning and deep learning, which are frequently mentioned in conjunction with artificial intelligence.`,
        cat:"Technology"  
      },
      {
         id:28,
         Heading:"5G Technology",
         image:"https://etimg.etb2bimg.com/photo/93418165.cms",
         description:"5G is the 5th generation mobile network. It is a new global wireless standard after 1G, 2G, 3G, and 4G networks. 5G enables a new kind of network that is designed to connect and everything together and devices.",      
         name:'Rahul',
         date:"Travel/August 5 2023",
         fulldescription:`As with previous cellular networks, 5G technology uses cell sites that transmit data through radio waves. Cell sites connect to networks with wireless technology or wired connection. 5G technology works by modifying how data is encoded, significantly increasing the number of usable airwaves for carriers.`,
         cat:"Technology"
      },
      {
         id:29,
         Heading:"Android",
         image:"https://lh3.googleusercontent.com/4yQOckYdJ8SuT3y47yfCaTEFZFmG7QISg0fflgONoS8j33sXDzi9WDAg2R9U8tJn68PVE88t1SxFjghAfIT6zOZnAZy-L1rJJ3GENA=w794-rw-e365-v1",
         description:"When a device goes from just working to actually making life easier, Android is behind it. It’s the reason that your GPS avoids traffic, your watch can text and your Assistant can answer questions.",
         name:'Rahul',
         date:"Travel/August 5 2023",
         fulldescription:`When a device goes from just working to actually making life easier, Android is behind it. It’s the reason that your GPS avoids traffic, your watch can text and your Assistant can answer questions. Choices for work, gaming, 5G streaming and anything else. There are over 24,000 phones and tablets that run on Android globally. So no matter what you’re looking for, there’s something for you.`,
         cat:"Technology",
      },
      {
         id:30,
         Heading:"Cyber security ",
         image:"https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3liZXJzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
         description:"Computer security, cyber security, digital security or information technology security is the protection of computer systems and networks from attack by malicious actors that may result in unauthorized .",
         name:'Rahul',
         date:"Travel/August 5 2023",
         fulldescription:`
         Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users via ransomware; or interrupting normal business processes.
         
         Implementing effective cybersecurity measures is particularly challenging today because there are more devices than people, and attackers are becoming more innovative.`,
         cat:"Technology"
      },
      {
         id:31,
         Heading:"IOS Technology",
         image:"https://images.livemint.com/img/2020/06/22/600x338/iOS_1592850862096_1592850869734.jpg",
         description:"iOS is a mobile operating system developed by Apple Inc. exclusively for its hardware. It is the operating system that powers many of the company's mobile devices, including the iPhone;",
         name:'Rahul',
         date:"Travel/August 5 2023",
         fulldescription:`iOS is a mobile operating system developed by Apple Inc. exclusively for its hardware. It is the operating system that powers many of the company's mobile devices, including the iPhone; the term also includes the system software for iPads iOS is a mobile operating system developed by Apple Inc. exclusively for its hardware. It is the operating system that powers many of the company's mobile devices, including the iPhone; the term also includes the system software for iPads`,
         cat:"Technology"
      },  
      {
         id:32,
         Heading:"computer",
         image:"https://cdn.britannica.com/61/74061-050-47B62C0E/computer-peripherals-images-laser-printer-inkjet-layout.jpg",
         description:"A computer is a machine that can store and process information. Most computers rely on a binary system, which uses two variables, 0 and 1, to complete tasks such as storing data, calculating algorithms",
         name:'Rahul',
         date:"Travel/August 5 2023",
         fulldescription:` A computer is a machine that can store and process information. Most computers rely on a binary system, which uses two variables, 0 and 1, to complete tasks such as storing data, calculating algorithms, and displaying information A computer is a machine that can store and process information. Most computers rely on a binary system, which uses two variables, 0 and 1, to complete tasks such as storing data, calculating algorithms, and displaying information`,
         cat:"Technology"
      },
      {
         id:33,
         Heading:"Smart Watch",
         image:"https://m.media-amazon.com/images/I/6152wS4BKxL._AC_UF1000,1000_QL80_.jpg",
         description:"MUKTRICS Smart Watch for Men Women Boys Girls, Touch Screen Bluetooth SmartWatch for Android iOS Phones Wrist Phone Watch with Heart Rate, BP, SpO2 Monitor & All Sports Activity Tracker - Black",
         name:'Rahul',
         date:"Travel/August 5 2023",
         fulldescription:`MUKTRICS Smart Watch for Men Women Boys Girls, Touch Screen Bluetooth SmartWatch for Android iOS Phones Wrist Phone Watch with Heart Rate, BP, SpO2 Monitor & All Sports Activity Tracker - Black MUKTRICS Smart Watch for Men Women Boys Girls, Touch Screen Bluetooth SmartWatch for Android iOS Phones Wrist Phone Watch with Heart Rate, BP, SpO2 Monitor & All Sports Activity Tracker - Black`,
         cat:"Technology"
      },
      {
         id:34,
         Heading:"Computing",
         image:"https://www.techrepublic.com/wp-content/uploads/2022/09/tr-cloud-computing-use-cases.jpeg",
         description:"Computing is any goal-oriented activity requiring, benefiting from, or creating computing machinery. It includes the study and experimentation of algorithmic processes",
         name:'Rahul',
         date:"Travel/August 5 2023",
         fulldescription:`Computing is any goal-oriented activity requiring, benefiting from, or creating computing machinery. It includes the study and experimentation of algorithmic processes, and development of both hardware and software Computing is any goal-oriented activity requiring, benefiting from, or creating computing machinery. It includes the study and experimentation of algorithmic processes, and development of both hardware and software`,
         cat:"Technology"
      },
      {
         id:35,
         Heading:"Sensor technology",
         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLghT9l_Y730o5zT5SU8VoihrGTXoTYeUCokCGLAhCdak3Rv2yxAIHVzPSai5CtrLco0U&usqp=CAU",
         description:"Sensors, sometimes referred to as ”transducers,” help us interact with the world around us through an electrical or a mechanical device. The technology measures or detects some property of the environment",
         name:'Rahul',
         date:"Travel/August 5 2023",
         fulldescription:`Sensors, sometimes referred to as ”transducers,” help us interact with the world around us through an electrical or a mechanical device. The technology measures or detects some property of the environment or changes to that property over time Sensors, sometimes referred to as ”transducers,” help us interact with the world around us through an electrical or a mechanical device. The technology measures or detects some property of the environment or changes to that property over time`,
         cat:"Technology"
      },
      {
         id:36,
         Heading:"Voice technology",
         image:"https://d25r4xglgvpsos.cloudfront.net/wp/wp-content/uploads/2020/03/26005140/thumbnail-a7a4c7ce50d1c80ee996ba8fd0a974bb-1568x1045.jpeg",
         description:"Voice or speaker recognition technology is the ability of a digital device to receive, recognize, and interpret spoken commands---and carry out such commands using sound input as an interface.",
         name:'Rahul',
         date:"Travel/August 5 2023",
         fulldescription:`Voice or speaker recognition technology is the ability of a digital device to receive, recognize, and interpret spoken commands---and carry out such commands using sound input as an interface. Voice or speaker recognition technology is the ability of a digital device to receive, recognize, and interpret spoken commands---and carry out such commands using sound input as an interface.`,
         cat:"Technology"
      },
      {
         id:37,
         Heading:"Television (TV)",
         image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Cptvdisplay.jpg/300px-Cptvdisplay.jpg",
         description:"Television (TV) is a telecommunication medium for transmitting moving images and sound. The term can refer to a television set.",
         name:'Rahul',
         date:"Travel/August 5 2023",
         fulldescription:`Television (TV) is a telecommunication medium for transmitting moving images and sound. The term can refer to a television set, or the medium of television transmission Television (TV) is a telecommunication medium for transmitting moving images and sound. The term can refer to a television set, or the medium of television transmission`,
         cat:"Technology"
      },
      {
         id:38,
         Heading:"scanner technology",
         image:"https://recfaces.com/wp-content/uploads/2020/12/snimok-ekrana-2020-12-03-150858-830x500.png",
         description:"The basic principle of a scanner is to analyze an image and process it in some way. Image and text capture (optical character recognition or OCR) allow you to save information to a file on your computer.",
         name:'Rahul',
         date:"Travel/August 5 2023",
         fulldescription:`The basic principle of a scanner is to analyze an image and process it in some way. Image and text capture (optical character recognition or OCR) allow you to save information to a file on your computer. print it out or use it on your Web page The basic principle of a scanner is to analyze an image and process it in some way. Image and text capture (optical character recognition or OCR) allow you to save information to a file on your computer. print it out or use it on your Web page`,
         cat:"Technology"
      },
      {
         id:39,
         Heading:"Easy cheese, leek and potato puff pie",
         image:"https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/easy_cheese_leek_and_98782_16x9.jpg",
         description:"All the flavours of leek and potato soup but with added cheese and pastry! This leek, potato and cheese puff pie is the perfect budget winter warmer.",
         name:'Rahul',
         date:"Travel/August 5 2023",
         fulldescription:`All the flavours of leek and potato soup but with added cheese and pastry! This leek, potato and cheese puff pie is the perfect budget winter warmer All the flavours of leek and potato soup but with added cheese and pastry! This leek, potato and cheese puff pie is the perfect budget winter warmer`,
         cat:"Food",
      },
      {
         id:40,
         Heading:" Kung Pao Chicken",
         image:"https://images.chinahighlights.com/allpicture/2019/11/31acb7b302ec4b48b17443ed_cut_750x400_39.webp",
         description:"Kung Pao Chicken is a famous Sichuan-style specialty, popular with both Chinese and foreigners. The major ingredients are diced chicken, dried chili, cucumber, and fried peanuts (or cashews).",
         name:'Rahul',
         date:"Travel/August 5 2023",
         fulldescription:`Kung Pao Chicken is a famous Sichuan-style specialty, popular with both Chinese and foreigners. The major ingredients are diced chicken, dried chili, cucumber, and fried peanuts (or cashews) Kung Pao Chicken is a famous Sichuan-style specialty, popular with both Chinese and foreigners. The major ingredients are diced chicken, dried chili, cucumber, and fried peanuts`,
         cat:"Food"
      },
      {
         id:41,
         Heading:"Puri",
         image:"https://cdn.tasteatlas.com/Images/Dishes/e49c7f42cade4444a148ede9c47d0a46.jpg?mw=1300",
         description:"Puri is an unleavened, fried Indian bread made with water, finer or coarser wheat flour, and occasionally cumin seeds. The dough is rolled into flat round shapes and fried in copious amounts of vegetable oil or ghee",
         name:'Smith',
         date:"Travel/August 5 2023",
         fulldescription:`Puri is an unleavened, fried Indian bread made with water, finer or coarser wheat flour, and occasionally cumin seeds. The dough is rolled into flat round shapes and fried in copious amounts of vegetable oil or ghee Puri is an unleavened, fried Indian bread made with water, finer or coarser wheat flour, and occasionally cumin seeds. The dough is rolled into flat round shapes and fried in copious amounts of vegetable oil or ghee`,
         cat:"Food"
      },
      {
         id:42,
         Heading:"Pulihora",
         image:"https://cdn.tasteatlas.com//images/dishes/2a00c116070d46a7a8dd91c0e086f76d.jpg?w=905&h=510",
         description:"Pulihora is a popular south Indian dish that can easily be found in the states of Andhra Pradesh, Tamil Nadu, and Karnataka. It consists of rice,coriander, ginger, and green chiles. Additionally, ",
         name:'Smith',
         date:"Travel/August 5 2023",
         fulldescription:`Pulihora is a popular south Indian dish that can easily be found in the states of Andhra Pradesh, Tamil Nadu, and Karnataka. It consists of rice, turmeric, tamarind, curry leaves, coriander, ginger, and green chiles. Additionally, Pulihora is a popular south Indian dish that can easily be found in the states of Andhra Pradesh, Tamil Nadu, and Karnataka. It consists of rice, turmeric, tamarind, curry leaves, coriander, ginger, and green chiles. Additionally,`,
         cat:"Food"
      },
      {
         id:43,
         Heading:"Malai",
         image:"https://cdn.tasteatlas.com//images/ingredients/1ff8aa710cb6476491816569c639f99d.jpg?w=905&h=510",
         description:"he thick, mild malai is a homemade dairy product made with heated milk which is refrigerated until a thick layer of fat is created on top. Yellow in color, malai is usually skimmed off by hands, stored in containers,",
         name:'Smith',
         date:"Travel/August 5 2023",
         fulldescription:`the thick, mild malai is a homemade dairy product made with heated milk which is refrigerated until a thick layer of fat is created on top. Yellow in color, malai is usually skimmed off by hands, stored in containers,he thick, mild malai is a homemade dairy product made with heated milk which is refrigerated until a thick layer of fat is created on top. Yellow in color, malai is usually skimmed off by hands, stored in containers,`,
         cat:"Food"
      },
      {
         id:44,
         Heading:"Shahi paneer",
         image:"https://cdn.tasteatlas.com//images/dishes/ceff65c140064d6285fc3814534a349b.jpg?w=905&h=510",
         description:"Originating from India's Moghul cuisine, shahi paneer is a cheese curry that is prepared with paneer cheese, onions, almond paste, and a rich, spicy tomato-cream sauce.such as naan, roti, or puri.",
         name:'Smith',
         date:"Travel/August 5 2023",
         fulldescription:`A traditional southern Indian dish known as masala dosa is popular throughout the country, made from a batter of soaked rice and lentils that is baked into a thin pancake and usually stuffed with potatoes, onions, and mustard seeds. A traditional southern Indian dish known as masala dosa is popular throughout the country, made from a batter of soaked rice and lentils that is baked into a thin pancake and usually stuffed with potatoes, onions, and mustard seeds.`,
         cat:"Food"
      },
      {
         id:45,
         Heading:"Masala dosa",
         image:"https://cdn.tasteatlas.com//Images/Dishes/ba7bab747c7e41769dbc895a84626a23.jpg?w=905&h=510",
         description:"A traditional southern Indian dish known as masala dosa is popular throughout the country, made from a batter of soaked rice and lentils that is baked into a thin pancake and  onions, and mustard seeds.",
         name:'Smith',
         date:"Travel/August 5 2023",
         fulldescription:`A traditional southern Indian dish known as masala dosa is popular throughout the country, made from a batter of soaked rice and lentils that is baked into a thin pancake and usually stuffed with potatoes, onions, and mustard seeds A traditional southern Indian dish known as masala dosa is popular throughout the country, made from a batter of soaked rice and lentils that is baked into a thin pancake and usually stuffed with potatoes, onions, and mustard seeds`,
         cat:"Food"
      },
      {
         id:46,
         Heading:"Gulam Jamun",
         image:"https://cdn.tasteatlas.com//Images/Dishes/23fba80da08c46ceba5a99a5b1f1f200.jpg?w=905&h=510",
         description:"Gulab jamun is a dessert based on milk solids that are kneaded into a dough, shaped into balls, and deep-fried in ghee. The balls then get soaked in a sugary concoction flavored with saffron, green cardamom, and rose water",
         name:'Smith',
         date:"Travel/August 5 2023",
         fulldescription:`Gulab jamun is a dessert based on milk solids that are kneaded into a dough, shaped into balls, and deep-fried in ghee. The balls then get soaked in a sugary concoction flavored with saffron, green cardamom, and rose water`,
         cat:"Food"
      },
      {
         id:47,
         Heading:"Pav bhaji",
         image:"https://cdn.tasteatlas.com//Images/Dishes/f77866f0f5474fc0b41d316f885edcc3.jpg?w=905&h=510",
         description:"Pav bhaji is a popular street snack originating from the Indian state of Maharashtra. It consists of a vegetable curry that is typically served with a soft bread roll known as pav.",
         name:'Smith',
         date:"Travel/August 5 2023",
         fulldescription:`Pav bhaji is a popular street snack originating from the Indian state of Maharashtra. It consists of a vegetable curry that is typically served with a soft bread roll known as pav Pav bhaji is a popular street snack originating from the Indian state of Maharashtra. It consists of a vegetable curry that is typically served with a soft bread roll known as pav`,
         cat:"Food"
      },
      {
         id:48,
         Heading:"Palak paneer",
         image:"https://cdn.tasteatlas.com//Images/Dishes/4ecba690cc0b47809d43d70c7a6b3a39.jpg?w=905&h=510",
         description:"Palak paneer has roots in the Punjabi region, but there are also other variations of the dish throughout India. It is a highly nutritious meal that can be consumed either for breakfast.",
         name:'Smith',
         date:"Travel/August 5 2023",
         fulldescription:`palak paneer recipe | how to make palak paneer recipe restaurant style with detailed photo and video recipe. a healthy green coloured paneer recipe prepared mainly from the thick paste of spinach puree. basically, the easy palak paneer recipe hails from the popular north indian cuisine or punjabi cuisine and is typically served with tandoor roti & naan. there are many ways to prepare it, but this a restaurant-style spinach cottage cheese curry.`,
         cat:"Food"
      },
      {
         id:49,
         Heading:"Rajma",
         image:"https://cdn.tasteatlas.com//Images/Dishes/25ab742da91d49b18b1a7f8a9a3f1b18.jpg?w=905&h=510",
         description:"Rajma is one of the most popular vegetarian dishes of North India. It consists of red kidney beans which are stewed in a rich gravy combined with numerous spices. The dish is usually prepared for festivities and special occasions",
         name:'Smith',
         date:"Travel/August 5 2023",
         fulldescription:`This Rajma recipe is a lightly spiced, creamy and delicious Punjabi style curry made with protein rich kidney beans, aromatics like onions, ginger, garlic, fragrant spices and tangy tomatoes. My Mom’s recipe for restaurant-style Punjabi Rajma Masala is a staple in our home, and after you try it I’ll bet it becomes one at yours, too. I also share a homestyle one pot Rajma Masala (which many of our readers had requested) that will remind you about the comforting and satisfying Rajma Curry (or Rajma Chawal) made in Punjabi homes.`,
         cat:"Food"
      },
      {
         id:50,
         Heading:"Upma",
         image:"https://cdn.tasteatlas.com//Images/Dishes/e4e3193046014f5bb9d0b6dc838d0f53.jpg?w=905&h=510",
         description:"Upma is a wholesome Indian dish made with dry semolina or rice flour, cooked into a thick porridge. Traditionally served hot for breakfast, its taste is slightly bland, so various nuts, beans",
         name:'Smith',
         date:"Travel/August 5 2023",
         fulldescription:`Upma is a wholesome Indian dish made with dry semolina or rice flour, cooked into a thick porridge. Traditionally served hot for breakfast, its taste is slightly bland, so various nuts, beans Upma is a popular South Indian breakfast made with cream of wheat or semolina flour (called rava or suji locally), veggies, spices and herbs. The upma recipe I share here is adapted from my mom’s recipe and continues to be a favorite in my home. The ingredients used to flavor the rava upma (also called suji ka upma) give it a deliciously satisfying taste that will make this dish one of your new preferred go-to breakfasts.`,
         cat:"Food"
      },
      {
         id:51,
         Heading:"Pizza Recipe",
         image:"https://assets.tmecosys.com/image/upload/t_web600x528/img/recipe/ras/Assets/62c59f6365a259b03da440de3973f201/Derivates/668cba6648888c61d249c0a5d9651157a4ce3793.jpg",
         description:"Be it any occasion, we all love to eat pizza at home. But, learn all about making a delicious pizza at home with this easy recipe that will take you through detailed steps some tips that will guide you in preparing a Pizza at home",
         name:'Smith',
         date:"Travel/August 5 2023",
         fulldescription:`Preheat the oven at 180 degree Celsius. Now, is the time to make the pizza base when the dough is ready. Dust the space a little using dry flour and take a large amount of the pizza dough. Using a rolling pin, roll this dough into a nice circular base. (Note: Make sure that the circular base is even at all ends.) Once you have made the base, use a fork and prick the base with it so that the base doesn't rise and gets baked nicely. Put it into the preheated oven and bake it 10 minutes. Now, your pizza base is ready.`,
         cat:"Food"
      },
      {
         id:52,
         Heading:"Big Mac MCDONALD'S",
         image:"https://fastfood.theringer.com/img/items/16.jpg",
         description:"HALEY O'SHAUGHNESSY: What does it take to really make a relationship work? Love, of course. Compassion. Trust. Sesame seed buns. Kindness. Two hamburgers.",
         name:'Smith',
         date:"Travel/August 5 2023",
         fulldescription:`Take two 100% beef patties sourced from farmers in regions such as the Taranaki and Waikato. Add the delicious combination of crisp iceberg lettuce, melting cheese, onions, and tasty pickles, all framed between a toasted sesame seed bun. And for the grand finale a generous helping of our famous Big Mac special sauce!`,
         cat:"Food"
      },
      {
         id:53,
         Heading:"Honey BBQ Chikken Sandwitch",
         image:"https://fastfood.theringer.com/img/items/37.jpg",
         description:"It’s the James Harden of fast-food sandwiches. The dynamic blend of flavors and textures makes for a sublime experience. It's so damn good the nutrition  much like Harden's defense.",
         name:'Smith',
         date:"Travel/August 5 2023",
         fulldescription:`This recipe starts with my Homemade BBQ Sauce which can easily be turned into a Honey bbq sauce! Before I get into it, if you want to make a simplified version like the sauce I use for my wings, simply melt some butter, stir in your favourite bbq sauce, ketchup and honey. Allow the sauce to simmer for 20 minutes before using.  homemade bbq sauce is made exactly the same way, except we use more ingredients since it’s completely from scratch! Check out my homemade bbq sauce post`,
         cat:"Food",

      },
      {
         id:54,
         Heading:"strategies for safer home workouts",
         image:"https://domf5oio6qrcr.cloudfront.net/medialibrary/14092/bdd3ebd3-3b59-4b8c-ba96-b088e0954c6d.jpg",
         description:"Home workouts often lead to injuries, such as muscle strains and falls. To reduce injury risks, people should choose a well-ventilated, clutter-free space with a level floor",
         name:'Smith',
         date:"Travel/August 5 2023",
         fulldescription:`Home workouts often lead to injuries, such as muscle strains and falls. To reduce injury risks, people should choose a well-ventilated, clutter-free space with a level floor and plenty of room to move Home workouts often lead to injuries, such as muscle strains and falls. To reduce injury risks, people should choose a well-ventilated, clutter-free space with a level floor and plenty of room to move`,
         cat:"Fitness"
      },
      {
         id:55,
         Heading:"Swinging with kettlebells",
         image:"https://domf5oio6qrcr.cloudfront.net/medialibrary/14119/9234d464-594b-468a-b9ac-c37e16c6af3a.jpg",
         description:"Stand with your feet shoulder width apart and knees slightly bent. Hold a kettlebell with both hands and an overhand grip, arms extended down in front of you so the kettlebell hangs between your legs.",
         name:'Smith',
         date:"Travel/August 5 2023",
         fulldescription:`Stand with your feet shoulder width apart and knees slightly bent. Hold a kettlebell with both hands and an overhand grip, arms extended down in front of you so the kettlebell hangs between your legs Stand with your feet shoulder width apart and knees slightly bent. Hold a kettlebell with both hands and an overhand grip, arms extended down in front of you so the kettlebell hangs between your legs`,
         cat:"Fitness"
      },
      {
         id:56,
         Heading:"Move of the month: Pull-down",
         image:"https://domf5oio6qrcr.cloudfront.net/medialibrary/14100/64cdb23e-cd49-4a5f-a378-4136cbf6a115.jpg",
         description:"Using stretchy bands  can be a good way to ease into strength training. Pull-downs target the muscles of the middle and lower back and the front of the upper arms.",
         name:'Smith',
         date:"Travel/August 5 2023",
         fulldescription:`Over a count of three, bend your elbows slightly and pull your hands down, stretching the band, to about shoulder level. Hold for one count, then over a count of three, slowly raise your arms back overhead to the starting position, resisting the pull of the band. Do eight to 12 repetitions, rest for 30 to 90 seconds, and repeat that set once or twice.`,
         cat:"Fitness"
      },
      {
         id:57,
         Heading:"Move of the month: Stationary lunge",
         image:"https://domf5oio6qrcr.cloudfront.net/medialibrary/13975/5c3ad907-bfa4-4fa7-a9fa-899fb8c644b8.jpg",
         description:"Lunges, which strengthen the entire lower body, are a good example of a functional exercise. These exercises mimic everyday actions thereby improving physical functioning throughout",
         name:'Smith',
         date:"Travel/August 5 2023",
         fulldescription:`Lunges, which strengthen your entire lower body, are a good example of a functional exercise. These exercises mimic everyday actions (such as picking something up off the floor), thereby improving your physical functioning throughout the day.
            Starting position: Stand up straight with your right foot one to two feet in front of your left foot, hands on your hips. Shift your weight forward and lift your left heel off the floor..`,
         cat:"Fitness"
      },
      {
         id:58,
         Heading:"Take a step back",
         image:"https://domf5oio6qrcr.cloudfront.net/medialibrary/13980/6d869393-eab6-47c6-ad01-cf67b706bfba.jpg",
         description:"Lunges are one of the best exercises for improving leg strength and balance. Most of the time, they're done with a forward motion, but don't neglect the power of going backward.",
         name:'Smith',
         date:"Travel/August 5 2023",
         fulldescription:`Strokes are the fifth leading cause of death in the United States and a significant cause of disability. Learn from Harvard Medical School experts how to understand your odds for having a stroke, evidence-based steps that can lower your risk, how to recognize the early signs of a stroke, and what to do to get rapid, brain-saving treatment.`,
         cat:"Fitness"
      },
      {
         id:59,
         Heading:"Build better biceps",
         image:"https://domf5oio6qrcr.cloudfront.net/medialibrary/13919/944b8686-9cfc-4de2-958a-8599b33beddb.jpg",
         description:"Stand tall with your feet about shoulder-width apart, chest lifted, and shoulders back and down. Hold dumbbells down at your sides with your palms facing inward.",
         name:'Smith',
         date:"Travel/August 5 2023",
         fulldescription:`So be sure to include, in addition to shoulder-width grip curls, some wider-than-shoulder-width-grip curls to place extra stress on the short head, and close-grip curls to place extra stress on the long head. This will help to bring up the size of each biceps head, which together will create larger biceps.`,
         cat:"Fitness"
      },
      {
         id:60,
         Heading:"Does running cause arthritis?",
         image:"https://domf5oio6qrcr.cloudfront.net/medialibrary/13852/2434e7c0-3082-4e6a-9556-3e36e6f38b4c.jpg",
         description:"It's easy to blame running when a person who runs regularly develops arthritis. But that blame may be misguided. Here's a look at the latest research on the topic.",
         name:'Smith',
         date:"Travel/August 5 2023",
         fulldescription:`Knee and joint pain may be common complaints among runners, but chances are slim that arthritis is the culprit. In fact, multiple studies have shown that regular running strengthens the joints and actually protects against development of osteoarthritis later in life.`,
         cat:"Fitness"
      },
      {
         id:61,
         Heading:"Opposite arm and leg raise",
         image:"https://domf5oio6qrcr.cloudfront.net/medialibrary/13595/d63f5c21-4aa1-4743-8124-15a17b6cd48c.jpg",
         description:"The core muscles include those of the abdomen, lower back, front of hips, and spine. Many popular sports such as cycling, golf, tennis, and swimming depend on a stable, flexible core.",
         name:'Smith',
         date:"Travel/August 5 2023",
         fulldescription:`Movement: Extend your left leg off the floor behind you while reaching out in front of you with your right arm. Keeping your hips and shoulders squared, try to bring the extended leg and arm parallel to the floor. Hold. Return to the starting position, then repeat with your right leg and left arm.`,
         cat:"Fitness"
      },
      {
         id:62,
         Heading:"Adding yoga to aerobic exercise may help lower high blood pressure",
         image:"https://domf5oio6qrcr.cloudfront.net/medialibrary/13573/66c60680-18fd-46dd-af5e-15774aaefc2f.jpg",
         description:"yoga to regular exercise sessions can help people lower their high blood pressure more than just doing exercise and basic muscle stretching.",
         name:'Smith',
         date:"Travel/August 5 2023",
         fulldescription:`Adding yoga to a regular workout routine helps lower systolic blood pressure and resting heart rate in adults with hypertension, a new study found. Researchers discovered that 15 minutes of yoga before cardio, compared to 15 minutes of regular stretching, provided cardiovascular benefits.`,
         cat:"Fitness"
      },
      {
         id:63,
         Heading:"Age and muscle loss",
         image:"http://content.health.harvard.edu/wp-content/uploads/2023/02/560b6d05-cb1d-4889-ad14-e51f4ea45b82.jpg",
         description:"As the years pass, muscle mass in the body generally shrinks, and strength and power decline. The pro­cess begins earlier than you might think.",
         name:'Smith',
         date:"Travel/August 5 2023",
         fulldescription:`You gradually begin losing muscle mass and strength sometime in your 30s or 40s. This process picks up between the ages of 65 and 80. Rates vary, but you may lose as much as 8% of your muscle mass each decade. Everyone loses muscle mass over time, but people with sarcopenia lose it more quickly.`,
         cat:"Fitness"
      },
      {
         id:64,
         Heading:"Arm curls",
         image:"https://domf5oio6qrcr.cloudfront.net/medialibrary/13457/0d1070c6-3348-48e0-839e-1302b5cf9d92.jpg",
         description:"Slowly bend your elbows, lifting the dumbbells toward your shoulders. Hold. Slowly lower the dumbbells, straightening your arms back to the starting position. Repeat this movement to complete 8 to 12 curls.",
         name:'Smith',
         date:"Travel/August 5 2023",
         fulldescription:`For this biceps-building exercise, you’ll need a pair of dumbbells. But if you don’t have any, you can use cans of soup, full plastic water bottles, or any other easy-to-hold item that feels like an appropriate weight. Start with fairly light weights — maybe 2 to 5 pounds each. As you get stronger, switch to heavier weights.your chest lifted, and your shoulders back and down. Hold a dumbbell in each hand with your arms down at your sides and your palms facing forward.`,
         cat:"Fitness"
      },
      {
         id:65,
         Heading:"Reclaim your pre-pandemic function",
         image:"https://domf5oio6qrcr.cloudfront.net/medialibrary/13380/66b57c7d-1556-4d75-8948-920997860358.jpg",
         description:"We’ve moved past some of the immediate effects of the pandemic, with many people returning to their previous physical activities.",
         name:'Smith',
         date:"Travel/August 5 2023",
         fulldescription:`We’ve moved past some of the immediate effects of the pandemic, with many people returning to their previous physical activities. But some people are finding they’re a bit worse off functionally than they were before COVID-19 changed the world. "Some people say they can’t walk as far as they used to, or they’re now afraid to step on uneven surfaces. They feel they’ve suddenly aged," says Janice McGrail, a physical therapist at Harvard-affiliated Spaulding Rehabilitation Hospital`,
         cat:"Fitness"
      },
      {
         id:66,
         Heading:"Stronger body, healthier heart",
         image:"http://content.health.harvard.edu/wp-content/uploads/2023/07/e9ec22b0-a1ee-4abf-989c-1f482ab680fb.jpg",
         description:"if you're in the habit of doing a 20- to 30-minute brisk walk or other moderate exercise most days of the week, that's fantastic.",
         name:'Smith',
         date:"Travel/August 5 2023",
         fulldescription:`A combination of aerobic workouts (which, depending on your fitness level, can include walking, running, swimming, and other vigorous heart-pumping exercise) and strength training (weight lifting, resistance training) is considered best for heart health.`,
         cat:"Fitness"
      },
      {
         id:68,
         Heading:"Koi... Mil Gaya",
         image:"https://static.toiimg.com/thumb/msid-102335118,imgsize-31508,width-400,resizemode-4/102335118.jpg",
         description:"Rohit, a youth with a mental disability, befriends an alien. When the police learn about the alien, they try to capture it while Rohit tries his best to protect his new friend.",
         name:'Smith',
         date:"Travel/August 5 2023",
         fulldescription:`“I am very excited after 20 years. This film that I gave so much of myself to is releasing again in theaters. This sounds absolutely crazy to me. Didn't even know that was possible and I knew it was possible they can, it feels like a release of a new film. So this is going to be a lot of fun. PVR has been incredible. They are re-releasing the film in many theaters, please do enjoy this film. I hope you enjoy it. I will still say that it has aged pretty, pretty well. Although this film I could have done much`,
         cat:"Bollywood"
      },
      {
         id:68,
         Heading:"The 300 Spartans",
         image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT8kJsApNu8s71yHtLsa5u-lglosO3h6yssffl4sX46E20M8JHV",
         description:"The Battle of Thermopylae was fought in 480 BC between the Achaemenid Persian Empire under Xerxes I and an alliance of Greek city-states led by Sparta under Leonidas I. Lasting over the course of three days",
         name:'Smith',
         date:"Travel/August 5 2023",
         fulldescription:`The 300 Spartans is an account of the 480 B.C. Battle of Thermopylae, in which the Spartan King Leonidis, played by Richard Egan, led a remarkably small number of men to victory over an invading Persian army led by evil King Xerxes that was about 20 times as large. This spectacular conflict gave the Grecians enough time to organize a force to ultimately repel the Persians, and thus change the course of Western civilization. The film was directed by Rudolph Mate and stars Richard Egan and Ralph Richardson.`,
         cat:"Hollywood"
      },
      {
         id:69,
         Heading:"Planet of the Apes",
         image:"https://resizing.flixster.com/thVHnFB_2er7s1EK6sEND49GubQ=/206x305/v2/https://flxt.tmsimg.com/assets/p2095_p_v12_ak.jpg",
         description:"Beneath the Planet of the Apes is a 1970 American science fiction film directed by Ted Post from a screenplay by Paul Dehn, based on a story by Dehn and Mort Abrahams. The film is the sequel to Planet of the Apes.",
         name:'Smith',
         date:"Travel/August 5 2023",
         fulldescription:`Beneath the Planet of the Apes is a 1970 American science fiction film directed by Ted Post from a screenplay by Paul Dehn, based on a story by Dehn and Mort Abrahams. The film is the sequel to Planet of the Apes.Beneath the Planet of the Apes is a 1970 American science fiction film directed by Ted Post from a screenplay by Paul Dehn, based on a story by Dehn and Mort Abrahams. The film is the sequel to Planet of the Apes.`,
         cat:"Hollywood",
      },
      {
         id:70,
         Heading:"Batman",
         image:"http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQavfSfyOVYO54wkFq1cV0yguHfZSUiYwmiGvtdlDDav_wKZYsyy9NPBk952R2zXNSs",
         description:"Batman is a superhero appearing in American comic books published by DC Comics. The character was created by artist Bob Kane and writer Bill Finger, and debuted in the 27th issue of the comic book",
         name:'Smith',
         date:"Travel/August 5 2023",
         fulldescription:`One day I called Bill and said, 'I have a new character called the Bat-Man and I've made some crude, elementary sketches I'd like you to look at.' He came over and I showed him the drawings. At the time, I only had a small domino mask, like the one Robin later wore, on Batman's face. Bill said, 'Why not make him look more like a bat and put a hood on him, and take the eyeballs out and just put slits for eyes to make him look more mysterious?' At this point, the Bat-Man wore a red union suit; the wings, trunks, and mask were black. I thought that red and black would be a good combination. Bill said that the costume was too bright: 'Color it dark grey to make it look more ominous.' The cape looked like two stiff bat wings attached to his arms. As Bill and I talked, we realized that these wings would get cumbersome when Bat-Man was in action and changed them into a cape, scalloped to look like bat wings when he was fighting or swinging down on a rope. Also, he didn't have any gloves on, and we added them so that he wouldn't leave fingerprints.`,
         cat:"Hollywood"
      }
]);

  return (
    <Store.Provider value={[data, setData]}>
     {props.children}
    </Store.Provider>
  )
}


export default Datastore