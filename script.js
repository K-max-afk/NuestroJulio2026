/*==========================================
    NUESTRO UNIVERSO ❤️
==========================================*/

// Elementos
const startBtn = document.getElementById("start");
const hero = document.querySelector(".hero");
const music = document.getElementById("music");
const story = document.getElementById("story");

const stars = document.getElementById("stars");
const hearts = document.getElementById("hearts");
const petals = document.getElementById("petals");

// Ocultar la historia al principio
story.style.display = "none";

// ==============================
// BOTÓN COMENZAR
// ==============================

startBtn.addEventListener("click", () => {

    hero.style.opacity = "0";

    hero.style.transition = "1.2s";

    setTimeout(() => {

        hero.style.display = "none";

        story.style.display = "block";

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    },1000);

    music.play().catch(()=>{});

});

// ==============================
// ESTRELLAS
// ==============================

function createStars(){

    for(let i=0;i<250;i++){

        let star=document.createElement("div");

        star.className="star";

        star.style.left=Math.random()*100+"vw";

        star.style.top=Math.random()*100+"vh";

        star.style.animationDelay=Math.random()*4+"s";

        star.style.animationDuration=2+Math.random()*4+"s";

        stars.appendChild(star);

    }

}

createStars();

// ==============================
// CORAZONES
// ==============================

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(15+Math.random()*30)+"px";

    heart.style.animationDuration=(5+Math.random()*6)+"s";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,700);

// ==============================
// PÉTALOS
// ==============================

function createPetal(){

    const petal=document.createElement("div");

    petal.className="petal";

    petal.innerHTML="🌸";

    petal.style.left=Math.random()*100+"vw";

    petal.style.animationDuration=(8+Math.random()*6)+"s";

    petals.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },14000);

}

setInterval(createPetal,900);/*==========================================
      50 RAZONES ❤️
==========================================*/

const reasons = [

"Porque contigo puedo ser completamente yo.",

"Porque llegaste cuando menos lo esperaba.",

"Porque me haces sentir segura.",

"Porque siempre buscas hacerme sonreír.",

"Porque me enseñaste que el amor también puede sentirse tranquilo.",

"Porque eres mi paz.",

"Porque me abrazas incluso sin palabras.",

"Porque contigo aprendí a confiar otra vez.",

"Porque haces especiales los días normales.",

"Porque me haces sentir querida.",

"Porque cuidas mi corazón.",

"Porque eres paciente conmigo.",

"Porque siempre estás para mí.",

"Porque haces que todo sea más bonito.",

"Porque contigo siento hogar.",

"Porque me haces reír.",

"Porque admiro la persona que eres.",

"Porque me inspiras a ser mejor.",

"Porque apareciste cuando más lo necesitaba.",

"Porque contigo la vida tiene más color.",

"Porque haces que crea en el amor bonito.",

"Porque me haces sentir importante.",

"Porque amo tu forma de ser.",

"Porque amo tus detalles.",

"Porque amo tu sonrisa.",

"Porque amo tu voz.",

"Porque amo tu mirada.",

"Porque amo cómo me haces sentir.",

"Porque me das tranquilidad.",

"Porque eres mi lugar favorito.",

"Porque contigo el tiempo vuela.",

"Porque siempre me apoyas.",

"Porque me haces feliz.",

"Porque nunca me siento sola contigo.",

"Porque haces que todo tenga sentido.",

"Porque siempre me escuchas.",

"Porque eres increíble.",

"Porque haces latir fuerte mi corazón.",

"Porque contigo descubrí una nueva versión de mí.",

"Porque amo nuestros recuerdos.",

"Porque amo nuestros planes.",

"Porque amo nuestras locuras.",

"Porque amo nuestra historia.",

"Porque contigo aprendí que amar también es paz.",

"Porque haces que sonría sin darme cuenta.",

"Porque eres un regalo de Dios en mi vida.",

"Porque contigo encontré calma.",

"Porque cada día te elijo otra vez.",

"Porque simplemente eres tú.",

"Y porque te amo con todo mi corazón ❤️"

];

let reasonIndex = 0;

const reasonBtn = document.getElementById("reasonBtn");
const reasonBox = document.getElementById("reasonBox");

if(reasonBtn){

reasonBtn.addEventListener("click",()=>{

reasonBox.style.opacity="0";

setTimeout(()=>{

reasonBox.innerHTML=reasons[reasonIndex];

reasonBox.style.opacity="1";

reasonIndex++;

if(reasonIndex>=reasons.length){

reasonIndex=0;

}

},300);

});

}

/*==========================================
      EFECTO AL HACER CLIC EN FOTOS
==========================================*/

const photos=document.querySelectorAll(".gallery img,.photo");

