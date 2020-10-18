
const SPLIT_CHAR='$'

export default 
`Service is one of 4 app components(activity,service,broadcast receiver,content provider)
Service by default runs on the main thread so if you need to 
make operations that can block the main thread,
you need to consider using another thread for it.
Services don't supply UI but we can add an UI with WindowManager.
There are 3 types of services:
<b>Foreground</b>:
A foreground service must display a notification.
with foregound service the user can leave the app
and the service will still run
(we need to call startForeground() to make it run in the foreground).

<b>Background</b>:
Background service doesn't require a notification and
the user may not necessarily know about its operations.
Not like foreground service, if the user leaves 
the app the background service is stopped(depends on target sdk version).

<b>Bound</b>:
We'll talk about it later.

<b>Service lifescycle</b> 
onCreate()           
onStartCommand()        
onDestroy()  

<b>lifecycle for bound service</b>
onCreate() 
onBind()
onUnbind() 
onDestroy()                 

<b>onCreate()</b>
When the service is created, called once
if you need to initialize data once, do it here.
${SPLIT_CHAR}
override fun onCreate() {
  super.onCreate()
}
${SPLIT_CHAR}
<b>onStartCommand()</b>
Called every time the service starts, onCreate()
is not called after the service is already created.
We can pass data thru intent and receive it here. Yet,
we need to be careful because it may be null.
${SPLIT_CHAR}
override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
  super.onStartCommand(intent, flags, startId)

  return behavior
}
${SPLIT_CHAR}

<b>onDestroy()</b>
Service is being removed,we need
to do our clean ups here to prevent memory leaks.
${SPLIT_CHAR}
override fun onDestroy() {
  super.onDestroy()
}
${SPLIT_CHAR}
`