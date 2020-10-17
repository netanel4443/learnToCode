const SPLIT_CHAR='$'

export default
`
LiveData is an observable data holder class.
Unlike other observable pattern libraries, LiveData is lifecycle aware
which means we don't need to subsribe and resubscribe directly,
LiveData delivers data only if its owner is STARTED or RESUMED as a result
it helps us to prevent memory leaks.

It is suggested to use LiveData with ViewModel 
we'll initialize LiveData object in our ViewModel
and observe for changes inside our Activity/Fragment.
In activities observe in onCreate() and in fragments observe in onViewCreated().

Example for ViewModel & LiveData:
<b>MainActivity</b>
${SPLIT_CHAR}
class MainActivity : AppCompatActivity() {

  private val viewModel:SimpleViewModel by viewModels()

  override fun onCreate(savedInstanceState: Bundle?) {
      super.onCreate(savedInstanceState)
      setContentView(R.layout.activity_main)
     //observe for changes 
     viewModel.counter.observe(this, Observer {counterValue->
          //update UI here
      })
  }
${SPLIT_CHAR}
<b>SimpleViewModel</b>
${SPLIT_CHAR}
class SimpleViewModel: ViewModel() {
  private var incrementMe=0
  private val  _counter= MutableLiveData<Int>()
  //keep data immutable 
  val counter get() =  _counter as LiveData<Int> 

  fun incrementCounter(){
      incrementMe++
      _counter.value=incrementMe
  }
}
${SPLIT_CHAR}
`
