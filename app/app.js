
const api_url = "https://api2.binance.com/api/v3/ticker/24hr";

async function getapi(url) {
	
	const response = await fetch(url);
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
	show(data);
}

getapi(api_url);


function hideloader() {
	document.getElementById('loading').style.display = 'none';
}

function show(data) {
	let tab =
		`<tr>
		<th>Symbol</th>
		<th>Current Price</th>
		<th>24h High Price</th>
        <th>24h Low Price</th>
        <th>24h Volume</th>
		</tr>`;
	
	//Access each row
    data.forEach(r => {
	tab += `<tr>
	<td>${r.symbol} </td>
	<td>${r.lastPrice}</td>
	<td>${r.highPrice}</td>
	<td>${r.lowPrice}</td>
    <td>${r.volume}</td>		
    </tr>`;        
    });

    //Update the table with the loaded information
	document.getElementById("coins").innerHTML = tab;
}
