const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _= require("lodash");
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const posts=[
  {
    title:"The Callisto Protocol: Action-Horror or Just Action?",
    para1:"The Callisto Protocol (TCP) had a lot of pre-release hype surrounding it — from originally being a part of the PUBG universe to the developer's use of mocap for its actors and actresses. At release, numerous performance issues and player-discovered problems with the design seemed to have sunk the game, similar to Scorn’s rough intro. Despite the issues, I liked Scorn and I feel the same about TCP, really enjoying the game for presenting something a bit different, though it may not be intended for the right audience.",
    para2:"The Callisto Protocol is the debut game from Striking Distance Studios, a game studio made up of ex-Dead Space and Call of Duty developers, including director Glenn Schoefield. The game is positioned as a “spiritual successor” to the original Dead Space trilogy and features a mix of brutal action combat and sci-fi survival horror.",
    para3:"The Callisto Protocol wears its inspiration on its diegetic UI as a major homage to Dead Space. When his one last big transport mission goes wrong, Jacob finds himself as a prisoner in a maximum-security prison on Callisto. This, as per the genre norm, doesn’t last long, and the prison is soon overrun with a virus turning people into ravenous mutants that he will have to shoot, bash, and fling away if he wants to get out alive.",
    para4:"From a graphical standpoint, the game looks amazing, with some impressive motion capture for the major characters. As for the gameplay, TCP is 100% on the action-horror side of horror design — from your variety of weapons and upgrades to the ever-popular stomp you can perform on enemies when they’re on the ground.", 
    
    img:"/images/tcp.jpg",
    author:"Josh Bycer",
    date:"Dec 28, 2022"
  },
  {
    title:"Prince of Persia: The Sands of Time Remake not cancelled, confirms Ubisoft " ,
    para1:"Prince of Persia: The Sands of Time Remake has been in a development limbo for quite some time. The game is in development for multiple years, and it was delayed last year by Ubisoft. The remake was originally in development at Ubisoft Mumbai and Ubisoft Pune, but the development was later shifted to Ubisoft Montreal.",
    para2:"While it is reassuring to know that Prince of Persia: The Sands of Time Remake is in active development, it’s unclear when the game will be actually released. The Sands of Time has been a fan-favourite title for several years. Fans have been waiting for the remake for several years now, and they had also pre-ordered it when the first release date was announced. It remains to be seen when Ubisoft announces the new release date of Prince of Persia: The Sands of Time Remake.",
    para3:"First announced in September 2020, Prince of Persia: The Sands of Time Remake was supposed to launch in January 2021. With pre-orders going live after the announcement, it seemed like the game will launch soon. However, the Prince of Persia remake kept getting delayed over and over again, with no new release date right now.",
    para4:"Ubisoft Montreal has given an update regarding the development of Prince of Persia: The Sands of Time Remake. The game is “not cancelled,” and it is currently in development at Ubisoft Montreal. Currently, there is no release date for Prince of Persia: The Sands of Time Remake, and players who had pre-ordered the game have been refunded. Pre-orders for the game will go live once again after a new release date is announced. Ubisoft will share more details about Prince of Persia: The Sands of Time Remake in the coming months. Ubisoft is not planning any other Prince of Persia remake right now.",    
    img:"/images/pop.jpg",
    author:"Kshiteej Naik",
    date:"November 8, 2022"
  },
  {  
    title:"Three Unannounced Silent Hill Games Are Reportedly In Development " ,
    para1:"According to an insider, there are three unannounced Silent Hill games currently in development, which isn't including the recently leaked Silent Hill: The Short Message. On Wednesday, October 19th, Konami held the SILENT HILL Transmission Livestream to discuss potential upcoming projects from the franchise. This was huge news for the gaming community because Silent Hill has been dead since the cancelation of the highly anticipated Silent Hills, the full-length game for P.T., the iconic playable trailer that never went anywhere.",
    para2:"Dusk Golem's report also backs up some job listings that were shared by Konami last month, where it explicitly said that it was looking for creators to work on Silent Hill. Dusk was also the one that shared these job listings at the time.",
    para3:"After a decade without a new Silent Hill game, Konami surprised us all back in October by revealing that it had several projects for the series in the works, including a remake of Silent Hill 2, a new game called Silent Hill f, and some more mysterious titles like Silent Hill Townfall. That already seems like the start of a series revival, but that's seemingly not all.",
    para4:"Prominent Silent Hill leaker Dusk Golem (also known as AestheticGamer1) is reporting that, in addition to everything that Konami has announced for the series so far, there are three unannounced Silent Hill games in development currently. That's not including The Short Message, which was leaked several months ago and had some key details revealed from a Taiwanese rating board yesterday.",    
    img:"/images/sl.jpg",
    author:"George Foster",
    date:"Dec 31, 2022"
  },
  {
    title:"Scorn — Hell Of A View" ,
    para1:"Scorn is an atmospheric horror game that relies on the unsettling environment and unique world of mechanical functions to tell its grotesque story. Inspired by H.R. Giger, the lengths that the experience goes to exploit that type of mutilation and body-based horror to make the player feel uncomfortable exceeds anything I’ve ever experienced in interactive media before.",
    para2:"As a first-person horror title, Scorn may not nail the typical formula, but it certainly showcases horror in its own way. Exploring the depths of this alien-world hellscape, you are mainly focused on puzzle-solving, but when the going gets tough and nightmarish creatures begin to writhe out of pulsing, intestine-like walls, Scorn also introduces gunplay that is unique in its own way, matching the intense, body-modification theme of the game. There are no real jump-scares, but the sights that you see within the game could certainly be conjured up in your nightmares.",
    para3:"These encounters feel very much like an uphill battle, and if there was anything horrific in having to dispense with these foes, it would be the difficulty of having to do so where every shot counts. If you do meet your demise, your guess is about as good as where you will end up, as the game doesn’t allow for saved games and you revert back to saved points after solving certain puzzles or entering specific areas. While this does feel quite unfair, it does put additional weight on your accuracy and I felt flustered more often than not during these combat encounters.", 
    img:"/images/scorn.jpg",
    author:"Bryan Taylor",
    date:"Dec 14, 2022"
  },
  {
    title:"Watch Dogs Legion is coming to Steam in January" ,
    para1:"Now that Assassin’s Creed Valhalla has arrived on Steam, the question is, which Ubisoft game will make the jump next? We didn’t have to wait for the answer long, because here it is: hacking-based open-world game Watch Dogs Legion is coming to Steam next month, arriving on Valve’s storefront January 26.",
    para2:"Watch Dogs Legion initially launched the month before Valhalla did, but never saw the same level of success – nor the robust post-launch content schedule Ubisoft maintained through Valhalla’s lifecycle. That’s not to say Legion didn’t get some updates: an online mode arrived earlier this year that added a new string of co-op missions and four-player tactical ops,’ and there’s a zombie-themed Legion of the Dead mode that turns it into an entirely different game. Watch Dogs Legion is a pretty bold experiment for Ubisoft’s tentpole series in that it skips having a specific named protagonist altogether. Instead, you’re any random person in London, setting out to recruit new operatives to the DedSec cause – and you can hop into the shoes of any one of these new recruits once you’ve brought them on board.",
    para3:"If you’ve recently installed one of the best graphics cards, Legion is a nice workout – you can flip on all kinds of ray-traced lighting effects to see just how far you can push your GPU, if you’re so inclined. Watch Dogs Legion doesn’t have a price listed on Steam yet, but Assassin’s Creed Valhalla arrived with a month-long 67% discount, putting it at $19.80 / £16.50 – so you’re likely to see a similar deal on Legion when it arrives.", 
    img:"/images/legion.jpg",
    author:"Bryan Taylor",
    date:"Dec 14, 2022"
  }
];

