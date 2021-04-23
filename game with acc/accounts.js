		
function save_account(acc){
    fetch('http://hellothere.fun/accounts/save_data.php', {
          method: "POST",
          body: JSON.stringify(acc),
          headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => response.json()) 
        .then(json => console.log(json))
        .catch(err => console.log(err));   
    
}

let x45l21 = {name:"(not logged in)", gameObjects:[{category:"bin",type:0,x:300,y:300}], money:0, level:1};
function load_account(){
    let _data = [];
    const request = async () => {
        const response = await  fetch('http://hellothere.fun/accounts/load_data.php', {
          method: "POST",
          body: JSON.stringify(_data),
          headers: {"Content-type": "application/json; charset=UTF-8"}
        })
    const json = await response.json();
    
    x45l21 = JSON.parse(json.json_data); //JSON object from the string, stored in database
    x45l21.name = json.username;
    }
    request();
}

load_account();
