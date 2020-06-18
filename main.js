// JSON to simulate a WebService API and consume it
var types = [{
        "id": "1",
        "overlayTitle": "Recruiting Mission",
        "overlay": "mission-color",
        "eventType": "3",
        "croppedImage": "https://iili.io/Jrl6l4.jpg", //Toronto
        "fullImage": "https://i.imgur.com/wxl2maU.jpg",
        "eventName": "Recruiters Talk",
        "eventLocal": "Toronto / CA",
        "eventDate": "06/20/2020 9pm",
        "eventDeadline": "06/17/2020",
        "isPremium": false
    },
    {
        "id": "2",
        "overlayTitle": "Leap",
        "overlay": "leap-color",
        "eventType": "2",
        "croppedImage": "https://iili.io/Jrl6l4.jpg", //Toronto
        "fullImage": "https://i.imgur.com/wxl2maU.jpg",
        "eventName": "Inside Devs Head",
        "eventLocal": "Toronto / CA",
        "eventDate": "06/21/2020 7pm",
        "eventDeadline": "06/18/2020",
        "isPremium": false
    },
    {
        "id": "3",
        "overlayTitle": "VanHackthon",
        "overlay": "hackthon-color",
        "eventType": "4",
        "croppedImage": "https://iili.io/JrlvDX.jpg", //Burnaby
        "fullImage": "https://i.imgur.com/sA5pz3F.jpg",
        "eventName": "Insights from Specialists",
        "eventLocal": "Burnaby / CA",
        "eventDate": "06/25/2020 9pm",
        "eventDeadline": "06/23/2020",
        "isPremium": false
    },
    {
        "id": "4",
        "overlayTitle": "",
        // "overlay": "mission-color",
        "eventType": "1",
        "croppedImage": "https://iili.io/JrleRI.jpg", //Vancouver
        "fullImage": "https://i.imgur.com/9yLlXUK.jpg",
        "eventName": "Webinar with John Doe",
        "eventLocal": "Vancouver / CA",
        "eventDate": "06/22/2020 8pm",
        "eventDeadline": "06/12/2020",
        "isPremium": false
    },
    {
        "id": "5",
        "overlayTitle": "",
        // "overlay": "mission-color",
        "eventType": "1",
        "croppedImage": "https://iili.io/JrlPUl.jpg", //Seattle
        "fullImage": "https://i.imgur.com/HpJguqE.jpg",
        "eventName": "MeetUp with Talhah G.",
        "eventLocal": "Seattle / USA",
        "eventDate": "06/28/2020 5pm",
        "eventDeadline": "06/25/2020",
        "isPremium": false
    },
    {
        "id": "6",
        "overlayTitle": "",
        // "overlay": "mission-color",
        "eventType": "5",
        "croppedImage": "https://iili.io/JrlSxn.jpg", //Paris
        "fullImage": "https://i.imgur.com/avdtcPa.jpg",
        "eventName": "XCLSV Event w/ Ilya",
        "eventLocal": "Paris / FR",
        "eventDate": "07/20/2020 9pm",
        "eventDeadline": "07/17/2020",
        "isPremium": true
    }
];

//0 = All | 1 = MeetUp & Open | 2 = Leap | 3 = Mission | 4 = VanHackthon | 5 = Premium

//Cropped Images
// https://iili.io/JrleRI.jpg Vancouver
// https://iili.io/JrlvDX.jpg Bunaby
// https://iili.io/JrlSxn.jpg Paris
// https://iili.io/Jrl6l4.jpg Toronto
// https://iili.io/JrlPUl.jpg Seattle

//Full Images
// https://i.imgur.com/9yLlXUK.jpg Vancouver
// https://i.imgur.com/sA5pz3F.jpg Burnaby
// https://i.imgur.com/avdtcPa.jpg Paris
// https://i.imgur.com/wxl2maU.jpg Toronto
// https://i.imgur.com/HpJguqE.jpg Seattle


//Constructor
generateEvents(0);

var premium = "n";

// Main Function to generate events
function generateEvents(id) {

    document.getElementById("loop").innerHTML = "";

    var premium = "";
    var premiumText = "";
    var premiumButton = "btn-outline-primary";

    for (i = 0; i < types.length; i++) {
        var item = types[i];

        if (item.isPremium == true) {
            premium = "premium";
            premiumText = "premium-text";
            premiumButton = "btn-outline-light";
        }

        if (id == 0 || id == item.eventType) {
            document.getElementById("loop").innerHTML += `
            <div class="col-md-6">
      			<div class="fora mt-4">
                <div class="overlay center ` + item.overlay + ` ">
                    <h5> ` + item.overlayTitle + `<br></h5>
                </div>
                <div class="card ` + premium + ` ">
                    <div class="row no-gutters">
                        <div class="col-auto">
                            <img src="` + item.croppedImage + `" class="img-fluid radius">
                        </div>
                        <div class="col">
                            <div class="card-block">
                                <h4 class="card-overlayTitle">` + item.eventName + `</h4>
                                <span class="card-text ` + premiumText + `">Date: ` + item.eventDate + `</span><br>
                                <span class="card-text ` + premiumText + `">Local: ` + item.eventLocal + `</span><br>
                                <span class="card-text ` + premiumText + `">Deadline: ` + item.eventDeadline + `</span><br>
                                <div class="btn-detail">
                                    <button type="button" class="btn ` + premiumButton + `" data-toggle="modal" data-target="#modal" id="number" onclick="showModal(` + item.id + `)" >See Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                `;
        }
    }
}

