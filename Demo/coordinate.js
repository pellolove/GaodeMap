
var x_pi =  3.14159265358979324;

function bd_encrypt(ggLngLat)
{
    var x = ggLngLat.lng, y = ggLngLat.lat;
    var z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * x_pi);
    var theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * x_pi);
    var bd_lng = z * Math.cos(theta) + 0.0065;
    var bd_lat = z * Math.sin(theta) + 0.006;

    return { lng:bd_lng, lat: bd_lat}
}
 
function bd_decrypt(bdLngLat)
{
    var x = bdLngLat.lng - 0.0065, y = bdLngLat.lat - 0.006;
    var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi);
    var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi);
    gg_lng = z * Math.cos(theta);
    gg_lat = z * Math.sin(theta);

    return  { lng:gg_lng, lat: gg_lat}
}