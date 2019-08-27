fortuneBank = ["อยากหาอะไรดีๆ เก่งๆ เป็นในชีวิตลองเป็นคนปากดีปากเก่งดู รับรองเจอดีแน่ๆ",
"ลองทักคนอื่นว่าระวังตัวไว้ให้ดีสิ",
"ซื้อแกงตีนมา แล้วทักคนข้างบ้านว่าอยากกินตีนไหม",
]

function play()
{
	fortune.innerText = "";
	cookie1.classList.add("cookie-hide");
	cookie2.classList.add("cookie-show");
	setTimeout(function(){
		getFortune();
	},3000);
}

function play2()
{
	cookie1.classList.remove("cookie-hide");
	cookie2.classList.remove("cookie-show");
	cookie2.classList.add("cookie-hide-2");
	cookie1.classList.add("cookie-show-2");

	setTimeout(function(){
		cookie2.classList.remove("cookie-hide-2");
		cookie1.classList.remove("cookie-show-2");
	},0);
}
 
function getFortune(){
	rand = Math.floor(Math.random()*fortuneBank.length);
	fortune.innerText = fortuneBank[rand];
	fortune.style.opacity = 1;
	fortune.style.top = "96px";
}