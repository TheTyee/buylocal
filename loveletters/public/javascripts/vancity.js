


var allthepartners = [
  {
    "business":"East Van Roasters",
    "description":"East Van Roasters is Vancouver's first bean to bar chocolate roaster, coffee shop and café. The award-winning social enterprise is set below the historic Rainier Hotel in Vancouver's Downtown Eastside.",
    "stamp":"Yes",
    "twitter":"Eastvanroasters",
    "website":"http://eastvanroasters.com/",
    "city":"Vancouver",
    "storyLink":"https://www.vancity.com/AboutVancity/InvestingInCommunities/StoriesOfImpact/Social/EastVanRoasters/",
    "img":"EastVanRoasters.jpg"
  },
  {
    "business":"Spinnakers Gastro Brewpub",
    "description":"Spinnakers Gastro Brewpub in Victoria is a craft beer pioneer and local food advocate. Spinnakers buys ingredients from more than 35 farmers and producers on Vancouver Island, supporting the development of a local food system and green economy. ",
    "stamp":"No",
    "twitter":"Spinnakers",
    "website":"http://www.spinnakers.com/",
    "city":"Victoria",
    "storyLink":"https://www.vancity.com/AboutVancity/InvestingInCommunities/StoriesOfImpact/Food/Spinnakers/",
    "img":"Spinnakers-tyee-feature.jpg"
  },
  {
    "business":"The Good Planet Company",
    "description":"The Good Planet Company in Victoria, BC sells healthy and environmentally friendly lifestyle products. Their mission is to help their customers lead a simpler, greener, healthier life.",
    "stamp":"No",
    "twitter":"thegoodplanetco",
    "website":"http://www.goodplanet.com/",
    "city":"Victoria",
    "storyLink":"",
    "img":"goodplanet-tyee-feature.jpg"
  },
  {
    "business":"East Vanity Parlour",
    "description":"East Vanity Parlor is a cutting-edge vintage salon in Vancouver’s trendy Main Street neighborhood. Launched in 2009, East Vanity is famous for its reinvented classic hairstyles inspired by a multitude of eras, including the 1800s. ",
    "stamp":"Yes",
    "twitter":"EVParlour",
    "website":"http://www.eastvanityparlour.com/",
    "city":"Vancouver",
    "storyLink":"https://www.vancity.com/AboutVancity/InvestingInCommunities/StoriesOfImpact/OtherImpactStories/EastVanityParlour/",
    "img":"EastVancityParlour.jpg"
  },
  {
    "business":"Natural Pod",
    "description":"The very best children’s toys enable kids to do what they do best—use their imagination to explore the world around them. It’s this vision that guides Natural Pod, a Vancouver Island-based designer of non-toxic toys and play environments.",
    "stamp":"Yes",
    "twitter":"naturalpod",
    "website":"http://naturalpod.com/",
    "city":"Online, Victoria",
    "storyLink":"https://www.vancity.com/AboutVancity/InvestingInCommunities/StoriesOfImpact/OtherImpactStories/NaturalPod/",
    "img":"NaturalPod.jpg"
  },
  {
    "business":"Salmon n' Bannock Bistro",
    "description":"Salmon n’ Bannock is Vancouver’s only restaurant and caterer focused entirely on Aboriginal cuisine. Traditional dishes redefined for modern palettes, local First Nations artwork and live traditional music make it a great gathering place for a quiet dinner, group bookings and festive events.",
    "stamp":"Yes",
    "twitter":"SnBVancouver",
    "website":"http://www.salmonandbannock.net/",
    "city":"Vancouver",
    "storyLink":"https://www.vancity.com/AboutVancity/InvestingInCommunities/StoriesOfImpact/Aboriginal/SalmonBannock/",
    "img":"SalmonnBannock.jpg"
  },
  {
    "business":"Hip Baby Victoria",
    "description":"Hip Baby is a children's store in Victoria that features products that are organic, sustainable and non-toxic. They believe customers shouldn’t have to compromise on fun and style when purchasing safe and functional products.",
    "stamp":"No",
    "twitter":"hipbaby_vic",
    "website":"http://www.hipbaby.com/",
    "city":"Vancouver, Victoria",
    "storyLink":"",
    "img":"hipbaby-tyee-feature.jpg"
  },
  {
    "business":"Skwachays Lodge",
    "description":"Skwachàys  Lodge in Vancouver houses a fair trade gallery and 24 units of shleter-rate housing for urban aboriginal artists. In addition, the top three floors contain 18 hotel units which have recently been transformed with the assistance of a team of artists, designers, and suppliers into Canada's first boutique aboriginal arts hotel.",
    "stamp":"Yes",
    "twitter":"SkwachaysLodge",
    "website":"http://skwachays.com/",
    "city":"Vancouver",
    "storyLink":"https://www.vancity.com/AboutVancity/InvestingInCommunities/StoriesOfImpact/Realestate/Skwachays/",
    "img":"skwachays.jpg"
  },
  {
    "business":"Greenworks Building Supply",
    "description":"Greenworks Building Supply is a building supplies store specializing in environmentally friendly building materials and products. By sourcing materials and products locally and ensuring they are truly green, Greenworks is helping to build a greener community.",
    "stamp":"Yes",
    "twitter":"Greenworks_YVR",
    "website":"http://www.greenworksbuildingsupply.com/",
    "city":"Vancouver",
    "storyLink":"https://www.vancity.com/AboutVancity/InvestingInCommunities/StoriesOfImpact/Energy/GreenWorks/",
    "img":"Greenworks.jpg"
  },
  {
    "business":"The Soap Dispensary",
    "description":"Keep yourself and our planet clean by bringing and filling your clean, reusable containers with Soap Dispensary’s soaps made from non-toxic, natural ingredients. Their store on Main street is perfect for families and individuals with sensitivities.",
    "stamp":"Yes",
    "twitter":"SoapDispensary",
    "website":"http://thesoapdispensary.com/ ",
    "city":"Vancouver",
    "storyLink":"https://www.vancity.com/AboutVancity/InvestingInCommunities/StoriesOfImpact/Energy/SoapDispensary/",
    "img":"TheSoapDispensary.jpg"
  },
  {
    "business":"Everland Natural Foods",
    "description":"Locally manufactures over 200 certified organic and natural food, breakfast and snack food items including New World® brand whole-grain granola, nut butters and Bliss Balls®, a gluten- and dairy-free confection. Find these edibles at your local organic grocer or at Sweet Cherubim.",
    "stamp":"Yes",
    "twitter":"EVERLANDFOODS",
    "website":"http://www.everlandnaturalfoods.com/",
    "city":"Burnaby",
    "storyLink":"https://www.vancity.com/AboutVancity/InvestingInCommunities/StoriesOfImpact/Food/EverlandNaturalFoods/",
    "img":"Everland.jpg"
  }
],
  randomedArray = [];

