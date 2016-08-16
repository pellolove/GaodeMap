//@百度鹰眼服务 require 

 
    	function getUnixTime(time) {
    		// body...
    		var _time = new Date(time);
    		if (_time ) {
    			_time = Math.round(_time.getTime()/1000);
    		}
    		return _time;

    	} 
		//1、构建访问参数 
		// 	 请求URI
		// http://api.map.baidu.com/trace/v2/track/gethistory
		var 	url = "http://api.map.baidu.com/trace/v2/track/gethistory"+"?mcode=A2:F7:2C:1D:C3:17:68:97:6F:D8:1B:FA:4B:3F:4B:DF:FF:86:9A:BB;com.baidu.trackshow";
		var requestOption = {					
						ak : "pP3wmyx5MqVtLoOme9BVLRlTyNaQ5C4b",
						service_id : "123242",
						start_time : getUnixTime("2016-08-16 00:00:00"),
						end_time : getUnixTime("2016-08-16 23:59:59"),
						entity_name : "myTrace",
						page_size : 1000,
						page_index: 1,
						is_processed: 1,
						process_option:"need_mapmatch=1",
						
					
		};
		//2、发送异步请求
		$.ajax({
			url:url,
			data:requestOption,
			dataType: "jsonp",
			jsonp:"callback",//为了不编译mocode
			beforeSend:function(xhr){
				//console.log(xhr);
			},
			success:function(data){
				console.log(data);
			var count =	Math.ceil( data.total/data.size);//总页数
			
			
			var centerPoint = [(data.end_point.longitude+data.start_point.longitude)/2,
			(data.end_point.latitude+data.start_point.latitude)/2
			];
			createMap(centerPoint,data);

		//3、展示数据到地图
		 
		
			}
		})