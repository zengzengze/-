 //商品增加
 var plus=document.getElementsByClassName('count-img-plus');

 //商品减少
 var minus=document.getElementsByClassName('count-img-minus');

 //商品数量
 var inp=document.getElementsByClassName('input');

 //商品价格
 var price=document.getElementsByClassName('price');

 //店铺全选
 var sradio=document.getElementsByClassName('radio');

 //商品单选
 var cradio=document.getElementsByClassName('radio1');

 //全选
 var allradio=document.getElementById('radio2');

 //总计
 var totalprice=document.getElementById('totalprice');

  //结算
var count1=document.getElementById('count');

 //父类盒子
var boxs=document.getElementsByClassName('commod-con-bottom');

var settle=document.getElementsByClassName('settle');

//计算共有多少件商品
function pursum(){
    var a=cradio.length;
    purcar.innerHTML=a;
    purnum.innerHTML=a;
}

pursum()

//计算价格
function by(){
    var sum=0;
     var count=0;
     for(let i=0;i<cradio.length;i++){
             if(cradio[i].getAttribute('id')=='radiocolor'){
                 count++;
                 sum+=inp[i].value*price[i].innerHTML;
                 sum=Math.floor(sum * 100) / 100;
                 totalprice.innerHTML=sum;
                 settle[0].setAttribute('id','settle');
             }
         }
         if(count==0){
            totalprice.innerHTML=sum;
            settle[0].removeAttribute('id');
            allradio.removeAttribute('class');
         }
         count1.innerHTML=count;
         
     }

     by()

     //全选
     function all(){
         for(let i=0;i<sradio.length;i++){
             sradio[i].removeAttribute('id');
             for(let j=0;j<cradio.length;j++){
                 cradio[j].removeAttribute('id');
             }
         }
     }


     //取消全选
     function noall(){
         for(let i=0;i<sradio.length;i++){
             sradio[i].setAttribute('id','radiocolor');
             for(let j=0;j<cradio.length;j++){
                 cradio[j].setAttribute('id','radiocolor');
             }
         }
     }

     //遍历所有商品是否全部选中
     function sumall(){
        var num=0;
         for(let i=0;i<cradio.length;i++){
             if(cradio[i].getAttribute('id')=='radiocolor'){
                allradio.removeAttribute('class');
                num++;
             }
         }
         if(num==cradio.length){
             allradio.setAttribute('class','radiocolor');
         }
     }
     sumall();


     //遍历shop商品是否选中
     function shopall(){
        for(var j=0;j<sradio.length;j++){
            var cradio1=sradio[j].parentNode.parentNode.parentNode.children[1].getElementsByClassName('radio1');
            var count=0;
            for(let k=0;k<cradio1.length;k++){
                if(cradio1[k].getAttribute('id')=='radiocolor'){
                    count++;
                }
            }
            if(count==cradio1.length){
                sradio[j].setAttribute('id','radiocolor');
            }else{
                sradio[j].removeAttribute('id');
            }
        }
     }

    shopall()

    //单个选中
 function call(){
    for(let i=0;i<cradio.length;i++){
        cradio[i].onclick=function(){
            if(cradio[i].getAttribute('id')=='radiocolor'){
            //  console.log(i);
                cradio[i].removeAttribute('id');
            }else{
                cradio[i].setAttribute('id','radiocolor');
            }
        shopall()
        sumall()
        by()
        }
    }
}

call();

 //店铺里面全选
 function sall(){
    for(let i=0;i<sradio.length;i++){
        sradio[i].onclick=function(){
            if(sradio[i].getAttribute('id')=='radiocolor'){
                sradio[i].removeAttribute('id');
                for(let k=0;k<boxs.length;k++){
                    var cradio=boxs[i].getElementsByClassName('radio1');
                    for(let j=0;j<cradio.length;j++){
                        cradio[j].removeAttribute('id');
                    }
                } 
            }
            else{
                sradio[i].setAttribute('id','radiocolor');
                for(let k=0;k<boxs.length;k++){
                    var cradio=boxs[i].getElementsByClassName('radio1');
                    for(let j=0;j<cradio.length;j++){
                        cradio[j].setAttribute('id','radiocolor');
                    }
                }
            }
    //修改店铺全选之后遍历一次所有商品是否全部选中然后重新计算价格
        sumall()
        by()
        }   
    }
}  

sall()




 //数量变化
 for(let i=0;i<plus.length;i++){
     plus[i].onclick=function(){
          inp[i].value=parseInt(inp[i].value)+1;
          by();
     }
     minus[i].onclick=function(){
         if(parseInt(inp[i].value)-1<1){
             inp[i].value=inp[i].value;
         }else{
             inp[i].value=parseInt(inp[i].value)-1;  
         }  
         by()  
     }
 }



//检测商品是否全部选中，“是”全选框打钩，“否”反之
function al(){
     if(allradio.getAttribute('class')=='radiocolor'){
         allradio.removeAttribute('class');
        all();
     }else{
         allradio.setAttribute('class','radiocolor');
         noall();
     }
     by();
 }

//关闭小广告
clos.onclick=function(){
    var banner=document.getElementById('banner');
    banner.style.display='none';
 }

var con=document.getElementById('f-r-con');
var con1=document.getElementById('f-r-con1');


manage.onclick=function(){
   if(con.getAttribute('class')=='hide' && manage.innerHTML=='完成'){
    manage.innerHTML='管理';
    con1.setAttribute('class','hide');
    con.removeAttribute('class');
   }else{
       manage.innerHTML='完成';
       con.setAttribute('class','hide');
       con1.removeAttribute('class');
   }
}


del.onclick=function(){
    confirm('是否要删除商品!');
    for(let j=0;j<sradio.length;j++){
        if(sradio[j].getAttribute('id')=='radiocolor'){
            sradio[j].parentNode.parentNode.parentNode.parentNode.removeChild(sradio[j].parentNode.parentNode.parentNode);
            j--;
        }
    }
    for(let i=0;i<cradio.length;i++){
        if(cradio[i].getAttribute('id')=='radiocolor'){
           cradio[i].parentNode.parentNode.parentNode.removeChild(cradio[i].parentNode.parentNode);
           i--;
        }
    }
    by()
    pursum()
    sall()
    call()
    pursum()
}