photos.forEach(photo=>{

photo.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.style.position="fixed";
overlay.style.top="0";
overlay.style.left="0";
overlay.style.width="100%";
overlay.style.height="100%";
overlay.style.background="rgba(0,0,0,.9)";
overlay.style.display="flex";
overlay.style.justifyContent="center";
overlay.style.alignItems="center";
overlay.style.zIndex="9999";

const img=document.createElement("img");

img.src=photo.src;

img.style.maxWidth="90%";
img.style.maxHeight="90%";
img.style.borderRadius="20px";
img.style.boxShadow="0 0 50px rgba(255,255,255,.3)";

overlay.appendChild(img);

overlay.onclick=()=>overlay.remove();

document.body.appendChild(overlay);

});

});

/*==========================================
 DESTELLOS AL MOVER EL MOUSE
==========================================*/

document.addEventListener("mousemove",(e)=>{

const spark=document.createElement("div");

spark.innerHTML="✨";

spark.style.position="fixed";
spark.style.left=e.clientX+"px";
spark.style.top=e.clientY+"px";
spark.style.pointerEvents="none";
spark.style.fontSize="12px";
spark.style.zIndex="9999";
spark.style.opacity="1";
spark.style.transition="1s";

document.body.appendChild(spark);

setTimeout(()=>{

spark.style.opacity="0";
spark.style.transform="translateY(-20px)";

},10);

setTimeout(()=>{

spark.remove();

},1000);

});

/*==========================================
 BOTÓN FINAL ❤️
==========================================*/

const love=document.getElementById("love");

if(love){

love.addEventListener("click",()=>{

for(let i=0;i<120;i++){

setTimeout(()=>{

createHeart();

},i*40);

}

alert("❤️ Gracias por formar parte de mi vida. Te amo infinitamente ❤️");

});

}
/*==========================================
      ESTRELLA FUGAZ
==========================================*/

function shootingStar(){

    const star=document.createElement("div");

    star.className="shooting-star";

    star.style.top=Math.random()*40+"vh";
    star.style.left="-150px";

    document.body.appendChild(star);

    setTimeout(()=>{
        star.remove();
    },3000);

}

setInterval(()=>{

    shootingStar();

},18000+Math.random()*12000);/*==========================================
      FRASES FLOTANTES
==========================================*/

const floatingMessages=[

"Te amo ❤️",
"Eres mi persona favorita",
"Siempre tú",
"Gracias por existir",
"Mi lugar favorito eres tú",
"Nuestro amor es infinito",
"Siempre contigo ✨",
"Mi universo eres tú"

];

function floatingText(){

    const text=document.createElement("div");

    text.className="floating-text";

    text.innerHTML=floatingMessages[
        Math.floor(Math.random()*floatingMessages.length)
    ];

    text.style.left=Math.random()*80+10+"vw";

    document.body.appendChild(text);

    setTimeout(()=>{

        text.remove();

    },9000);

}

setInterval(floatingText,7000);/*==========================================
      CARTA SORPRESA
==========================================*/

const letters=[

"Gracias por hacer mi vida más bonita ❤️",

"Prometo seguir eligiéndote todos los días.",

"Eres el mejor regalo que me dio la vida.",

"Contigo todo tiene sentido.",

"No importa el tiempo... siempre serás mi lugar favorito."

];

function randomLetter(){

    const random=
        letters[Math.floor(Math.random()*letters.length)];

    alert("💌\n\n"+random);

}

const letterBtn=document.getElementById("letterBtn");

if(letterBtn){

letterBtn.addEventListener("click",randomLetter);

}
/*==========================================
      CONTADOR
==========================================*/

const together=document.getElementById("together");

if(together){

const startDate=new Date("2026-01-01");

function updateCounter(){

const now=new Date();

let diff=now-startDate;

let days=Math.floor(diff/86400000);

diff%=86400000;

let hours=Math.floor(diff/3600000);

diff%=3600000;

let minutes=Math.floor(diff/60000);

let seconds=Math.floor((diff%60000)/1000);

together.innerHTML=

`${days} días ${hours} horas ${minutes} minutos ${seconds} segundos ❤️`;

}

updateCounter();

setInterval(updateCounter,1000);

}
/*==========================================
        NUESTRA HISTORIA
==========================================*/

const timelineItems = document.querySelectorAll(".timeline-item");

if(timelineItems.length){

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:0.3

    });

    timelineItems.forEach(item=>{

        observer.observe(item);

    });

}
/*==========================================
      CARTA ROMÁNTICA
==========================================*/

const openLetter = document.getElementById("openLetter");
const letterModal = document.getElementById("letterModal");
const closeLetter = document.getElementById("closeLetter");

if(openLetter){

    openLetter.addEventListener("click",()=>{

        letterModal.classList.add("active");

    });

}

if(closeLetter){

    closeLetter.addEventListener("click",()=>{

        letterModal.classList.remove("active");

    });

}
