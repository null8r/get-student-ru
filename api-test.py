import requests
import json

url = 'api-url'
key = 'api-key'
method = 'api-method'

requestUrl = url+'?key='+key+'&method='+method

res = requests.get(requestUrl)
data = json.loads(res.text)

print(json.dumps(data, indent=2))