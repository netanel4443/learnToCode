import {SPLIT_CHAR} from './index'
export default
`
AlertDialog is a small screen that can appear to users as a result
of an opertaion they did. For instance, before leaving a screen,
we can show an AlertDialog to the user to ask him if he is sure
that he wants to leave the current screen.

<b>MainActivity class</b>
${SPLIT_CHAR}
class MainActivity : AppCompatActivity() {

  override fun onCreate(savedInstanceState: Bundle?) {
      super.onCreate(savedInstanceState)
      setContentView(R.layout.activity_main)
    
      SimpleAlertDialog().show(this)

  }
${SPLIT_CHAR}
<b>SimpleDialog class</b>
${SPLIT_CHAR}
class SimpleAlertDialog {

  fun show(context: Context){
      val alertDialog=AlertDialog.Builder(context)
      alertDialog.setMessage("Are you sure you want to leave")
      alertDialog.setPositiveButton("Yes",object :DialogInterface.OnClickListener{
          override fun onClick(dialog: DialogInterface?, which: Int) {
              //your code
          }

      })
      alertDialog.setNegativeButton("No",object :DialogInterface.OnClickListener{
          override fun onClick(dialog: DialogInterface?, which: Int) {
              //your code
          }
      })

      alertDialog.show() // to make our alert dialog to appear
  }
}
${SPLIT_CHAR}

In addition , we can design the AlertDialog screen. We need to create
a seperate xml file and design it as we want. 

<b>simple_dialog_design.xml</b>

${SPLIT_CHAR}
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout 
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    xmlns:app="http://schemas.android.com/apk/res-auto">
    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:textSize="30sp"
        android:id="@+id/blue_text"
        android:textColor="#001CB8" //blue
        app:layout_constraintTop_toTopOf="parent" 
        app:layout_constraintStart_toStartOf="parent"/>

</androidx.constraintlayout.widget.ConstraintLayout>
${SPLIT_CHAR}

<b>SimpleDialog class</b>
${SPLIT_CHAR}
class SimpleAlertDialog {

    fun show(context: Context){
        val alertDialog=AlertDialog.Builder(context)
        //Here is the trick
        val inflater=LayoutInflater.from(context)
        val view=inflater.inflate(R.layout.simple_dialog_design,null)
        alertDialog.setView(view) //Here we set our custom design
       
        view.blue_text.text="Some text" //Our blue text
       
        //Same code as before. We can create custom buttons either.
        alertDialog.setPositiveButton("Yes",object :DialogInterface.OnClickListener{
            override fun onClick(dialog: DialogInterface?, which: Int) {
                //your code
            }
        })
        alertDialog.setNegativeButton("No",object :DialogInterface.OnClickListener{
            override fun onClick(dialog: DialogInterface?, which: Int) {
                //your code
            }
        })

        alertDialog.show() // to make our alert dialog to appear
    }
}
${SPLIT_CHAR}
`