fillupArray();
$(".greeting-card li:nth-child(12n + 6)").after(vancityPartner());


function fillupArray(){
shuffleArray(allthepartners);
randomedArray = allthepartners.slice(0);
}

function shuffleArray(array) {
for (var i = array.length - 1; i > 0; i--) {
var j = Math.floor(Math.random() * (i + 1));
var temp = array[i];
array[i] = array[j];
array[j] = temp;
}
return array;
}


function makeSomeContent() {

var partnercontent = randomedArray.pop();
return partnercontent;

}



function vancityPartner() {

  var z = function(){
    var x,
        theCard;

    if(randomedArray.length > 0){
      x = makeSomeContent();
    }
    else{
      fillupArray();
      x = makeSomeContent();

    }

    if(x.stamp == 'Yes'){
      theCard = '<div class="vancity-content">' +
      
       '<section class="vancity-photo">' +
       '<img src="/images/' + x.img + '" class="vancity-image">' +
       '<img src="/images/loco-tag.png" class="loco-tag">' +
       '</section>' +
       '<section class="vancity-details">' +
       '<h2 class="contest-header">' + 
       '<a href="'+ x.website + '">' + x.business + '</a></h2>' +
       '<p class="twitter"><a href="https://twitter.com/' + x.twitter +'">@' + x.twitter + '</a></p>' +

       '<p>' + x.description + '</p>';
     

    }
    else{
      theCard = '<div class="vancity-content">' +
      
       '<section class="vancity-photo">' +
       '<img src="/images/' + x.img + '" class="vancity-image">' +
       '</section>' +
       '<section class="vancity-details">' +
       '<h2 class="contest-header">' + 
       '<a href="'+ x.website + '">' + x.business + '</a></h2>' +
       '<p class="twitter"><a href="https://twitter.com/' + x.twitter +'">@' + x.twitter + '</a></p>' +

       '<p>' + x.description + '</p>';


    }

    if(x.storyLink.length > 0){
      theCard = theCard +
                '<a href="' + x.storyLink + '" class="van-learn-more">Learn More &rarr;</a>' +
                '<footer class="vancity-ack">' +
                '<a href="http://vancity.com"><img src="/images/Vancity_wordmark.JPG"></a>' +
                '<p>You already live and work local, so why not buy and bank local?</p>' +
                '<p class="bcbuylocal"><a href="https://twitter.com/search?q=%23bcbuylocal">#bcbuylocal</a></p>' +
                '</footer>' +
                '</section' +
                '</div>  ';

    }

    else{
      theCard = theCard +
                '<footer class="vancity-ack">' +
                '<a href="http://vancity.com"><img src="/images/Vancity_wordmark.JPG"></a>' +
                '<p>You already live and work local, so why not buy and bank local?</p>' +
                '<p class="bcbuylocal"><a href="https://twitter.com/search?q=%23bcbuylocal">#bcbuylocal</a></p>' +
                '</footer>' +
                '</section' +
                '</div>  ';

    }
            
            
        
    return theCard;
    }
 return z;
  }


