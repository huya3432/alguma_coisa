function back() 
{
    window.location = "activity_1.html";
}
function getScore()
{
    Score = localStorage.getItem("score"); 
document.getElementById("Update").innerHTML = "<h1> pontuação: " + Score + "</h1>"
}