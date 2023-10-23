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
  
  userName = localStorage.getItem("userName");
   document.getElementById("nomeDeUsuario").innerHTML = "Bem vindo " + userName + "!";

   function addRoom()
   {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"    
    });

    localStorage.setItem("room_name", room_name);

    window.location = "fec_page.html";
   }
   function getData() {  
    firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = " ";
          snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  
  }

  getData();

  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "fec_page.html";
  }

  function logout()
  {
    localStorage.removeItem("userName");
    localStorage.removeItem("room_name");
      window.location = "index.html";
  }

