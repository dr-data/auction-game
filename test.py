import requests
from bs4 import BeautifulSoup
import json


def fetch_expensive_paintings_info(url):
    # Send a GET request to the Wikipedia page
    response = requests.get(url)
    if response.status_code != 200:
        return "Failed to retrieve data from Wikipedia."

    # Parse the HTML content of the page
    soup = BeautifulSoup(response.content, 'html.parser')

    # Find the table containing the list of paintings
    table = soup.find('table', {'class': 'wikitable'})
    if not table:
        return "No suitable table found on the page."

    # Iterate over the rows of the table to extract data
    paintings_info = []
    for row in table.find_all('tr')[1:]:  # Skip the header row
        columns = row.find_all('td')
        if len(columns) < 10:
            continue  # Skip rows that don't have enough columns

        AristName = columns[3].get_text(strip=True)
        ArtPieceName = columns[1].get_text(strip=True)
        price = columns[0].get_text(strip=True)


        # Extract image URL if available
        # Extract image URL if available
        image_data = columns[2].find('img')
        image_url = None
        if image_data and 'src' in image_data.attrs:
            image_url = 'https:' + image_data.attrs['src']  # Prepend 'https:' to the relative URL


        paintings_info.append({'Art Piece Name': ArtPieceName,'Arist Name': AristName, 'Original Price (million USD)': price, 'Image URL': image_url})

    return paintings_info

# Wikipedia URL of the list of most expensive paintings
url = "https://en.wikipedia.org/wiki/List_of_most_expensive_paintings"

# Fetch the information
expensive_paintings_info = fetch_expensive_paintings_info(url)

# Check if the fetch was successful
if isinstance(expensive_paintings_info, list):
    for painting in expensive_paintings_info:
        print(painting)
else:
    print(expensive_paintings_info)  # Print the error message

json_data = json.dumps(expensive_paintings_info)

# Save the JSON data to a file
with open("expensive_paintings.json", "w") as f:
    f.write(json_data)