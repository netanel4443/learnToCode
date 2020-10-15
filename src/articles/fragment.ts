const SPLIT_CHAR='$'

export default 
`
Fragment, like activity, can have an UI screen(but not mandatory).
We can add multiple Fragments to an activity.
Fragment has its own lifecycle but its attached to the hosting 
activity lifecycle, that means, if the activity is paused,stopped,destroyed
so is the hosted fragment but not the opposite,
if we remove a fragment it will be destroyed, but it won't affect
the hosting activity lifecycle.

Fragment lifecycle chain:
onAttach()
onCreate()
onCreateView()
onActivityCreated()
onStart()
onResume()
onPause()
onStop()
onDestroyView()
onDestroy()
onDetach()

<b>onAttach()</b>
First called when the fragment is attached to the hosting context.
We can get the hosting context in this method (or calling requiteContext()).

<b>onCreate()</b>
onCreate is called when creating the fragment
At this point we can initialize data that we want 
initialized once and retain it to prevent reinitialization
due to lifecycle changes.
${SPLIT_CHAR}
override fun onCreate(savedInstanceState: Bundle?) {
  super.onCreate(savedInstanceState)
}
${SPLIT_CHAR}
<b>onCreateView</b>
At this moment, the ui is being created, if there is one,
else return null for instance:
${SPLIT_CHAR}
override fun onCreateView(
  inflater: LayoutInflater, container: ViewGroup?,
  savedInstanceState: Bundle?
): View? {
  val view= inflater.inflate(R.layout.some_layout, container, false)
  //to get the TextView from some_layout we need to call it with
  //view + its id like below. 
  //we can choose any name instead of view
  val textView=view.textview_id
  //finally, return it
  return view
}
${SPLIT_CHAR}
Pay attention that during creation, if we try to get the TextView
width and height for instace, the result is going to be
0 because the system didn't finish drawing the UI.

<b>onActivityCreated</b>
This method is called when the hosting activity's onCreate()
method has returned.

<b>onStart()</b>
At this moment the fragment is visible to the user
${SPLIT_CHAR}
override fun onStart() {
  super.onStart()
}
${SPLIT_CHAR}
<b>onResume()</b>
The user can interact with the UI.
${SPLIT_CHAR}
override fun onResume() {
  super.onResume()
}
${SPLIT_CHAR}
<b>onPause()</b>
At this point the interaction between the user
and the fragment is paused.
This method could be called either during to
changes in the hosting activity's lifecycle.
This can happen when a new activity is started but
it is semi transparent and as a result,
the user still can see the fragment's hosting acitvity.
${SPLIT_CHAR}
override fun onPause() {
  super.onPause()
}
${SPLIT_CHAR}
<b>onStop()</b>
The fragment is not visible.
This method is called if it is removed 
or the activity's onStop() method is called.
The fragment is not necessarily going to be killed,
The user can return to the fragment.
${SPLIT_CHAR}
override fun onStop() {
  super.onStop()
}
${SPLIT_CHAR}
<b>onDestroyView()</b>
Called when the view that was created in
onCreateView() method has been detached.
if onCreateView() is called again, a new 
view will be created.
At this poin we need to do our clean ups 
that related to the detached view.
${SPLIT_CHAR}
override fun onDestroyView() {
  super.onDestroyView()
}
${SPLIT_CHAR}
<b>onDestroy()</b>
Fragment is destroyed.
Do our clean ups here if we need.
${SPLIT_CHAR}
override fun onDestroy() {
  super.onDestroy()
}
${SPLIT_CHAR}
<b>onDetach()</b>
The fragment is no longer associated to the hosting activity
${SPLIT_CHAR}
override fun onDetach() {
  super.onDetach()
}
${SPLIT_CHAR}



`