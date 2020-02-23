# Adventure Time API

The Adventure Time API is a simple data source that catalogs the main characters of the Cartoon Network series Adventure Time. It is built on [JSON Server](https://github.com/typicode/json-server).

It was mainly created as a REST API protype for the app [Adventure Time Wisdom](https://github.com/sally/adventure-time-wisdom).

# Getting Started

Requests can be made with `curl` (or other helper libraries). Note that only `GET` requests are accepted at this time.

Users must prepend all resource calls with the following base URL:

`https://adventure-time-api.herokuapp.com/api/v1/`

## Example

Here is an example of how to fetch the resource for the character Jake the Dog.

`curl -X GET -H "Content-Type: application/json" https://adventure-time-api.herokuapp.com/api/v1/characters/jake`

The API will respond to this request with the following object:

```
{
  "id": 1,
  "slug": "jake",
  "display_name": "Jake",
  "full-name": "Jake the Dog",
  "species": "Dog/Shape-shifter Hybrid",
  "sex": "Male",
  "quotes": [
    "You're getting all hung up on imaginary problems. You gotta focus on what's real, man!",
    "Suckin' at something is the first step to being sorta good at something.",
    "To live life, you need problems. If you get everything you want the minute you want it, then what's the point of livin'?"
  ],
  "sprite": "https://i.imgur.com/oOuaFDI.png"
}
```

# Resources

## Characters

### Return all characters

Returns information about eight main characters of Adventure Time.

#### Endpoint

| Method | URL         | Authorization |
|--------|-------------|---------------|
| GET    | /characters | None          |

#### Path Parameters

None

#### Success Response

| Status | Description | Format             |
|--------|-------------|--------------------|
| 200    | OK          | Array (of objects) |

#### Error Response

| Status | Description | Format |
|--------|-------------|--------|
| 400    | Bad Request |        |

#### Example Request

`curl -X GET -H "Content-Type: application/json" https://adventure-time-api.herokuapp.com/api/v1/characters`

#### Example Success Response

```
[
  {
    "id": 0,
    "slug": "finn",
    "display_name": "Finn",
    "full-name": "Finn Mertens",
    "species": "Human",
    "sex": "Male",
    "quotes": [
      "You don't need a mirror to know you look good. You're beautiful on the inside.",
      "You're letting your brain dial turn your fear volume up.",
      "I say 'creepy' is just another label we use to distance ourselves from stuff we don't understand. Or reminds us of something in ourselves that we're not comfortable with.",
      "I wonder if being a sad loner gives you more raw materials to form song ideas. Is that where creativity comes from? From sad biz?",
      "Homies help homies. Always."
    ],
    "sprite": "https://i.imgur.com/zLEMgTB.png"
  },
  {
    "id": 1,
    "slug": "jake",
    "display_name": "Jake",
    "full-name": "Jake the Dog",
    "species": "Dog/Shape-shifter Hybrid",
    "sex": "Male",
    "quotes": [
      "You're getting all hung up on imaginary problems. You gotta focus on what's real, man!",
      "Suckin' at something is the first step to being sorta good at something.",
      "To live life, you need problems. If you get everything you want the minute you want it, then what's the point of livin'?"
    ],
    "sprite": "https://i.imgur.com/oOuaFDI.png"
  }
]
```

### Fetch one character

Returns a character based on a slug parameter.

#### Endpoint

| Method | URL                | Authorization |
|--------|--------------------|---------------|
| GET    | /characters/{slug} | None          |

#### Path Parameters

| Name | Format | Required |
|------|--------|----------|
| slug | string | Yes      |

#### Success Response

| Status | Description | Format      |
|--------|-------------|-------------|
| 200    | OK          | JSON Object |

#### Error Response

| Status | Description | Format |
|--------|-------------|--------|
| 400    | Bad Request |        |

#### Example Request

`curl -X GET -H "Content-Type: application/json" https://adventure-time-api.herokuapp.com/api/v1/characters/princess-bubblegum`

#### Example Success Response

```
{
  "id": 3,
  "slug": "princess-bubblegum",
  "display_name": "Princess Bubblegum",
  "full-name": "Bonnibel Bubblegum",
  "species": "Gum Golem",
  "sex": "Female",
  "quotes": [
    "Responsibility demands sacrifice.",
    "You can't break royal promises! Never, ever, never, no matter what, forever!",
    "People get built different. We don't need to figure it out, we just need to respect it."
  ],
  "sprite": "https://i.imgur.com/KYiPIt4.png"
}
```