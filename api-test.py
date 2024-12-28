import requests
import json

url = 'https://script.google.com/macros/s/AKfycbyZOW3jG15L7Lyi_AmGjx5FM0PykVChs7B-Wh2xA8BmsnZF3jSi9MIH8JpYKf9mC3FX/exec'
token = 'testToken'

print(url+'?authToken='+token)
res = requests.get(url+'?authToken='+token)
print(json.loads(res.text))

# if __name__ == '__main__':
#     response = requests.get(
#         url,
#         params={
#           "authToken": 'testToke'
#         },
#     )

#     print(json.loads(response.text))