
const Thunderstorm="https://videos.pexels.com/video-files/2657691/2657691-hd_1920_1080_30fps.mp4";
const Drizzle="https://videos.pexels.com/video-files/5174040/5174040-uhd_2560_1440_30fps.mp4";
const Rain="https://v1.pinimg.com/videos/mc/expMp4/61/f1/2a/61f12a979712452fc460ce04ebff8950_t3.mp4";
const Snow="https://videos.pexels.com/video-files/3147024/3147024-hd_1920_1080_30fps.mp4";
const Clouds="https://videos.pexels.com/video-files/6350030/6350030-uhd_2560_1440_30fps.mp4";
const Clear="https://assets.mixkit.co/videos/51110/51110-720.mp4";
const Mist="https://videos.pexels.com/video-files/1779202/1779202-hd_1280_720_25fps.mp4";
const Smoke="https://videos.pexels.com/video-files/30960964/13236235_2560_1440_24fps.mp4";
const Haze="https://videos.pexels.com/video-files/30960960/13236217_2560_1440_24fps.mp4";
const Dust="https://videos.pexels.com/video-files/27858665/12245900_640_360_24fps.mp4";
const Fog="https://videos.pexels.com/video-files/1405527/1405527-sd_640_360_30fps.mp4";
const Sand="https://cdn.pixabay.com/video/2022/08/21/128663-741704878_tiny.mp4";
const Ash="https://cdn.pixabay.com/video/2024/06/22/217739_tiny.mp4";
const Squall="https://cdn.pixabay.com/video/2022/04/06/113089-697585510_tiny.mp4";
const Tornado="https://cdn.pixabay.com/video/2019/03/18/22070-325253460_large.mp4";




const url="https://api.openweathermap.org/data/2.5/weather?q={cityname}&appid=42a2ad312508f01b9bec5982333dad09";

const inputdata=document.querySelector("#realinput");
const btn=document.querySelector("#button");
const country=document.querySelector("#country_name");
const temp=document.querySelector("#temprature");
const cnd=document.querySelector("#condition");
const humidity=document.querySelector("#humidity");
const videosrc=document.querySelector("#videotagID");
const video = document.querySelector("video");
btn.addEventListener("click", async ()=>{
    console.log(inputdata.value);
    const a=inputdata.value;
    const apidata=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${a}&appid=42a2ad312508f01b9bec5982333dad09`);
    const jsonconverter=await apidata.json();
    console.log(jsonconverter)
    country.innerText=`Weather in ${jsonconverter.name}`;
    temp.innerText=`Temprature: ${Math.floor(jsonconverter.main.temp - 273.15)} °C`;
    cnd.innerText=`Condition: ${jsonconverter.weather[0].main}`;
    humidity.innerText=`Humidity: ${jsonconverter.main.humidity} %`;
   const val=jsonconverter.weather[0].main;
   console.log(val);
    if(val=="Thunderstorm"){
        videosrc.src=Thunderstorm;
       
    }
    else if(val=="Clouds"){
        videosrc.src=Clouds;
       }
    else if(val=="Drizzle"){
        videosrc.src=Drizzle;
       }
    else if(val=="Rain"){
        videosrc.src=Rain;
       }
    else if(val=="Snow"){
        videosrc.src=Snow;
       }
    else if(val=="Clear"){
        videosrc.src=Clear;
       }
    else if(val=="Mist"){
        videosrc.src=Mist;
       }
    else if(val=="Smoke"){
        videosrc.src=Smoke;
       }
    else if(val=="Haze"){
        videosrc.src=Haze;
       }
    else if(val=="Dust"){
        videosrc.src=Dust;
       }
    else if(val=="Fog"){
        videosrc.src=Fog;
       }
    else if(val=="Sand"){
        videosrc.src=Sand;
       }
    else if(val=="Ash"){
        videosrc.src=Ash;
       }
    else if(val=="Squall"){
        videosrc.src=Squall;
       }
    else if(val=="Tornado"){
        videosrc.src=Tornado;
       }

       else{
        videosrc.src="https://videos.pexels.com/video-files/4458906/4458906-uhd_2560_1440_30fps.mp4";
       }

   
   
   
   
   
   
   
       video.load(); 
    video.play();
    console.log(videosrc.src);
})




