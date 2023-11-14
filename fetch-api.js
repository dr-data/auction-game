// Step 1: Get access token with authorization API
async function getAccessToken() {
    const response = await fetch('https://api.artsy.net/api/tokens/xapp_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        client_id: '093c67c5d29303491051',
        client_secret: '6c50bee042623c01ac5457f2009ba703'
      })
    });
  
    const data = await response.json();
    
    return data.token;
  }
  
  // Step 2: Fetch art piece images and historical highest bidded price using access token from step 1
async function fetchData() {
    try {
      const accessToken = await getAccessToken();
 
      // Use the access token to make subsequent API requests.
      // Here's an example of fetching art piece images and its historical highest bidded price:
    
      // Replace `<ARTWORK_ID>` with the actual artwork ID you want to fetch information for.
      const artworkId = '516dfb9ab31e2b2270000c45';
 
      const response = await fetch(`https://api.artsy.net/api/artworks/${artworkId}`, {
        headers: {
          'X-Xapp-Token': accessToken,
          'Accept': 'application/vnd.artsy-v2+json'
        }
      });
      
      if (!response.ok) throw new Error(response.statusText);
 
      const data = await response.json();
 
      console.log(data.images); // Prints the art piece images
 
      if (data.sale && data.sale.highest_bid) { 
          console.log(data.sale.highest_bid.amount); // Prints the historical highest bidded price
      } else {
          console.log("No historical highest bid found");
      }
    
    } catch (error) {
         console.error(error);
    }
 }