import { Application, Loader, Sprite } from 'pixi.js';
//import {assets}from './assets';
//import{UITarea} from './scene/UITarea';


const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 720
});
window.addEventListener("resize", ()=>{
	console.log("resized");
	const scaleX= window.innerWidth/app.screen.width;
	const scaleY= window.innerHeight/app.screen.height;
	const scale= Math.min(scaleX, scaleY);
	const gameWidth= Math.round(app.screen.width*scale);
	const gameHeigth= Math.round(app.screen.height*scale);

	const marginHorizontal= Math.floor((window.innerWidth-gameWidth)/2);
	const marginVertical= Math.floor((window.innerHeight-gameHeigth)*2);

	app.view.style.width=gameWidth+"px";
	app.view.style.height=gameHeigth+"px";
	app.view.style.marginLeft= marginHorizontal+"px";
	app.view.style.marginRight= marginHorizontal+"px";
	app.view.style.marginTop= marginVertical+"px";
	app.view.style.marginBottom= marginVertical+"px";


});
window.dispatchEvent(new Event("resize"));

Loader.shared.add({url: "./dino.jpg", name:"Dino"});
Loader.shared.onComplete.add(()=> {
const dino:  Sprite = Sprite.from("Dino");

dino.x = 0;
dino.y = 0;
app.stage.addChild(dino);
}); 
Loader.shared.load();