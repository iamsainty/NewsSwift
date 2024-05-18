import React from 'react';
import Newsitem from './Newsitem';
import propTypes from 'prop-types';

const newsarticles = [
    {
        "status": "ok",
        "totalResults": 38,
        "articles": [
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Akriti Anand",
            "title": "BJP candidate list Lok Sabha 2024 LIVE: PM Modi to contest Varanasi seat, Bansuri Swaraj in fray for first time | Mint - Mint",
            "description": "BJP candidate list Lok Sabha 2024 LIVE Updates: Prime Minister Narendra Modi will contest from the Varanasi seat. The BJP released the first list of 195 candidates on Saturday. PM Modi said the BJP will be announcing candidates for remaining seats in the comi…",
            "url": "https://www.livemint.com/politics/lok-sabha-election-2024-bjp-candidate-list-for-election-2024-live-updates-narendra-modi-amit-rajnath-singh-jp-nadda-11709381889809.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2024/03/02/1600x900/ANI-20240302139-0_1709385536790_1709385544375.jpg",
            "publishedAt": "2024-03-02T15:44:00Z",
            "content": "BJP candidate list Lok Sabha 2024 LIVE Updates: Hours after the Bharatiya Janata Party (BJP) announced its first list of 195 candidates, Prime Minister Narendra Modi congratulated all those who have … [+14333 chars]"
          },
          {
            "source": {
              "id": "google-news",
              "name": "Google News"
            },
            "author": null,
            "title": "BCCI Chief Selector Ajit Agarkar Was Furious With Shreyas Iyer, Claims Report. Reveals Details - NDTV Sports",
            "description": "Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.",
            "url": "https://news.google.com/rss/articles/CBMihAFodHRwczovL3Nwb3J0cy5uZHR2LmNvbS9jcmlja2V0L2JjY2ktY2hpZWYtc2VsZWN0b3ItYWppdC1hZ2Fya2FyLXdhcy1mdXJpb3VzLXdpdGgtc2hyZXlhcy1peWVyLWNsYWltcy1yZXBvcnQtcmV2ZWFscy1kZXRhaWxzLTUxNjE5MjjSAYoBaHR0cHM6Ly9zcG9ydHMubmR0di5jb20vY3JpY2tldC9iY2NpLWNoaWVmLXNlbGVjdG9yLWFqaXQtYWdhcmthci13YXMtZnVyaW91cy13aXRoLXNocmV5YXMtaXllci1jbGFpbXMtcmVwb3J0LXJldmVhbHMtZGV0YWlscy01MTYxOTI4L2FtcC8x",
            "urlToImage": "https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw",
            "publishedAt": "2024-03-02T14:35:00Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT News Desk",
            "title": "Rajeev Chandrasekhar, Anil Antony BJP's picks for Kerala in 'double digit' push - Hindustan Times",
            "description": "Anil Antony to contest from Pathanamthitta and Rajeev Chandrasekhar from Thiruvananthapuram. | Latest News India",
            "url": "https://www.hindustantimes.com/india-news/anil-antony-rajeev-chandrasekhar-bjps-dark-horse-for-double-digit-in-kerala-101709386666171.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/03/02/1600x900/BJP_kerala_anil_antony_rajeev_chandrashekar_1709386809365_1709386809581.jpg",
            "publishedAt": "2024-03-02T13:48:40Z",
            "content": "Prime Minister Narendra Modi recently said the BJP is aiming at a two-digit number in Kerala where at present the party has no Lok Sabha MP. On Saturday, as the first list of the candidates was annou… [+2476 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "OpIndia"
            },
            "author": "OpIndia Staff",
            "title": "Bangladesh: Fire accident kills journalist ‘Abhishruti Shashtri’, last rites on hold after family claims victim was Muslim - OpIndia",
            "description": "The friends and colleagues of Abhishruti Shashtri have claimed that she always identified as a Hindu. | OpIndia News",
            "url": "https://www.opindia.com/2024/03/bangladesh-fire-accident-journalist-abhishruti-shashtri-killed-confusion-religious-identity/",
            "urlToImage": "https://www.opindia.com/wp-content/uploads/2024/03/journalist-dead-bangladesh-1.jpg",
            "publishedAt": "2024-03-02T13:29:40Z",
            "content": "On Thursday (29th February), a 25-year-old journalist named Abhishruti Shashtri lost her life in a fire accident. The incident took place at a commercial building on Bailey Road in Dhaka city of Bang… [+1846 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Hindustan Times"
            },
            "author": "HT Tech",
            "title": "How this most intense geomagnetic storm that brought auroras to Ladakh was tracked by Indian astronomers - HT Tech",
            "description": "A recent study traces the origin of a powerful geomagnetic storm in April 2023 back to the Sun, shedding light on the mechanisms behind such phenomena that brought auroras as far South as Ladakh in India.",
            "url": "https://tech.hindustantimes.com/tech/news/how-this-most-intense-geomagnetic-storm-that-brought-auroras-to-ladakh-was-tracked-by-indian-astronomers-71709385170847.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2024/03/02/1600x900/intense_geomagnetic_storm_2_1709385568291_1709385593133.png",
            "publishedAt": "2024-03-02T13:22:07Z",
            "content": "In late-April 2023, Earth experienced a powerful geomagnetic storm that illuminated the skies with mesmerizing auroras, even in lower latitudes like Ladakh in India. Mostly, these auroras are restric… [+2429 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "Sushma Swaraj's Daughter, Bansuri Swaraj, To Make Her Poll Debut - NDTV",
            "description": "Bansuri Swaraj, the daughter of former foreign affairs minister Sushma Swaraj, is set to make her poll debut in the upcoming elections.",
            "url": "https://www.ndtv.com/india-news/elections-2024-bjp-list-sushma-swaraj-daughter-bansuri-swaraj-to-make-her-poll-debut-5163312",
            "urlToImage": "https://c.ndtvimg.com/2024-03/bc8od84o_bansuri-swaraj_625x300_02_March_24.jpeg?ver-20240117.07",
            "publishedAt": "2024-03-02T13:15:03Z",
            "content": "New Delhi: Bansuri Swaraj, the daughter of former foreign affairs minister Sushma Swaraj, is set to make her poll debut in the upcoming elections. In its first list of candidates, Bharatiya Janata Pa… [+2550 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "Asmita Dey",
            "title": "Byju's unable to pay salaries as funds locked: Founder Raveendran - The Times of India",
            "description": "India Business News: Byju Raveendran, CEO of Byju’s, criticized investors for hindering salary disbursement due to the lock on funds raised through the rights issue. Inves",
            "url": "https://timesofindia.indiatimes.com/business/india-business/byjus-unable-to-pay-salaries-as-amount-raised-through-rights-issue-locked-in-separate-account-founder-raveendran/articleshow/108164503.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-108164523,width-1070,height-580,imgsize-27644,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2024-03-02T12:45:00Z",
            "content": "FD Calculator\r\nWhen investing in a fixed deposit, the amount you deposit earns interest as per the prevailing...\r\nCalculate Now"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Devesh Kumar",
            "title": "Uttar Pradesh Public Service Commission's RO/ARO exam cancelled over allegations of paper leak | Mint - Mint",
            "description": "The candidates launched sit in protests at Pathar Girija Ghar of Civil Lines in Prayagraj district and demanded CBI investigation in the paper leak",
            "url": "https://www.livemint.com/news/india/uttar-pradesh-public-service-commissions-ro-aro-exam-cancelled-amid-allegations-of-paper-leak-11709383243458.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2024/03/02/1600x900/2_1709383764613_1709383767018.jpg",
            "publishedAt": "2024-03-02T12:43:12Z",
            "content": "Uttar Pradesh Public Service Commission's (UPPSC) RO/ARO exam was cancelled on Saturday amid allegations of paper leak. The exam was held on February 11 stands cancelled amid intense protests by the … [+2601 chars]"
          },
          {
            "source": {
              "id": "the-hindu",
              "name": "The Hindu"
            },
            "author": "The Hindu",
            "title": "Varalaxmi Sarathkumar gets engaged to gallerist Nicholai Sachdev - The Hindu",
            "description": null,
            "url": "https://www.thehindu.com/entertainment/movies/varalaxmi-sarathkumar-gets-engaged-to-gallerist-nicholai-sachdev/article67907360.ece",
            "urlToImage": null,
            "publishedAt": "2024-03-02T12:36:00Z",
            "content": null
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "PTI",
            "title": "Prostate cancer unveiled: AI uncovers new subtypes, paves way for tailored treatments - The Economic Times",
            "description": "A groundbreaking study utilizing artificial intelligence (AI) has uncovered two distinct subtypes of prostate cancer, challenging previous assumptions about the disease. Led by researchers at the University of Oxford and the University of Manchester, the stud…",
            "url": "https://economictimes.indiatimes.com/magazines/panache/prostate-cancer-unveiled-ai-uncovers-new-subtypes-paves-way-for-tailored-treatments/articleshow/108164177.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-108164228,width-1200,height-630,imgsize-1332412,overlay-etpanache/photo.jpg",
            "publishedAt": "2024-03-02T12:17:03Z",
            "content": "New Delhi, Scientists have used artificial intelligence (AI) to reveal a new form of aggressive prostate cancer which they said could help thousands of lives by revolutionising how the disease is dia… [+3109 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "OpIndia"
            },
            "author": "OpIndia Staff",
            "title": "Amid rumours of BJP denying tickets to 100 MPs, Gautam Gambhir and Jayant Sinha quit electoral politics - OpIndia",
            "description": "Ahead of general elections, Gautam Gambhir and Jayant Sinha took to X to announce that they are quitting electoral politics. | OpIndia News",
            "url": "https://www.opindia.com/2024/03/gautam-gambhir-and-jayant-sinha-quit-electoral-politics/",
            "urlToImage": "https://www.opindia.com/wp-content/uploads/2024/03/BJP-MP-Rakesh-Sinha-and-BJP-MP-Gautam-Gambhir.jpg",
            "publishedAt": "2024-03-02T11:47:42Z",
            "content": "The Bharatiya Janata Party (BJP) CEC (Central Election Committee) Meeting regarding the Lok Sabha elections at the party headquarters in Delhi took place on 29th February and lasted till the early ho… [+3107 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Indian Express"
            },
            "author": "Sanath Prasad",
            "title": "Timeline of Bengaluru Rameshwaram Cafe blast: Suspect ordered rava idli at 11.30 am, blast at around 1 pm - The Indian Express",
            "description": "A floor manager at Rameshwaram Cafe said the suspect ordered rava idli by purchasing token for the same and left a bag near the handwash area.",
            "url": "https://indianexpress.com/article/cities/bangalore/rameshwaram-cafe-blast-whitefield-ied-suspect-timeline-9192138/",
            "urlToImage": "https://images.indianexpress.com/2024/03/4-77-1.jpg",
            "publishedAt": "2024-03-02T11:33:24Z",
            "content": "The HAL police station under the Whitefield division has registered an FIR in connection with the Rameshwaram Cafe IED blast in Brookefield on Friday afternoon in which several people were injured.Ba… [+3523 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TOI Lifestyle Desk",
            "title": "10 breathtaking images captured by NASA's Hubble Space Telescope - The Times of India",
            "description": "Let's take a look at the top 10 breathtaking pictures of NASA's Hubble Space Telescope.",
            "url": "https://timesofindia.indiatimes.com/etimes/trending/10-breathtaking-images-captured-by-nasas-hubble-space-telescope/photostory/108140188.cms",
            "urlToImage": "https://static.toiimg.com/photo/108140205.cms",
            "publishedAt": "2024-03-02T11:30:00Z",
            "content": "Taken by Jennifer Lotz, in this image, you can see two beautiful, shining galaxies interacting with each other, and looking like they are running behind each other, creating an aura of beautiful ligh… [+24 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "AR glasses, holograms and a retro keyboard smartphone accessory on show at MWC - AP Archive",
            "description": "(26 Feb 2024) SPAIN MWC SHOWSTOPPERSRESTRICTION SUMMARY : LENGTH : 5:11ASSOCIATED PRESS Barcelona, Spain -  25 February 20241. Entrance of Barcelona’s Mariti...",
            "url": "https://www.youtube.com/watch?v=lmSPDU-rX64",
            "urlToImage": "https://i.ytimg.com/vi/lmSPDU-rX64/maxresdefault.jpg",
            "publishedAt": "2024-03-02T11:19:52Z",
            "content": null
          },
          {
            "source": {
              "id": "reuters",
              "name": "Reuters"
            },
            "author": "Reuters",
            "title": "Iran election turnout around 40%, reports say - Reuters",
            "description": null,
            "url": "https://www.reuters.com/world/middle-east/unofficial-reports-put-iran-election-turnout-around-40-2024-03-02/",
            "urlToImage": null,
            "publishedAt": "2024-03-02T11:05:00Z",
            "content": null
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Sunil Shankar Matkar",
            "title": "Technical View: 22,400 crucial for Nifty to move higher, volatility cools down further - Moneycontrol",
            "description": "The index has to go go past 22,400 to move towards 22,600, the key resistance area. Immediate support is at 22,200, experts say",
            "url": "https://www.moneycontrol.com/news/business/markets/technical-view-22400-crucial-for-nifty-to-move-higher-volatility-cools-down-further-12389271.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2024/01/sensex_nifty1-770x433.jpg",
            "publishedAt": "2024-03-02T10:59:01Z",
            "content": "The index has to go go past 22,400 to move towards 22,600, the key resistance area. Immediate support is at 22,200, experts say \r\nMarch 02, 2024 / 05:00 PM IST \r\nDiscover the latest business news, Se… [+156 chars]"
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "TOI Sports Desk",
            "title": "'It's a shame': James Anderson's huge remark on Virat Kohli's absence - The Times of India",
            "description": "Cricket News: James Anderson rues missing the chance to play against Virat Kohli in the India-England Test series.",
            "url": "https://timesofindia.indiatimes.com/sports/cricket/england-in-india/its-a-shame-james-andersons-huge-remark-on-virat-kohlis-absence/articleshow/108162521.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-108162623,width-1070,height-580,imgsize-47726,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2024-03-02T10:57:00Z",
            "content": "India vs England 4th Test: India beat England, secure 17th straight Test series win at home"
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "Killer Whale's Solo Attack On Great White Shark Stuns Researchers - NDTV",
            "description": "NDTV.com: India, Business, Bollywood, Cricket, Video and Breaking News",
            "url": "https://www.ndtv.com",
            "urlToImage": "https://www.ndtv.com/news/images/ndtv1x.png",
            "publishedAt": "2024-03-02:00:00Z",
            "content": null
          },
          {
            "source": {
            "id": null,
            "name": "Knoxville News Sentinel"
          },
          "author": "Sarah Riley",
          "title": "She was on a first date, police say. He drove up, shot her, then died of suicide - Knoxville News Sentinel",
          "description": "By the time officers arrived at the Crossroads Shopping Center, the man who shot the woman was dead. The woman was taken to the University of Tennessee Medical Center, where she was pronounced dead.",
          "url": "https://www.knoxnews.com/story/news/crime/2024/03/02/crossroads-shooting-police-say-man-shot-woman-died-suicide/7402522001/",
          "urlToImage": "https://www.gannett-cdn.com/presto/2024/03/02/PKNS/39444e9d-30c8-43b5-8154-f647196f4246-JEREMY__SHOOTING_PHOTO_1.jpg",
          "publishedAt": "2024-03-02T15:57:45Z",
          "content": "By the time officers arrived at the Crossroads Shopping Center, the man who shot the woman was dead. The woman was taken to the University of Tennessee Medical Center, where she was pronounced dead.\r… [+1864 chars]"
          }
        ]
      }
      
];


const News = (props) => {

    if (!newsarticles[0].articles || newsarticles[0].articles.length === 0) {
        return <div>No articles to display</div>;
    }

    let mode = props.mode;

    return (
        <div className='container my-5'>
            <h2 style={{ color: props.mode === 'dark' ? 'white' : '#191919', marginTop: '100px' }}>News Hub - Top headlines</h2>
            <div className="row">
                {newsarticles[0].articles.map((element, index) => (
                    <div className="col-md-3" key={`${element.url}-${index}`} style={{ color: props.mode === 'dark' ? 'white' : '#232D3F' }}>
                        <Newsitem
                            title={element.title ? element.title.slice(0, 40) : ""}
                            description={element.description ? element.description.slice(0, 75) : ""}
                            imageurl={element.urlToImage}
                            newsurl={element.url}
                            author={element.author ? element.author : "Unknown"}
                            date={element.publishedAt}
                            source={element.source.name}
                            mode={mode}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
    apikey: process.env.REACT_APP_NEWSHUB
};

News.propTypes = {
    country: propTypes.string,
    pageSize: propTypes.number,
    category: propTypes.string,
    apikey: propTypes.string
};

export default News;
