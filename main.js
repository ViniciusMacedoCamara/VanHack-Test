function myFunction() {

}

var cardBlock = document.createElement('div');

type = Math.floor(Math.random() * 5); // (0/Premium, 1/Leap, 2/Mission, 3/VanHackthon)

if (type == 0) { // 0/Premium properties

} else if (type == 1) { // 1/Leap properties

} else if (type == 2) { // 2/Mission properties

} else if (type == 3) { // 3/VanHackthon properties

} else { // Open properties

}


for (i = 0; i < 7; i++) {

    // cardBlock.setAttribute('class', 'row');
    cardBlock.innerHTML += `<div class="fora">
    <div class="overlay center mission-color">
        <h5>Recruiting<br> Mission</h5>
    </div>
    <div class="card">
        <div class="row no-gutters">
            <div class="col-auto">
                <img src="https://via.placeholder.com/99x200" class="img-fluid">
            </div>
            <div class="col">
                <div class="card-block">
                    <h4 class="card-title">Event Name</h4>
                    <span class="card-text">Date: June 17th, 8 AM</span><br>
                    <span class="card-text">Local: Vancouver, CA</span><br>
                    <span class="card-text">Deadline: 06/17/2020</span><br>
                    <div class="btn-detail">
                        <button type="button" class="btn btn-outline-primary" data-toggle="modal" data-target="#exampleModal" id="number">See Details</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div`;


}

var a = 1,
    b = 2;
var div = document.createElement('div');
div.setAttribute('class', 'post block bc2');
div.innerHTML = `
    <div class="parent">
        <div class="child">${a}</div>
        <div class="child">+</div>
        <div class="child">${b}</div>
        <div class="child">=</div>
        <div class="child">${a + b}</div>
    </div>
`;
// document.getElementById('loop').appendChild(div);

document.getElementById("loop").appendChild(cardBlock);