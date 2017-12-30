window.onload=function(){// 促销
	var cuxiao=document.getElementById('cuxiao');
	var items=document.getElementById('items');
	var box=document.getElementById('box');
	var box1=document.getElementById('box1');
	cuxiao.onmouseover=function(){
			box2.style.display='block';
			box1.style.display='none';
			box.style.transform='translateX(0px)';
			box.style.transition='all 0.3s';
	}
	items.onmouseover=function(){
			box2.style.display='none';
			box1.style.display='block';
			box.style.transform='translateX(45px)';
	}
// 选项卡整合

    var choose_slide=document.getElementsByClassName('choose_slide')[0];
    var choose_content=document.getElementsByClassName('choose_content')[0].children;
    // console.log(choose_content);
    var  ul_list=document.getElementsByClassName('ul_list')[0].children;
    // console.log(ul_list);
    for(var i=0;i<ul_list.length;i++){
        ul_list[i].b=i;
        ul_list[i].onmouseover=function(){
            for(var i=0;i<ul_list.length;i++){
               choose_content[i].style.display='none'; 
            }
            choose_content[this.b].style.display='block';
            choose_slide.style.transform='translateX('+(this.b*78)+'px)'
        }
            
    }


// 京东搜索框js
            var ipt=document.getElementById('ipt');
            var m=["卢锡安-操作你看不懂","放逐之刃-秀的你看花眼","披甲龙龟-肉的你不想打"];
            var mytime2=setInterval(run,2000);
            var i=0;
            function run(){
                if(i>=m.length){
                    i=0;
                }
                ipt.placeholder=m[i];
                i++;
                
                
                // console.log(i);
                ipt.onfocus=function(){
                    clearInterval(mytime2);
                }
                ipt.onblur=function(){
                    mytime2=setInterval(run,2000);
                }
            }





	// 轮播图实现整合
	slideimg("myimg",true);
    slideimg("myimg2",false);
    slideimg("myimg3",true);
    slideimg("myimg4",true);
    slideimg("myimg5",true);





    function slideimg(id,x){
    var myimg=document.getElementById(id);
	// var isRun=true;
	var n=1;
	var myli=myimg.getElementsByClassName('img_list')[0].children;
	var mycircle=myimg.getElementsByClassName('img_circle')[0].children;

    if(x==true){
		var img_left= myimg.getElementsByClassName('img_left')[0];
		var img_right= myimg.getElementsByClassName('img_right')[0];

		img_left.onclick=function(){
    	    n-=2;
    	runimg();
	    }
	    img_right.onclick=function(){
	    	// n++;
	    	runimg();
	    } 
    }
    // console.log(myli.length);
	var mytime=setInterval(runimg,2000);
	function runimg(){
		for(var i=0;i<myli.length;i++){
         myli[i].style.opacity=0; 
         mycircle[i].className='';   
	    }
         n = n >= myli.length ? 0 : n;
         n = n < 0 ? myli.length-1 : n;
	     myli[n].style.opacity=1;
	     mycircle[n].className='active';
         n++; 
         // console.log(n);
	}
	// 圆点触发事件
	for(var s=0;s<mycircle.length;s++){
        	mycircle[s].num=s;
        	mycircle[s].onmouseover=function(){
        		n=this.num;
                // console.log(n);
        		runimg();
        	}
        }
     // 图片触发事件，定时器停止
        myimg.onmouseover=function(){
        	// isRun=false;
        	clearInterval(mytime);
        }
        myimg.onmouseleave=function(){
        	mytime=setInterval(runimg,2000);
        	// isRun=true;
        }
    
    
} 
// 轮播js结束
   
   // 定时器
    // function mytime1(){
    // 	// 截止时间
    //     var EndTime= new Date('2017/08/1 22:00:00'); 
    //     // 现在时间.

    //     var NowTime = new Date();
    //     // 时间差
    //     var t =EndTime.getTime() - NowTime.getTime();

    //     var hour=Math.floor(t/1000/60/60%24);
    //     var minute=Math.floor(t/1000/60%60);
    //     var second=Math.floor(t/1000%60);
    //     if(hour<10&&hour>0){
    //         document.getElementById('hour').innerHTML='0'+(hour.toString());
    //     }
    //     if(minute<10&&minute>0){
    //        document.getElementById('minute').innerHTML='0'+(minute.toString());  
    //     }else{
    //        document.getElementById('minute').innerHTML=minute; 
    //     } 
    //     if (second<10&&second>0){
    //         document.getElementById('second').innerHTML='0'+(second.toString());
    //     }else{
    //         document.getElementById('second').innerHTML=second;
    //     }
        
    // }
    // setInterval(mytime1,1000);
    // function mytime1(){
        setInterval (function(){
             var time=new Date();
             var h=time.getHours()%1;
             var m=59-time.getMinutes();
             var s=59-time.getSeconds();

             document.getElementById('hour').innerHTML=pad(h);
             document.getElementById('minute').innerHTML=pad(m);
             document.getElementById('second').innerHTML=pad(s);
        },1000);
    // }

    function pad(num){
        num=num.toString();
        return num=num.length==2?num:(0+num.toString());
    }


    // 轮播图1000px
    var myul_lunbo=document.getElementsByClassName('myul_lunbo')[0];
    // console.log(myul_lunbo);
    var pic_left=document.getElementById('pic_left');
    var pic_right=document.getElementById('pic_right');
    pic_left.onclick=function(){
        myul_lunbo.style.transform='translateX(-1000px)';
        myul_lunbo.style.transition='all .5s';
    }
    // console.log(myul_lunbo.style.transform);
    pic_right.onclick=function(){
        myul_lunbo.style.transform='translateX(0px)';
        myul_lunbo.style.transition='all .5s';
    }







    // 滑动
    rotateImg('list_brand');
    rotateImg('list_brand2');
    rotateImg('list_brand3');
    rotateImg('list_brand4');
    rotateImg('list_brand5');



    function rotateImg(clas){
        var fixslid=document.getElementsByClassName(clas)[0];
        var rotate=fixslid.getElementsByClassName('brand_ul')[0];
        var rotate_left=fixslid.getElementsByClassName('brand_left')[0];
        var rotate_right=fixslid.getElementsByClassName('brand_right')[0];
        // console.log(rotate);
        var m = rotate.offsetWidth/fixslid.offsetWidth; 
        var wid=rotate.offsetWidth/m;
        // console.log(m);
        var n=0;


        rotate_left.onclick=function(){
            n++;
            if(n>=1){
                n=0;
            }
            // console.log(n);
            rotate.style.transform='translateX('+(wid*n)+'px)';
        }
        rotate_right.onclick=function(){
            n--;
            if(n<=(1-m)){
                n=(1-m);
            }
            // console.log(n);
            rotate.style.transform='translateX('+(wid*n)+'px)';
            rotate.style.transition='all .5s';
        }
    }



    // 滚动导航
    // 固定位置
    // var left = $(".like").offset().left;
    // $(".nav_left").css("left",(left-46)+"px");
    // $(window).resize(function(){
    //     left = $(".like").offset().left;
    //     $(".nav_left").css("left",(left-46)+"px");
    // });
    // 左边导航栏定位
    var share_left=document.getElementsByClassName('share_quality')[0];
    var nav_left=document.getElementsByClassName('nav_left')[0];
    var x=share_left.offsetLeft;
    // console.log(x);
    nav_left.style.left=(x-70)+'px';
    window.onresize=function(){
        var x=share_left.offsetLeft;
        if(x>70){
            nav_left.style.left=(x-70)+'px';
        }
        else{
            nav_left.style.left=(x+15)+'px';
        }
    }
    // 页面加载后 执行一次 滚动函数
    Scroll();
    // 封装滚动函数
    function Scroll() {
        var Wtop = ($(window).scrollTop())+70;
        var num = $(".target").length;
        console.log(Wtop,num);
        var n = 0;
        // 导航  与  吸顶盒  显示／隐藏
        if ( Wtop >= $(".target").eq(0).offset().top ) {
            $(".nav_left").slideDown();
            $(".absorb").css("display","block");
        }else {
            $(".nav_left").slideUp();
            $(".absorb").css("display","none");
        }
        //  判断 目标区域 
        for (var i = 0; i < num; i++) {
            // 最后一个区间
            if (Wtop >= $(".target").eq(num-1).offset().top ) {
                n = num-1;
                continue;
            }
            // 获取 区间
            if (Wtop >= $(".target").eq(i).offset().top && Wtop <= $(".target").eq(i+1).offset().top) {
                n=i;
            }
        }
        //  导航条 加 类名
        $(".nav_all a").removeClass("samered");
        $(".nav_all a").eq(n).addClass("samered");
    }
    // 页面 滚动到目标区域 相对应导航  显示
    $(window).scroll(function(){
        Scroll();
    });
    // 点击 导航  页面滚动 到 目标 位置 
    $(".nav_all li").click(function(){
        var n = $(this).index();
        var top = $(".target").eq(n).offset().top+240;
        console.log(top);
        $("body,html").animate({
            scrollTop: top-300
        },300);
    });
    // 回到顶部
     
        $(".return1").click(function(){
            $('body,html').animate({scrollTop:0},300);
        })
        $(".ttop").click(function(){
            $('body,html').animate({scrollTop:0},300);
        })


}
	























