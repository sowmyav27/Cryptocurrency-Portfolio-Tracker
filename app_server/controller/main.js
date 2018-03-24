var lineReader = require('line-reader');
function sendPage(fileName, result)
{
    var html = '';
    
    // Read the file one line at a time.
    lineReader.eachLine(fileName,
        function(line, last)
        {
            html += line + '\n';

            if (last) 
            { 
                result.send(html);
                return false; 
            }
            else
            {
                return true;
            }
        });
}

function sendBody(text, result)
{
    var html = '<!DOCTYPE html>\n'
        + '<html lang="en-US">\n'
        + '<head>\n'
        + '    <meta charset="UTF-8">\n'
        + '    <title>Cryptocurrency Portfolio Tracker</title>\n'
        + '    <link rel="stylesheet" href="currencyrates.css">\n'
        + '</head>\n'
        + '<body>\n'
		+ '<h2> Welcome to Cryptocurrency Portfolio Tracker!! </h2>'
		+ '<p>'
        + '    ' + text + '\n'  // insert the body text
		+ '<p>'
        + '</body>\n'
        + '</html>\n';
    
    result.send(html);    
}

function getVal(request)
{
    var curr = request.param('curr');
      
    return curr;
}

function modify(text, request)
{
    if (request.body.strong)
    {
        text = '<strong>' + text + '</strong>'; 
    }
    
    if (request.body.em)
    {
        text = '<em>' + text + '</em>'; 
    }
    
    return text;
}
var btcprice;
var request =require("request");
request({
	url:"https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD",
	json:true
},function(error,response,body){
	  btcprice=body.USD;

	
}
);
var xrmprice;
request({
	url:"https://min-api.cryptocompare.com/data/price?fsym=XRP&tsyms=USD",
	json:true
},function(error,response,body){
	  xrmprice=body.USD;

	
}
);

var eth_btc_price,eth_usd_price;
request({
	url:"https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR",
	json:true
},function(error,response,body){
	  eth_btc_price=body.BTC;
      eth_usd_price=body.USD;

	
}
);

var btc_btc_price,btc_usd_price;
request({
	url:"https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=BTC,USD,EUR",
	json:true
},function(error,response,body){
	  btc_btc_price=body.BTC;
      btc_usd_price=body.USD;

	
}
);


module.exports.home = function(request, result) 
{
    // sendPage('index.html', result);
    sendPage('login.html', result);
};

module.exports.get_home = function(request, result) 
{
    // sendPage('index.html', result);
    sendPage('home.html', result);
};

module.exports.get_currency = function(request, result) 
{
	//console.log(btcprice);
	// var text='<strong>BTC Price:</strong>'+btcprice+'\n' +'\n<strong>Ripple Price: </strong>'+xrmprice;
	// sendBody(text, result);
    sendPage('currency.html', result);
    //sendPage('text.html', result);
};


module.exports.get_convert = function(request, result) 
{
    sendPage('converter.html', result);
};

module.exports.get_addwallet = function(request, result) 
{
    sendPage('addWallet.html', result);
};

module.exports.get_mywallet = function(request, result) 
{
    sendPage('myWallet.html', result);
};

module.exports.get_compareCurrency = function(request, result) 
{
    sendPage('compareCurrency.html', result);
};


module.exports.post_convert = function(request, result) 
{
    
    sendPage('converter.html', result);
};
