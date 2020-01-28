var player={
  __score:0,
  __live:3,
  __total:30
}

String.prototype.replaceAt=function(index, replacement) {
  return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

function start(){
     var name = document.getElementById('name').value
     var age = document.getElementById('age').value
     var level = document.getElementById('level').value;
     document.getElementById("info").style.display = "none";
     document.getElementById(`${level}`).style.display = "block";
}
    function hit(div_id,ans_id,ch){
        var div=" ",arr=" "; 
        div = document.getElementById(div_id).innerHTML;
        var ans = document.getElementById(ans_id).innerHTML;
        var indx=[];
        if(player.live>0){
          if(ans.indexOf(ch)>-1){
        for (let i in ans){
          if(ans[i]==ch){
           indx.push(i);
          }
        }
        }else{
          player.__live-=1;
          console.log(player.__live)
        }   
        for (let n in indx){
          arr = div.replaceAt(indx[n],ch)
         document.getElementById(div_id).innerHTML = arr;
        }
      }
      // if(arr.localeCompare(div)==0){
      //   player.__score+=10;
      //   console.log(player.__score)
      // }
  }

