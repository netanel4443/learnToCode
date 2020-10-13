import {SPLIT_CHAR} from './index'

export default 
`A toast is a popup message that we can show to users.
It appears on the bottom of the screen and for limited time
${SPLIT_CHAR}
Toast.makeText(context,message,time).show()
${SPLIT_CHAR}
\u2022 context-our context
\u2022 message-the message we want to show to a user
\u2022 time-Toast.LENGTH_SHORT or Toast.LENGTH_LONG
`