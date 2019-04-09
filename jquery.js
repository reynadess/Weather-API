var milli =0;

$("document").ready
$("#submit").click(function(){
    var cityName = $("#cityName").val();
    console.log(cityName);
    $.ajax({
        type:'GET',
        url:`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=b292482febc36c64a533d9bd1b1e2536`,
        success: function(res){
            console.log(res);            
            $("#city").text(res.name);
            $("#country").text(res.sys.country);
            $("#desc").text(res.weather[0].main);
            var celsuis = (res.main.temp-273.15);
            $("#celsuis").text(celsuis.toFixed()+"°C");
            $("#feels").text(celsuis.toFixed()+"°C");
            $("#wind").text(res.wind.speed+"m/s");
            $("#humidity").text(res.main.humidity+"%");
            $("#pressure").text(res.main.pressure+"hPa");
            milli=res.dt*1000;
            console.log(milli);
            var dt = new Date(milli);
            var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
            document.getElementById("time").innerHTML = time;
        }
    });
});







// Your API key is b292482febc36c64a533d9bd1b1e2536
