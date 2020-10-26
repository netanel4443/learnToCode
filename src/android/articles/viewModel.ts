const SPLIT_CHAR="$$"

export default 
`MVVM is an arhictecture which we seperate
the logic from our views and handle it inside 
the viewmodel class(in clean architecture we add more layers
and seperate logic even more ,business , presentation,api
we will discuss this topic later)
our view should be "dumb" as possible.

Lets see an example when the logic is not seperated:
${SPLIT_CHAR}
button.setOnClickListener { 
  //someFunctionThatHandlesLogic() is a function inside MainActivity
  someFunctionThatHandlesLogic()
}
${SPLIT_CHAR}
In this example we'll seperate the logic and pass it to the viewmodel:
${SPLIT_CHAR}
button.setOnClickListener { 
  //someFunctionThatHandlesLogic() in this case is a function in viewmodel class
  viewModel.someFunctionThatHandlesLogic()
}
${SPLIT_CHAR}
What we happened here?
Actually, same happens in both examples but, the code
is more clean and the view is "dumb".

The ViewModel survives configurations changes 
that means if a configuration change happens
the data in ViewModel class survives it 
and we can reupdate our views easily and we
don't need to perform operations we already did in the first
time.
The ViewModel survives configurations changes due to his 
lifecycle,it lives longer, since his first initialization
until the activity is destroyed / fragment detaches .
When it happens , ViewModel's onCleared() method 
triggers and if we need to do clean ups , we do it there. 

Due to his lifecycle, when we extend from ViewModel we need to
be careful not to pass views,lifecycle or reference to 
a context because it can lead to a memory leak
for instance if we update a TextView text color
after its "dead".

However,If you still need to pass context to the ViewModel
you can extend AndroidViewModel.

With ViewModel we can share data between activity-fragment and vice versa,
fragment-fragment easily.In order to do so, we need to have the same instace
of the ViewModel and not a new one.
`