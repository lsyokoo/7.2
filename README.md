# Music Web Service

This is a music web service that returns songs based on genre and artist through query/route parameters.

## Endpoints

1. **GET /** - Returns a welcome message.

2. **GET /songs?genre=pop&artist=taylorswift**
   - **Description**: Retrieves songs based on the specified genre and/or artist.
   - **Example Request**: `/songs?genre=pop&artist=taylorswift`
   - **Example Response**:
     ```json
     {
       "message": "Songs available in genre: pop by artist: taylorswift"
     }
     ```

3. **GET /songs/:genre/:artist**
   - **Description**: Retrieves songs based on genre and artist provided as route parameters.
   - **Example Request**: `/songs/pop/taylorswift`
   - **Example Response**:
     ```json
     {
       "message": "Songs available in genre: pop by artist: taylorswift"
     }
     ```

## Error Handling
If a required parameter is missing or if an endpoint is undefined, the service returns a friendly error message.

## Deployment
This service is deployed on Render (add URL here once deployed).

