$(document).ready(function(){
	var key=$('.box_key').length;
	var goods=$('.box_goods').length;
    console.log(key);
    // 全选全不选
	$('.all_box').click(function(){
        $('.box_key,.box_goods,.all_box').prop("checked",$(this).prop("checked"));
        console.log($(this).prop("checked"));
        content_all();
	})
	// 商品点击导致全选或者全不选
	$('.box_goods').click(function(){
		$(this).parents('.cart_list1').find('.box_key').prop("checked",$(this).prop("checked"));
		$('.box_goods:checked').length==goods?$('.all_box').prop("checked","true"):$('.all_box').prop("checked","");
		content_all();
	})
	// 店铺点击导致全选或者全不选
    $('.box_key').click(function(){
    	$(this).parents('.cart_list1').find('.box_goods').prop("checked",$(this).prop("checked"));
        $('.box_key:checked').length==key?$('.all_box').prop("checked","true"):$('.all_box').prop("checked","");
        content_all();
    }) 
    // 点击商品数量的加减
    $('.court2').click(function(){
    	var num=$(this).siblings('.num').val();
    	num++;
    	$(this).siblings('.num').val(num);
        var price=$(this).parent().siblings('.goods_price').find('.one_price').html();
        $(this).parent().siblings('.goods_sum').find('.price_1').html((num*price).toFixed(2));
        $(".box_goods").eq($(".court2").index($(this))).prop("checked",true);
        for(var i=0;i<$('.box_goods').length;i++){
           if($('.box_goods').eq(i).prop("checked")){
        	  $('.box_key').eq(i).prop("checked",true);
        }
        }
        content_all();
    });
    $('.court1').click(function(){
        var num=$(this).siblings('.num').val();
    	num--;
    	num=num<=1?1:num;
    	$(this).siblings('.num').val(num);
        var price=$(this).parent().siblings('.goods_price').find('.one_price').html();
        $(this).parent().siblings('.goods_sum').find('.price_1').html((num*price).toFixed(2));
        $(".box_goods").eq($(".court2").index($(this))).prop("checked",true);
        for(var i=0;i<$('.box_goods').length;i++){
           if($('.box_goods').eq(i).prop("checked")){
        	  $('.box_key').eq(i).prop("checked",true);
        }
        }
        content_all();
    });
    // 总数量
    function content_all(){
        var all_num=0;
        var all_money=0;
        for(var i=0;i<$('.num').leng th;i++){
        	if($('.box_goods').eq(i).prop("checked")){
        		all_num+=Number($('.num').eq(i).val());
        	    all_money+=Number($('.price_1').eq(i).html());
        	}	    
        }
                $('.allprice').html(all_money.toFixed(2));
                $('.goods_num').html(all_num);
                $('.box_goods:checked').length==goods?$('.all_box').prop("checked","true"):$('.all_box').prop("checked","")       
    }

    })