const aiData = [];

function add(qList, answer){
    aiData.push({ q: qList, a: answer });
}

/* ===== COMPUTER ===== */
add(["what is computer"],"A computer is an electronic device that processes data.");
add(["cpu","cpu full form"],"CPU stands for Central Processing Unit.");
add(["ram"],"RAM is temporary memory.");
add(["rom"],"ROM is permanent memory.");
add(["hardware"],"Hardware are physical parts of computer.");
add(["software"],"Software are programs.");
add(["operating system"],"OS manages computer resources.");
add(["internet"],"Internet is a global network.");
add(["browser"],"Browser is used to access websites.");
add(["father of computer"],"Charles Babbage.");

/* ===== ISLAM ===== */
add(["what is islam"],"Islam is a religion of peace.");
add(["allah"],"Allah is one and only God.");
add(["quran"],"Quran is the holy book of Islam.");
add(["prophet muhammad"],"He is the last Prophet of Islam.");
add(["namaz"],"Namaz is prayer in Islam.");

/* ===== PAKISTAN ===== */
add(["pakistan"],"Pakistan is an Islamic country.");
add(["capital of pakistan"],"Islamabad.");
add(["founder of pakistan"],"Quaid-e-Azam Muhammad Ali Jinnah.");
add(["national language of pakistan"],"Urdu.");
add(["independence day of pakistan"],"14 August 1947.");

/* ===== WORLD ===== */
add(["earth"],"Earth is our planet.");
add(["sun"],"Sun is a star.");
add(["moon"],"Moon is Earth's satellite.");
add(["world"],"World is a collection of countries.");
add(["climate change"],"Climate change affects Earth’s temperature.");

function askAI(){
    let input = document.getElementById("question").value.toLowerCase();
    let output = document.getElementById("answer");

    for(let i=0;i<aiData.length;i++){
        for(let j=0;j<aiData[i].q.length;j++){
            if(input.includes(aiData[i].q[j])){
                output.innerHTML = aiData[i].a;
                return;
            }
        }
    }
    output.innerHTML = "🤖 Sorry, answer not found. Try another question.";
}
