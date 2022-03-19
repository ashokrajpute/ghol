const pupet=require('puppeteer');
const id='fesagom584@chatich.com';
console.log('Hello');
async function start(productspec,clink){
    try{
    console.log('hello2');
let binst=await pupet.launch({ headless: false ,defaultViewport: null});
let page=await binst.newPage();

await page.goto('https://www.youtube.in/');
await page.click('[aria-label="Search"]');
await page.type('[aria-label="Search"]',productspec);
await page.keyboard.press("Enter");
await page.waitForSelector('[dir="auto"]');
// let arr=await page.$$('[id="view-more"]');
// console.log('--'+arr.length+" "+arr[0]);
if(clink==true){
await page.waitForSelector('[id="view-more"]');
await page.click('[id="view-more"]');


await page.waitForSelector('[aria-label="Share"]>.style-scope.ytd-button-renderer');
await page.click('[aria-label="Share"]>.style-scope.ytd-button-renderer');
await page.waitForSelector('[aria-label="Copy"]>[id="text"]');
await page.click('[aria-label="Copy"]>[id="text"]');
console.log('=======LINK COPIED TO CLIPBOARD======');
    }
else{
await page.waitForSelector('.yt-simple-endpoint.style-scope.ytd-playlist-renderer>.style-scope.ytd-playlist-renderer>[id="video-title"]');
await page.click('.yt-simple-endpoint.style-scope.ytd-playlist-renderer>.style-scope.ytd-playlist-renderer>[id="video-title"]');

console.log('=======VIDEOS ARE PLAYED======');
}

 }
    catch(err)
    {console.log('No playlist')

    }
}
//.style-scope.ytd-channel-name.complex-string>.yt-simple-endpoint.style-scope.yt-formatted-string

module.exports={
  utub: start

}