function start(){
     var name = document.getElementById('name').value
     var age = document.getElementById('age').value
     var level = document.getElementById('level').value;
     document.getElementById("info").style.display = "none";
     document.getElementById(`${level}`).style.display = "block";
}
    function hit(div_id,ans_id,ch){
        
        var div = document.getElementById(ans_id).innerHTML;
        var ans = document.getElementById(div_id).innerHTML;

        var indx=[];
        for (let i of ans){
          if(ans[i]==ch){
           indx.push(i);
          }
        }   
        for (let n in indx){
         var arr = div.replaceAt(indx[n],"ch");
        }    
    }

