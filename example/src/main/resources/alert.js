$("#note_ul").on("click",".btn_slide_down",function(){
	//隐藏笔记菜单
	$("#note_ul div").hide();
	//显示当前点击的菜单
	var note_menu=$(this).parents("li").find("div");
	note_menu.slidedown(1000);
	return false;//阻止冒泡事件
})
//点body隐藏菜单
$("body").click(function(){
	$("note_ul div").hide();
});
//笔记分享按钮绑定
$("#note_ul").on("click",".btn_share",function(){
	//获取请求参数
	$li=$(this).parent("li");
	var noteId=$li.data("noteId");
	//发送ajax请求
	$.ajax({
		url:path+"/share/add.do",
		type:"post",
		data:{"noteId":noteId},
		dataType:"json",
		success:function(result){
			
		},
		error:function(){
			alert("分享笔记失败！");
		}
	});
});

$("#search_note").keydown(function(event){
	var code=event.keyCode;
	if(code==13){
		$("#search_ul li").remove();
		var keyword=$("#search_note").val().trim();
		$.ajax({
			url:path+"/share/search.do",
			type:"post",
			date:{"keyword":keyword},
			dateType:"json",
			success:function(){
				var shares=result.data;
				for(var i=0;i<shares.length;i++){
					//获取shareId
					var shareId=shares[i].cn_share_id;
					//获取title
					var title=shares[i].cn_share_title;
					//获取li对象
					var sli="";
					var $li=$(sli);
					//绑定shareId
					$li.data("shareId",shareId);
					//将li对象添加到ul上
					$("#share_ul").append($li);
					//切换显示区域
					$("#pc_part_2").hide();
					$("#pc_part_6").show();
				}
			},
			error:function(){
				alert("搜索失败！");
			}
		});
	}
});
