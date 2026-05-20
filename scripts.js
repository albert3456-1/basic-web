let bodyTag = document.body;


let hongikFestival = {
    name: "축제 라인업",
    date: "2026.05.13 - 2026.05.15",
    location: "서울특별시 마포구 홍익대학교",
    lineup: {
        day1: "다이나믹듀오",
        day2: ["백예린","하하"],
        day3: ["프로미스나인","주원재","로꼬","그레이"]
    }
}

// section 태그를 찾는다.
let sectionTag = document.querySelector("section");
let dynamicDuoTag = document.createElement("p");

dynamicDuoTag.innerText = "day1: 2026.05.13\n"+hongikFestival.lineup.day1;

sectionTag.appendChild(dynamicDuoTag);

let day2=document.createElement("p");
day2.innerText="day2: 2026.05.14\n"+hongikFestival.lineup.day2[0]+"\n"+hongikFestival.lineup.day2[1];
sectionTag.appendChild(day2);

let day3=document.createElement("p");
day3.innerText="day3: 2026.05.15\n"+hongikFestival.lineup.day3[0]+"\n"+hongikFestival.lineup.day3[1]+"\n"+hongikFestival.lineup.day3[2]+"\n"+hongikFestival.lineup.day3[3];
sectionTag.appendChild(day3);



let img= new Image();
img.src="./thumb_2.홍문관(R동)_0대표1.jpg"
img.width=200
sectionTag.appendChild(img);