// Function to show the "See Details" modal
function showModal(id) {

    for (i = 0; i < types.length; i++) {
        var item = types[i];

        if (item.id == id) {
            document.getElementById("showModal").innerHTML = `
            <div class="modal-header">
                <h5 class="modal-title" id="modalLabel">` + item.eventName + `</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <img src="` + item.fullImage + `" class="img-fluid">
                <div class="row">
                    <div class="col-md-6">
                        <h4 class="card-title mt-4">` + item.eventName + `</h4>
                    </div>
                    <div class="col-md-6">
                        <div class="mt-3">
                            <div class="positionTweet">
                                <a href="https://twitter.com/intent/tweet?text=See%20this%20awesome%20event%20from%20VanHack%20@GoVanHack"><i class="btn-icon"></i><span class="btn-text">Tweet</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <span class="card-text">Date: ` + item.eventDate + `</span><br>
                <span class="card-text">Local: ` + item.eventLocal + `</span><br>
                <span class="card-text">Deadline:` + item.eventDeadline + `</span><br>
                <hr>
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at nunc sem. Maecenas ut ligula id ipsum cursus rhoncus et sit amet massa. Pellentesque in nisi fringilla, viverra libero sed, sodales justo. Morbi vel condimentum orci. Aenean vulputate eros
            sit amet arcu tempor, nec efficitur enim aliquet. Morbi vel condimentum orci. Aenean vulputate eros sit amet arcu tempor, nec efficitur enim aliquet.
                </span>
                <div class="modal-footer mt-4">
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-dismiss="modal" data-target="#modalApply" onclick="responseModal(` + item.isPremium + `)">Apply</button>
                </div>
            </div>
            `;
        }
    }
}

// Function to response for events application
function responseModal(isPremium) {

    var url_string = window.location.href;
    var url = new URL(url_string);
    premium = url.searchParams.get("premium");

    if (premium == "y" || (premium != "y" && isPremium == false)) {
        //Premium ok
        document.getElementById("applyModal").innerHTML = `
        <div class="modal-header">
        <h5 class="modal-title" id="modalLabel">Everything went well!</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body text-center">
            <svg class="bi bi-check2-circle m-4 " width="100" viewBox="0 0 16 16" fill="#41B809" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd " d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z "/>
                    <path fill-rule="evenodd " d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z "/>
                </svg>
    
            <h6 class="card-title mt-4">Your application was successfully approved.</h4>
                <div class="modal-footer mt-4">
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Ok</button>
                </div>
        </div>`;
    } else {
        //Not premium
        document.getElementById("applyModal").innerHTML = `
        <div class="modal-header">
            <h5 class="modal-title" id="modalLabel">Ops, something went wrong!</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body text-center">
            <svg class="bi bi-x-circle m-4" width="100" viewBox="0 0 16 16" fill="#D93131" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
            </svg>

            <h6 class="card-title mt-4">You're not a premium member.</h4>

                <hr>

                <div class="row">
                    <div class="col-md-12 text-left">
                        <span>
                            <h5>Premium benefits: </h5>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at nunc sem. Maecenas ut ligula id ipsum cursus rhoncus et sit amet massa. Pellentesque in nisi fringilla, viverra libero sed, sodales justo. Morbi vel condimentum orci. Aenean vulputate eros
                sit amet arcu tempor, nec efficitur enim aliquet. Morbi vel condimentum orci. Aenean vulputate eros sit amet arcu tempor, nec efficitur enim aliquet.
                    </span>
                    </div>
                </div>
                <div class="modal-footer mt-4">
                    <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Ok</button>
                    <button type="button" class=" premium-button"  data-dismiss="modal" data-toggle="modal" data-target="#modalPremium" onclick="bePremium()"></button>
                </div>
        </div>`;
    }


}

// Function to be a premium member
function bePremium() {

    document.getElementById("premiumModal").innerHTML = `
    <div class="modal-header ">
        <h5 class="modal-title " id="modalLabel ">Congratulations!</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true ">&times;</span>
        </button>
    </div>
    <div class="modal-body text-center ">
        <svg class="bi bi-check2-circle m-4 " width="100 " viewBox="0 0 16 16 " fill="#41B809 " xmlns="http://www.w3.org/2000/svg ">
            <path fill-rule="evenodd " d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z "/>
            <path fill-rule="evenodd " d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z "/>
        </svg>

        <h6 class="card-title mt-4 ">You are now a Premium Member.</h4>
            <div class="modal-footer mt-4 ">
                <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="responsePremium()">Ok</button>
            </div>
    </div>`;
}

// Function to set premium as Y and get it by de url
function responsePremium() {
    window.location.href = 'index.html?premium=y'
}