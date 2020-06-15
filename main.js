var types = [{
        "overlayTitle": "Recruiting Mission",
        "overlay": "mission-color",
        "eventType": "3",
        "eventImage": "https://iili.io/Jrl6l4.jpg", //Toronto
        "eventName": "Recruiters Talk",
        "eventLocal": "Toronto / CA",
        "eventDate": "06/20/2020 9pm",
        "eventDeadline": "06/17/2020",
        "isPremium": false
    },
    {
        "overlayTitle": "",
        // "overlay": "mission-color",
        "eventType": "1",
        "eventImage": "https://iili.io/JrleRI.jpg", //Vancouver
        "eventName": "Webinar with John Doe",
        "eventLocal": "Vancouver / CA",
        "eventDate": "06/22/2020 8pm",
        "eventDeadline": "06/12/2020",
        "isPremium": false
    },
    {
        "overlayTitle": "VanHackthon",
        "overlay": "hackthon-color",
        "eventType": "4",
        "eventImage": "https://iili.io/JrlvDX.jpg", //Bunaby
        "eventName": "Insights from Specialists",
        "eventLocal": "Burnaby / CA",
        "eventDate": "06/25/2020 9pm",
        "eventDeadline": "06/23/2020",
        "isPremium": false
    },
    {
        "overlayTitle": "Leap",
        "overlay": "leap-color",
        "eventType": "2",
        "eventImage": "https://iili.io/Jrl6l4.jpg", //Toronto
        "eventName": "Inside Devs Head",
        "eventLocal": "Toronto / CA",
        "eventDate": "06/21/2020 7pm",
        "eventDeadline": "06/18/2020",
        "isPremium": false
    },
    {
        "overlayTitle": "",
        // "overlay": "mission-color",
        "eventType": "1",
        "eventImage": "https://iili.io/JrlPUl.jpg", //Seattle
        "eventName": "MeetUp with Talhah G.",
        "eventLocal": "Seattle / USA",
        "eventDate": "06/28/2020 5pm",
        "eventDeadline": "06/25/2020",
        "isPremium": false
    },
    {
        "overlayTitle": "",
        // "overlay": "mission-color",
        "eventType": "5",
        "eventImage": "https://iili.io/JrlSxn.jpg", //Paris
        "eventName": "XCLSV Event w/ Ilya",
        "eventLocal": "Paris / FR",
        "eventDate": "07/20/2020 9pm",
        "eventDeadline": "07/17/2020",
        "isPremium": true
    }
];

//0 = All | 1 = MeetUp & Open | 2 = Leap | 3 = Mission | 4 = VanHackthon | 5 = Premium

//https://iili.io/JrleRI.jpg Vancouver
//https://iili.io/JrlvDX.jpg Bunaby
//https://iili.io/JrlSxn.jpg Paris
//https://iili.io/Jrl6l4.jpg Toronto
//https://iili.io/JrlPUl.jpg Seattle

myFunction1(0);

function myFunction1(id) {

    document.getElementById("loop").innerHTML = "";
    // premium
    // premium-text

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
            document.getElementById("loop").innerHTML += `<div class="col-md-6">
      			<div class="fora mt-4">
              <div class="overlay center ` + item.overlay + ` ">
                  <h5> ` + item.overlayTitle + `<br></h5>
              </div>
                  <div class="card ` + premium + ` ">
                      <div class="row no-gutters">
                          <div class="col-auto">
                              <img src="` + item.eventImage + `" class="img-fluid radius">
                        	</div>
                        	<div class="col">
                            	<div class="card-block">
                                <h4 class="card-overlayTitle">` + item.eventName + `</h4>
                                <span class="card-text ` + premiumText + `">Date: ` + item.eventDate + `</span><br>
                                <span class="card-text ` + premiumText + `">Local: ` + item.eventLocal + `</span><br>
                                <span class="card-text ` + premiumText + `">Deadline: ` + item.eventDeadline + `</span><br>
                                <div class="btn-detail">
                                    <button type="button" class="btn ` + premiumButton + `" data-toggle="modal" data-target="#exampleModal" id="number">See Details</button>
                                </div>
                            	</div>
                        	</div>
                    	</div>
                	</div>
            	</div>
        		</div>`;
        }
    }
}