var player = {
  __score: 0,
  __live: 3,
  __total: 30
}

function check(){
if(document.getElementById('name').value == "" && document.getElementById('age').value=="" ){
  document.getElementById("start").disabled = true;
}else{
  document.getElementById("start").disabled = false;
}
}

setInterval(check,2000);

String.prototype.replaceAt = function (index, replacement) {
  return this.substring(0, index) + replacement + this.substring((index + 1), this.length + 1);
}

function quit(){
  document.getElementById(document.getElementById('level').value).style.display = "none";
  document.getElementById('quit').style.display = "block";
  document.getElementById("score").innerHTML=player.__score;

}

function start(){
  var name = document.getElementById('name').value;
  var age = document.getElementById('age').value
  var level = document.getElementById('level').value;
  document.getElementById('hi').innerHTML=name;
  document.getElementById("info").style.display = "none";
  document.getElementById(`${level}`).style.display = "block";
  console.log(document.getElementById(`${level}`).style.display)
}


function hit(div_id, ans_id, ch) {
  var div = " ", arr = " ";
  div = document.getElementById(div_id).innerHTML;
  var ans = document.getElementById(ans_id).innerHTML;
  ans = ans.split("").join(" ");

  var indx = [];

  if (player.__live > 0 && ans.localeCompare(document.getElementById(div_id).innerHTML) != 0) {
    if (ans.indexOf(ch) > -1) {
      for (let i in ans) {
        if (ans[i] == ch) {
          indx.push(i);
        }
      }
    } else {
      player.__live -= 1;
      console.log("lost")
    }

    for (let n in indx) {

      arr = document.getElementById(div_id).innerHTML.split("");
      arr[indx[n]] = ch;

      arr = arr.join("")
      document.getElementById(div_id).innerHTML = arr;

    }
    if (arr.localeCompare(ans) == 0) {
      player.__score += 10;
      console.log(player.__score)

    }
  }

}
