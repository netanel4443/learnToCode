const SPLIT_CHAR="$$"

export default
`
When a user interact with the app, there are methods 
that can help us know the state of the Activity
and perform operations as needed.
These methods are called lifecycle callback methods.

the methods are :
onCreate()
onStart()
onResume()
onPause()
onStop()
onDestroy()

<b>onCreate()</b>
This is the first method in the lifecycle chain.
In this method we initialize data and perform operations 
that should be done once.
<b>savedInstanceState</b>- this methos receives a Bundle object 
named savedInstanceState.This parameter contains saved data if 
the activity was existed before otherwise null.We can save data in
onSaveInstanceState() method .
<b>setContentView()</b>- with this method we inflate an XML layout
that will determine the UI, we can choose what views
to show to the user if its TextViews,EditText, ImageView etc. 
setContentView() is a heavy operation so for Splash Screens
we can use an alternative.
${SPLIT_CHAR}
override fun onCreate(savedInstanceState: Bundle?) {
  super.onCreate(savedInstanceState)
  setContentView(R.layout.activity_main)
}
${SPLIT_CHAR}
<b>onStart()</b>
The next method after onCreate().
At this moment the activity is visible but the
user can't interact with it yet.
${SPLIT_CHAR}
override fun onStart() {
  super.onStart()
}
${SPLIT_CHAR}
<b>onResume()</b>
At this point the user can interact with the app
the activity is in foreground and stays at Resumed state
until some operations will lead for state changes.
For instance: when the user presses the home 
button, onPause and onStop methods are invoked and 
the state changes as well.
If the user returns to the screen,
onStart() and onResume() are called again.
(If the activity was in Paused state, only onResume() will be called )
${SPLIT_CHAR}
override fun onResume() {
  super.onResume()
}
${SPLIT_CHAR}
<b>onPause</b>
Activity's state is Paused now.
This can happen when a new activity is started but
it is semi transparent and as a result,
the user still can see the first acitvity.
if the user returns to the activity,onResume()
will be called.
${SPLIT_CHAR}
override fun onPause() {
  super.onPause()
}
${SPLIT_CHAR}
<b>onStop</b>
When the activity is not visible anymore.
for instance, it might happen when the user pressed on 
home button.
if the user returns to the activity, onStart()->onResume()
will be called
${SPLIT_CHAR}
override fun onStop() {
  super.onStop()
}
${SPLIT_CHAR}
<b>onDestroy</b>
This method is called before the activity is destroyed.
At this point we need to do last clean ups
in order to avoid memory leaks.
This function is called when the activity is finishing or 
as a result of configuration change.
This function is the last method on the lifecycle chain
and its called after onStop() but, if we call finish()
inside onCreate() method, onDestroy() is called after
onCreate() and the rest of the lifecycle methods
such as onStart(), onResume() etc are not invoked.
${SPLIT_CHAR}
override fun onDestroy() {
  super.onDestroy()
}
${SPLIT_CHAR}
`