import requests
import json

url = 'gas-api-url'

res = requests.get(url)
print(json.loads(res.text))