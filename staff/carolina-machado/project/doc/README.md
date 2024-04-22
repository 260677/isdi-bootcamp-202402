# WineSeeker App

## Intro

WineSeeker is a wine searcher app focused mainly in supermarkets and small wine shops. The search includes the wine type (red, white or rosé) and the price range. 

Throught the app, users can choose the best wine option near them, viewing the supermarket location in an map and the results of the search displayed under it. 

Once the user try the wine, they can leave a review from 1-5. 

![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTk1ejVheDhibXFzb29tZnVub3gwN3Q3d25pZ240YW03OHVjamNhbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XukORs5yMW0Ao/giphy.gif)

## Functional Description

### Use Cases

- search a wine by type (red, white, rosé) 
- search a wine by price range
- get as result the nearest wines that match the search (listed under the map)
- get the supermarkets and small shops that have the chosen option (in a map)
- choose one of the options that better suit the user's taste ((in a map and also listed under it))
- choose one of the options that better suit the user's taste
- find the spuermarket or small shop address in the map 
- rate the wine

v0.1
- users can add their own wines


### UI Design

[Figma](https://www.figma.com/file/cw8K38zpv36iQkjQA5fVXC/App?type=design&node-id=0-1&mode=design&t=RHFOp1rBhBeRDwEs-0)

## Technical Description

### Modules

- api (server logic)
- app (client interface)
- com (common utils, tools, ...)

### Technologies

- TypeScript
- React
- Express
- Node
- Tailwind
- Mongoose
- Figma

### Data Model

User
- id (required)
- name (string, required)
- birthdate (date, required)
- email (string, required)
- username (string, required)
- password (string, required)

Wines
- id (required)
- place (Place.id, required)
- title (string, required)
- image (string, required)
- description (string, required)
- price (number, required)

Supermarket
- id (required)
- title (string, required)
- address (string, required)
- coords ([number, number])


Review
- id (required)
- place (Place.id, required)
- user (User.id, required)
- rate (number, required, enum: 1|2|3|4|5)
- comment (string, optional)
- date (date, required)



