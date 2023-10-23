const firebaseConfig = {
    apiKey: "AIzaSyDic5eQDYt1i3YiPwGp7egOn1OZGBJydrM",
    authDomain: "fec-fofocas.firebaseapp.com",
    databaseURL: "https://fec-fofocas-default-rtdb.firebaseio.com",
    projectId: "fec-fofocas",
    storageBucket: "fec-fofocas.appspot.com",
    messagingSenderId: "295568202550",
    appId: "1:295568202550:web:5c9012a688494ece76b197"
  };
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("userName");
  room_name = localStorage.getItem("room_name");

  function send()
  {
    msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
    name: user_name,
    message: msg,
    like: 0
});

document.getElementById("msg").value = "";
  }
function getData()
{
  firebase.database().ref('/'+ room_name).on("value",function(snapshot){;
  document.getElementById("output").innerHTML = "";
  snapshot.forEach(function(childsnapshot){
    childKey = childsnapshot.key;
    childData = childsnapshot.val();

    if(childKey != "purpose")
    {
        firebase_message_id = childKey;
        message_data = childData;
        console.log()
        var name = message_data['name'];
        message = message_data['message'];
        like = message_data['like'];
        name_with_tag = "<h4>"+ name + "<img class = 'user_tick' src = 'tick.png' width='25' height='25' </h4>"
        message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
        like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+ like+" onclick='updateLike(this.id)'>";
        var span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Curtidas: <button>" + like + "</button> </span><hr>";
      row = name_with_tag + message_with_tag + like_button + span_with_tag
    document.getElementById("output").innerHTML +=row
     }
    })
  })
}
getData();

function updateLike(){
  button_id = message_id;
  likes = document.getElementById(button_id).value;
  var updated_likes = number(likes) + 1;

  firebase.database().ref(room_name).child(message_id).update({
    like:updated_likes
  })
}

function logout(){
  window.location.replace("index.html");
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
}