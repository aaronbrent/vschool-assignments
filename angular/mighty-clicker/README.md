# Mighty Clicker

This was an exercise to practice using angular services to communicate with controllers and handle user interacton and data. 

The requirements were as follows:

- Have two buttons on the screen, one red and one blue.

- Above or below the button should be some text with a "score" in it. Start each of these scores at 100.

- When the user clicks the red button, the score above red should increase by one and the score above blue should decrease by one. The opposite should happen if they click the blue button.

- When either label reaches 0 it will automatically reset to 100.

- Have two angular services. One called BlueService and one called RedService.

- Each service will store the counter that displays above/below the buttons as a property on the service. Each service will have at least 3 methods: increment, decrement, and reset, which resets the counter to 100.

- The counter property in the services must NOT be directly manipulated by a controller - you should create public methods in your services to perform the operations instead, which are called by the controller.