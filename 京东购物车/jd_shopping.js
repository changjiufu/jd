window.onload=function(){
	// 京东大药房
	var shop1=document.getElementsByClassName('shop1')[0];
	var shop2=document.getElementsByClassName('shop2')[0];
	// console.log(shop1);
	var floater=document.getElementsByClassName('floater')[0];
    var num2=document.getElementsByClassName('num2')[0];
    shop1.onmouseover=function(){
    	shop1.style.color='red';
    	floater.style.transform='translateX(0px)';
    	floater.style.transition='all .5s';
    }
    shop2.onmouseover=function(){
    	shop2.style.color='red';
    	floater.style.transform='translateX(80px)';
    	floater.style.transition='all .5s';
    	shop1.style.color='black';
        num2.style.color='black';
    }

    // 点击全选选中所有的input
    var all_box=document.getElementsByClassName('all_box');
    var box_goods=document.getElementsByClassName('box_goods');
    // var box_goods1=box_goods[0];
    var box_key=document.getElementsByClassName('box_key');
    var all_price=document.getElementsByClassName('all_price');
     
        all_box[0].onclick=function(){
           for(var i=0;i<box_key.length;i++){
            box_goods[i].checked=all_box[0].checked;
            box_key[i].checked=all_box[0].checked;
            // if(all_box[0].checked){
                data();
            // }
        }
    }
        all_box[1].onclick=function(){
           for(var i=0;i<box_key.length;i++){
            box_goods[i].checked=all_box[1].checked;
            box_key[i].checked=all_box[1].checked;
            // console.log(all_box.checked);
            // if(all_box[1].checked==true){
                data();
            // }
        }
    }
     for(var i=0;i<box_key.length;i++){
        box_key[i].n=i;
        box_goods[i].s=i;
        // all_box[i].m=i;
        box_key[i].onclick=function(){
        // console.log(box_key[this.n].checked);
            box_goods[this.n].checked=box_key[this.n].checked;
            all_price[this.n].style.backgroundColor='#fff4e8';
            // if(box_key[i].checked){ 这是个坑
                data();
            // }
            

        }
        // console.log(all_box);
        // 点击一个或者两个全选显示或隐藏
        box_goods[i].onclick=function(){
            box_key[this.s].checked=box_goods[this.s].checked;
            for(var i=0;i<box_goods.length;i++){
                console.log(box_goods[i]);
            // if(box_goods[i].checked){这也是个坑
                  data();
                // }
            if(box_goods[0].checked&&box_goods[1].checked){
                all_box[i].checked=true;
                // console.log(all_box[this.s].checked);
            }
            else{
                all_box[i].checked=false;
            }
        }
            
        }

}
        // 购物车右边数量加减
        var court1=document.getElementsByClassName('court1');
        var court2=document.getElementsByClassName('court2');
        var num=document.getElementsByClassName('num');
        var price_1=document.getElementsByClassName('price_1');
        var one_price=document.getElementsByClassName('one_price');
        console.log(num.length);
        for(var i=0;i<num.length;i++){
              court1[i].n=i;
              court2[i].s=i;
              court1[i].onclick=function(){
                var number=num[this.n].value;
                var m=one_price[this.n].innerHTML;
                // console.log(m);
                   if(number>1){
                    number--;
                   }
                   num[this.n].value=number;
                   price_1[this.n].innerHTML=(m*number).toFixed(2);
                   data();
              }
              court2[i].onclick=function(){
                var number=num[this.s].value;
                var m=one_price[this.s].innerHTML;
                  number++;
                  num[this.s].value=number;
                  price_1[this.s].innerHTML=(m*number).toFixed(2);
                  box_key[this.s].checked=true;
                  box_goods[this.s].checked=true;
                  data();
        }
    }
    
        // 最下边数量
        var goods_num=document.getElementsByClassName('goods_num')[0];
        var allprice=document.getElementsByClassName('allprice')[0];
        var price_1=document.getElementsByClassName('price_1');
        console.log(goods_num);

    // 引用一个函数
    function data(){
        var p=0;
        var x=0;
        for(var i=0;i<num.length;i++){
            // p=Number(num[0].value)+Number(num[1].value);
            // console.log(p);
            if(box_goods[i].checked){
                p+=Number(num[i].value);
                x+=Number((price_1[i].innerHTML));
            }
        }
        goods_num.innerHTML=p;
        allprice.innerHTML=x.toFixed(2);
    }
    






}