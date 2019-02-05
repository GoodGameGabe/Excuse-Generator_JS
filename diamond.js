function onload(){


/* List of Arrays */
var who = ["My bitch",
            "My dog",
            "Obama",
            "The Mailman"
            ];

var what = ["smacked my ass too hard",
            "robbed the bank",
            "got in a clown car accident",
            "played video games"
            ];

var when = ["yesterday",
            "the day after tomorrow",
            "just now",
            "today"
            ];

/* randomize function */
function rand_excuse(arr){
    var an_excuse = (Math.floor(Math.random() * arr.length));
    console.log(arr[an_excuse]);
    return (arr[an_excuse]);
    
}

var excuse = String(rand_excuse(who) + " " + rand_excuse(what) + " " + rand_excuse(when));

/* creates variable of random excuse */


function remove_prev(){
    var parent = document.getElementById("genText");
    var child = parent.firstChild;
    parent.removeChild(child);
}


function generate_new() {
    var excuses = String(rand_excuse(who) + " " + rand_excuse(what) + " " + rand_excuse(when));
    var parent = document.getElementById("genText");
    var child = document.createTextNode(excuses);
    parent.appendChild(child);
}

function new_excuse(){
    remove_prev();
    generate_new();
}

var buttonz = document.getElementById("buttonz");
buttonz.addEventListener("click", new_excuse);
    
}

