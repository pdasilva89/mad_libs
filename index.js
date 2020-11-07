//when one of the buttons is clicked the story prompts appear.
function story(id) {
    let totalNumberOfStories = 4;
    for(i=1; i<= totalNumberOfStories; i++) {
        if (document.getElementById("story" + i)) {
            document.getElementById("story" + i).style.display = 'none';
        }
        if (document.getElementById("story" + id)) {
            document.getElementById("story" + id).style.display = "block";
        }
    }
}

//when the generateStory button is clicked display the answer inside output div
function createStory(x) {
        if (x == "romance") {
            let adjective = document.getElementById("romanceAdjective").value;
            let verb = document.getElementById("romanceVerb").value;
            let noun = document.getElementById("romanceNoun").value;
            let special = document.getElementById("romanceSpecial").value;



            //inside output div display story selected 
            let para = `<p>Once upon a time, there was a young woman named Veronica, who always wondered what it would be like to meet her soulmate.
             One day, as she was taking a walk in the <strong>${noun}</strong>, she happened to stumble upon a flyer 
             for a <strong>${verb}</strong> day event” that was soon to happen in her city. 
             She thought “oh, how <strong>${adjective}</strong>! What a great opportunity to meet single people!” 
             On the day, Veronica wore the most amazing <strong>${adjective}</strong> Princess Dress. 
             She met and fell in love with <strong>${special}</strong> in the most cheezy makes you want to vomit romantic way,
             and they lived happily ever after! 
             <br>
             <br>
             The end.
             </p>`;
            
            document.getElementById("rom").innerHTML = "A Chance Encounter";
      
            document.getElementById("romanceOutput").innerHTML = `${para} <img src="images/romance.svg" alt="">
            <button class = "storyButtons" onclick="reload()" id="reload">Reload Story Prompts</button>`;
            document.getElementById("inputSection1").style.display = "none";
            document.getElementById("romanceStory").style.display = "none";
        }
        if (x == "action") {
            let adjective = document.getElementById("actionAdjective").value;
            let verb = document.getElementById("actionVerb").value;
            let noun = document.getElementById("actionNoun").value;

            //inside output div display story selected 
            let para = `<p>Once upon a time, there was a cat named Willow, who loved
            to <strong>${verb}</strong> outside. One day, she saw this <strong>${adjective}</strong> dog running in 
            her direction. So, she did what any cat in her situation would do, she 
            climbed to the closest <strong>${noun}</strong> in her vicinity. However, once she was up, 
            she could not come down. Her human friend saw what was going on and came running 
            to her rescue. Willow was saved! 
            <br>
            <br>
            The End.    
            </p>`;
            
            document.getElementById("act").innerHTML = "Human saves Cat friend";

            document.getElementById("actionOutput").innerHTML = `${para} <img src="images/action.svg" alt=""> 
            <button class = "storyButtons" onclick="reload()" id="reload">Reload Story Prompts</button>`;
            document.getElementById("inputSection2").style.display = "none";
        }
        if (x == "thriller") {
            let adjective = document.getElementById("thrillerAdjective").value;
            let verb = document.getElementById("thrillerVerb").value;
            let noun = document.getElementById("thrillerNoun").value;
            let special = document.getElementById("home").value;

            //inside output div display story selected 
            let para = `<p>Once upon a time, a woman was held hostage in her own <strong>${special}</strong> by a couple of thieves.
            The thieves claimed they were only after <strong>${noun}</strong>, but despite handing every last bit of <strong>${noun}</strong> she had, 
            they were still tormenting the <strong>${adjective}</strong> woman. She thought "there must be some other reason."
            She was not wrong. It turns out, the men who <strong>${verb}</strong> her hostage, did it entirely for revenge. 
            This "<strong>${adjective}</strong>" woman had married their father for money and taken everything he owned, leaving the children destitute. 
            Who is the real victim in this story? 
            <br>
            <br>
            The End.</p>`;
            
            document.getElementById("thr").innerHTML = "The real victim";
      
            document.getElementById("thrillerOutput").innerHTML = `${para} <img src="images/thriller.svg" alt="">
            <button class = "storyButtons" onclick="reload()" id="reload">Reload Story Prompts</button>`;
            document.getElementById("inputSection3").style.display = "none";
        }
        if (x == "comedy"){
            let adjective = document.getElementById("comedyAdjective").value;
            let verb = document.getElementById("comedyVerb").value;
            let noun = document.getElementById("comedyNoun").value;
            let special = document.getElementById("country").value;

            //inside output div display story selected 
            let para = `<p>Once upon a time, a <strong>${adjective}</strong> 3 year old boy in <strong>${special}</strong> was walking by with a hammer in his hand. 
            I asked - What in the <strong>${verb}</strong> are you going to make? A <strong>${noun}</strong>? The boy responded - Noise!
            <br>
            <br>
            The End.</p>`;
            
            document.getElementById("com").innerHTML = "Hammer Time";

            document.getElementById("comedyOutput").innerHTML = `${para} <img src="images/comedy.svg" alt=""> 
            <button class = "storyButtons" onclick="reload()" id="reload">Reload Story Prompts</button>`;
            document.getElementById("inputSection4").style.display = "none";
        }
	
}

//show specific story div that relates to button clicked
function storyType(type) {
    let story = document.getElementById(type + "Story"); 
        if (type == 1) {
            return createStory("romance"); 
        }
        if (type == 2) {
            return createStory("action");
        }
        if (type == 3) {
            return createStory("thriller");
        }
        if (type == 4) {
            return createStory("comedy");
        }
             
};

//refreshes page
function reload () {
    window.location.reload();
}

//listens to keyboard event "Enter" and returns "enterStory" function
document.addEventListener('keydown', (event) => {
    let romance = document.getElementById("story1");
    let action = document.getElementById("story2");
    let thriller = document.getElementById("story3");
    let comedy = document.getElementById("story4");
    if (event.keyCode == 13 && romance.style.display == "block") {
        return enterStory('romance');
    }
    if (event.keyCode == 13 && action.style.display == "block") {
        return enterStory('action');
    }
    if (event.keyCode == 13 && thriller.style.display == "block") {
        return enterStory('thriller');
    }
    if (event.keyCode == 13 && comedy.style.display == "block") {
        return enterStory('comedy');
    }
});

//returns "createStory" function, which outputs the answer
function enterStory (y) {
    if (y == "romance") {
        return createStory("romance");
    }
    if (y == "action") {
        return createStory("action");
    }
    if (y == "thriller") {
        return createStory("thriller");
    }
    if (y == "comedy") {
        return createStory("comedy");
    }
}



 


