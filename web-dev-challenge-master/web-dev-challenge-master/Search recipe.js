
var list = [];   
var htm = ''; 
function filterList(value){
    fetch('http://www.recipepuppy.com/api/?i=' + value, {
         type: "GET",
    })
    .then(function(response) {
        var res = response.json();
        list = response.results;
        response.results.forEach(element => {
            htm = htm + `
            <li>
                <div style="width: 100%;height: 100%;background-repeat: repeat-y;background-repeat: repeat-x;background-size: cover;background-image: url(element.thumbnail);">
                </div>    
            </li>
            `
        });

        document.getElementById('myUL').innerHTML = htm;
    })
    .then(function(myJson) {
        console.log(myJson);
    });
}
    
function myFunction() {
    fetch('http://www.recipepuppy.com/api')
    .then(function(response) {
        var res = response.json();
        list = response.results;
        response.results.forEach(element => {
            htm = htm + `
            <li>
                <div style="width: 100%;height: 100%;background-repeat: repeat-y;background-repeat: repeat-x;background-size: cover;background-image: url(element.thumbnail);">
                </div>    
            </li> `
            
        });

        document.getElementById('myUL').innerHTML = htm;
    });
}
