# PrototypeConsumer

An angular web client to consume the Prototype BE application.

Consists of 
* login page
* form for adding students
* a table of students with options to edit and delete

Since the Prototype BE is protected by oauth2 tokens, the client is able to 
obtain those tokens and pass them to endpoints.

`http://localhost:4200/students` is protected by the AuthGuardService,
 so it is not accessible when a user is not authenticated.




## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
