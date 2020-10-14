import {SPLIT_CHAR} from './index'
export default
`
An Intent is a messaging object with Intents we can perform different actions like : open a new screen(activity), start a service and even share data between apps.
there are 2 types of Intents:

<b>\u2022 Explicit Intents:</b>
With Explicit Intents we indicate directly what we want to do
for instance: starting a new screen, service etc.
An example for Explicit intent:
Assume we have an activity named <b>SecondScreen</b> and we run the code below
in another Activity (its name is not important for this example)
${SPLIT_CHAR}
val intent = Intent(this, SecondScreen::class.java)
startActivity(intent)
${SPLIT_CHAR}
<b>\u2022 Implicit Intents:</b>
Unlike Explicit, with Implicit Intents we do not indicate directly which screen to
start or service. For example we want to edit a photo.
With the help of Implicit Intent all installed device's apps that can receive 
and edit an image will respond to our Intent and we can choose which app 
to edit our image.

An example for Explicit intent:


`