const articles=[
  {
    title:"Spider-Man 2 Out Autumn 2023 on PS5, Insomniac Games Reveals",
    para1:"Marvel's Spider-Man 2, the much-awaited sequel to 2018's web-swinging open-world odyssey, will launch in the autumn of 2023. Going by the seasons for the Global North, Spider-Man 2 will drop between September and November 2023.",
    para2:" Revealed in a post on the PlayStation Blog, the game will be exclusive to the PS5, promising a continuation of Peter Parker and Miles Morales' arc, in the next blockbuster chapter. There isn't much information on the game, but a PlayStation showcase from last year confirmed that the symbiote Venom will play a key antagonistic role. Tony Todd, who rose to prominence with the Candyman series of horror slasher films, voices the anti-hero.",
    para3:"Last year, Ryan Schneider, Head of Franchise Strategy & Studio Relations, Insomniac Games, confirmed that “much of the development team” who worked on 2018's Spider-Man is returning to produce the sequel, which includes the aforementioned Intihar and game director Ryan Smith. There's the promise of new suits and villains trying to hunt down the web-crawling duo, as the game pushes the PS5 hardware to its limits.",
    para4:"The build-up to Spider-Man 2's launch window announcement was nothing short of drama. The title was briefly available to wishlist on the UK storefront earlier this week, which hinted at an imminent announcment. The store page is now live worldwide, though. A little later, Jamie Mayer, one of the writers on the game revealed on her personal website — now, updated — that the sequel was aiming for a fall 2023 release slate. The window also aligns with the past two Spider-Man games, Spider-Man Remastered and Spider-Man: Miles Morales, both of which launched in November.",
    para5:"Spider-Man 2 won't be the only title where the game's Parker and Morales will show up. A new Spidey movie is set for 2023 in Spider-Man: Across the Spider-Verse, and a new trailer released earlier this week revealed a range of web crawlers from across multiple dimensions, including Insomniac's versions. Currently, there's no word on if they will have a prominent role to play, and if so, whether their game voice actors will reprise their roles.",
    img1:"/images/SM/post-1.jpg",
    img2:"/images/SM/post-2.jpg",
    img3:"/images/SM/post-3.jpg",
    author:"RAHUL CHETTIYAR",
    date:"DEC 16, 2022"
  },
  {
    title:"Assassin’s Creed Mirage Should Lead to a Game Set in Spain " ,
    para1:"As one of Ubisoft’s longest-standing franchises, the Assassin’s Creed series has certainly seen its fair share of shakeups throughout its 15-year tenure. Next year, the franchise is returning to its roots with Assassin’s Creed Mirage, reported as an expansion for Assassin’s Creed Valhalla and then reworked into a full game. Assassin’s Creed Mirage retreads old ground, returning to the same era of Assassins as Altair’s time, but in a new light. Hopefully, MIrage sets the stage for similar sequels.",    
    para2:"Assassin’s Creed Mirage tells the origin story of Basim, an Assassin first encountered during Eivor’s journey in Valhalla 20 years after the events of Mirage. Mirage takes place in Baghdad during the 9th century when the Levantine Assassins were at the height of power and operated as a unified Brotherhood instead of the scattered cells struggling to stay afloat in later games. ",
    para3:"Mirage’s announcement shows that the time is right to start retreading old ground in the series. Fans have been receptive to Mirage’s first trailer, and many are happy to see the series shed its RPG gameplay for at least one future entry. What’s more, Assassin’s Creed has always had a treasure trove of lore that is impossible to get through in only one game, so the fact that Ubisoft is going back and digging deeper into some of its most iconic time periods is great for fans of the franchise who love learning about this type of stuff. But there is no reason Ubisoft should only make one of these “homage games” and stop there when there is so much lore still left to explore, particularly in the Assassin’s Creed 2 era and how it relates to Spain.",
    para4:"For a country that played such a significant role in the world throughout the events of Assassin’s Creed 2 and Brotherhood, Spain has undoubtedly received the short end of the stick as far as mainline entry games are concerned. For example, Ezio briefly had ties with the Spanish Brotherhood of Assassins during the events of Assassin’s Creed 2: Discovery, but it is still very much an Ezio game. And while the Assassin’s Creed movie did take place in Spain, Ubisoft has mostly buried the project and claimed the game’s lore overwrites that of the film.",
    para5:"Spain’s importance could also make it one of the best places for an Assassin’s Creed game set later in the timeline and into the modern era. Further down the line, the Spanish Brotherhood of Assassins found itself active during the Spanish Civil War of the 1930s and was host to one of the most extraordinary Assassins in the whole series: Ignacio Cardona, a Spanish Anarchist and Republican. During the Spanish Civil War, the Spanish Brotherhood and Ignacio banded together to locate the Koh-i-Noor, a powerful Piece of Eden capable of finding every other missing Piece of Eden in existence. While Ignacio’s story has only been explored in the Assassin’s Creed: Uprising comics, he could take the franchise in an exciting new direction while fitting into the homage off-shoot mold that Assassin’s Creed Mirage is forming.",
    img1:"/images/AC/post-1.jpg",
    img2:"/images/AC/post-2.jpg",
    img3:"/images/AC/post-3.jpg",
    author:"ADRIAN MORALES",
    date:"DEC 21, 2022"
  },
  {
    title:"The Last of Us Part I arrives on PC March 3, 2023",
    para1:"Prepare to endure and survive, PC players. We’re so excited to reveal The Last of Us Part I will be released on PC via Steam and the Epic Games Store March 3, 2023. ",
    para2:"We were so honored by the reception of The Last of Us Part I when it debuted on the PS5 earlier this year, and we can’t wait to welcome new and returning players on Joel and Ellie’s unforgettable adventure, newly optimized and enhanced for PC. We’ll have more information about The Last of Us Part I’s PC specs and features closer to release, so please look forward to more ahead of the March launch.",
    para3:"“The development of The Last of Us Part I on PC provided us with an opportunity to open our game in new ways.” The Last of Us Part I Game Director Matthew Gallant said .",
    para4:"The whole Naughty Dog team is so ecstatic PC gamers will soon experience the story that has captivated audiences for nearly a decade. It’s been a long time coming, and we so appreciate your enthusiasm and passion for the opportunity to play one of our most beloved titles. Thank you, and if you are embarking on this journey for the first time or re-living it again, remember: Look for the light.",
    para5:"Secondly, Sony likes to space out its PC releases in general. Rather than dropping them all at once or a few at a time, the Japanese powerhouse decides to give each game time to breathe and perform on its own merits. Based on this and what’s yet to launch from PlayStation on PC, it’s safe to say that a 2024 release date is likely.",
    img1:"/images/LOU/post-1.jpg",
    img2:"/images/LOU/post-2.jpg",
    img3:"/images/LOU/post-3.jpg",
    author:"PLAYSTATION.BLOG",
    date:"DEC 8, 2022"
  },
  {
    title:"Hogwarts Legacy, can your PC run it?",
    para1:"Hogwarts Legacy is one of the most trending video games of recent times, and PC users will be able to pre-order the same via Steam for Rs 2,999 for the standard edition while the deluxe edition is priced at Rs 3,499.",
    para2:"If you are a Harry Potter aficionado, then you might already know about the upcoming video game Hogwarts Legacy. For Xbox Series X|S, PC, and Sony Playstation 5, the game will be available on day one, starting February 10th. Similarly, the same will be made available for previous generation Xbox One and PS4 from April 4. Similarly, the game will also be made available for Nintendo Switch from July 25.",
    para3:"According to Steam, one needs to have a PC or a gaming laptop with 8GB RAM and a quad-core CPU (Intel Core i5-8400 OR AMD Ryzen 5 2600) with at least NVIDIA GeForce GTX 1070 or AMD RX Vega 56 GPU and 85GB of free internal storage. While you can run this game on an HDD, it is recommended to install it on an SSD for faster loading speed.",
    para4:"If you want to run this game at higher graphics settings, then you need a PC with at least 16GB of RAM and Intel Core i7-8700 OR AMD Ryzen 5 3600 CPU with NVIDIA GeForce 1080 Ti or AMD RX 5700 XT GPU. Again, it does require 85GB of free storage to install this game on your PC.",
    para5:"On a PC with these specifications, you can play Hogwarts Legacy at 1080p resolution and 60fps with high-quality graphics settings. Also note that this is a DX12 title, hence, you also need to install the latest DirectX12 drivers from Microsoft to run this game on your PC.",
    img1:"/images/HL/post-1.jpg",
    img2:"/images/HL/post-2.jpg",
    img3:"/images/HL/post-3.jpg",
    author:"Tech Desk",
    date:"JAN 9, 2023"
  }
];

app.get("/",function(req,res){
  res.render("home",{posts:posts,articles:articles})
});

app.get("/about",function(req,res){
  res.render("about")
});

app.get("/contact",function(req,res){
  res.render("contact")
});

app.get("/news",function(req,res){
  res.render("news",{posts:posts, articles:articles});
});

app.get("/latest-news-highlight",function(req,res){
  res.render("news-highlight");
});

app.get("/:title",function(req,res){
  const requestedTitle=_.lowerCase(req.params.title);
  articles.forEach(function(article){
    const postTitle=_.lowerCase(article.title);

    if(requestedTitle==postTitle)
    res.render("post",{postTitle:article.title,postBody1:article.para1,postBody2:article.para2,postBody3:article.para3,postBody4:article.para4,postBody5:article.para5,img1:article.img1,img2:article.img2,img3:article.img3,author:article.author,date:article.date})
  })
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
