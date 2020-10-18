const SPLIT_CHAR="$"

export default
`
<b>MainActivity.kt</b>
${SPLIT_CHAR}
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {
  private lateinit var usersAdapter:UsersAdapterRecyclerViewAdapter

   override fun onCreate(savedInstanceState: Bundle?) {
      super.onCreate(savedInstanceState)
      setContentView(R.layout.activity_main)
      supportActionBar?.hide()
      initUsersRecyclerView()
   }

   private fun initUsersRecyclerView() {
       usersAdapter = UsersAdapterRecyclerViewAdapter()
       recyclerview_users_messaging.adapter = usersAdapter
       recyclerview_users_messaging.layoutManager =
           LinearLayoutManager(this, RecyclerView.VERTICAL, false)
       recyclerview_users_messaging.setHasFixedSize(true)
       addFakeUsers()
       usersAdapter.itemClick = {
           openChatFragment()
       }
   }

   private fun addFakeUsers(){
      for(i in 0..19){
        usersAdapter.setData("New user"+i)
      }
   }

    private fun openChatFragment() {
        val fragmentTag="ChatFragment"
        supportFragmentManager.beginTransaction()
            .add(R.id.chat_layout,ChatFragment(),fragmentTag)
            .addToBackStack(fragmentTag)
            .commit()
    }
}
${SPLIT_CHAR}
<b>activity_main.xml</b>
${SPLIT_CHAR}
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity"
    android:background="#1e2124">
   <androidx.constraintlayout.widget.ConstraintLayout
       android:layout_width="match_parent"
       android:layout_height="match_parent">

       <androidx.recyclerview.widget.RecyclerView
           android:layout_width="match_parent"
           android:layout_height="wrap_content"
           android:id="@+id/recyclerview_users_messaging"
           app:layout_constraintTop_toTopOf="parent"/>
   </androidx.constraintlayout.widget.ConstraintLayout>

    <FrameLayout
        android:layout_width="match_parent"
        android:layout_height="match_parent"
            android:id="@+id/chat_layout"/>
</androidx.constraintlayout.widget.ConstraintLayout>
${SPLIT_CHAR}
<b>UsersAdapterRecyclerViewAdapter</b>
${SPLIT_CHAR}
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import kotlinx.android.synthetic.main.users_messaging_recycler_cell_design.view.*

class UsersAdapterRecyclerViewAdapter: RecyclerView.Adapter<RecyclerView.ViewHolder>() {

    private val listOfUsers=ArrayList<String>()
    var itemClick:(()->Unit)?=null

    fun setData(newUser:String){
        listOfUsers.add(newUser)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): RecyclerView.ViewHolder {
        val inflater = LayoutInflater.from(parent.context)
        val view=inflater.inflate(R.layout.users_messaging_recycler_cell_design,parent,false)
        return  UsersViewHolder(view)
    }

    override fun getItemCount()=listOfUsers.size

    override fun onBindViewHolder(holder: RecyclerView.ViewHolder, position: Int) {
        if (holder is UsersViewHolder){
            holder.userName.text=listOfUsers[position]
        }
    }

    private inner class UsersViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        val userName=itemView.user_name
        init {
            itemView.setOnClickListener {
                itemClick?.invoke()
            }
        }
    }
}
${SPLIT_CHAR}
<b>users_messaging_recycler_cell_design.xml</b>
${SPLIT_CHAR}
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout 
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:background="#282b30"
    android:layout_marginBottom="3dp"
   >

    <RelativeLayout
        android:layout_width="match_parent"
        android:layout_height="70dp"
        app:layout_constraintTop_toTopOf="parent"
        >
        <ImageView
            android:layout_width="50dp"
            android:layout_height="50dp"
            android:id="@+id/user_image"
            android:layout_alignParentStart="true"
            android:layout_centerVertical="true"
            android:background="@drawable/circle_design"
            android:layout_marginStart="5dp"/>
        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:textColor="#fff"
            android:text="user name"
            android:textAlignment="center"
            android:layout_centerInParent="true"
            android:layout_alignParentEnd="true"
            android:layout_toEndOf="@+id/user_image"
            android:id="@+id/user_name"/>
    </RelativeLayout>
</androidx.constraintlayout.widget.ConstraintLayout>
${SPLIT_CHAR}
Inside drawable folder <b>circle_design.xml</b>
${SPLIT_CHAR}
<?xml version="1.0" encoding="utf-8"?>
<shape xmlns:android="http://schemas.android.com/apk/res/android"
 android:shape="rectangle">

    <solid
        android:color="#7289da"/>

    <corners
    android:radius="30dp"/>

    <size
        android:height="50dp"
        android:width="50dp"/>

</shape>
${SPLIT_CHAR}
<b>ChatFragment.kt</b>
${SPLIT_CHAR}
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import kotlinx.android.synthetic.main.fragment_chat.view.*

class ChatFragment : Fragment() {

    private lateinit var adapter:ChatRecyclerViewAdapter

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        val view= inflater.inflate(R.layout.fragment_chat, container, false)

        val recyclerView=view.chat_recyclerview
        initRecyclerView(recyclerView)
        return view
    }


    private fun initRecyclerView(recyclerView: RecyclerView) {
         adapter=ChatRecyclerViewAdapter()
        recyclerView.adapter=adapter
        recyclerView.layoutManager=LinearLayoutManager(requireActivity(),RecyclerView.VERTICAL,false)
        recyclerView.setHasFixedSize(true)
    }

}
${SPLIT_CHAR}
<b>fragment.chat.xml</b>
${SPLIT_CHAR}
<?xml version="1.0" encoding="utf-8"?>
<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".ChatFragment"
    android:background="#1e2124"
    android:clickable="true">

    <androidx.recyclerview.widget.RecyclerView
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:id="@+id/chat_recyclerview"/>
</FrameLayout>
${SPLIT_CHAR}
<b>ChatRecyclerViewAdapter.kt</b>
${SPLIT_CHAR}
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import kotlinx.android.synthetic.main.my_message_recycler_cell_design.view.*
import kotlinx.android.synthetic.main.user_message_recycler_cell_design.view.*

class ChatRecyclerViewAdapter : RecyclerView.Adapter<RecyclerView.ViewHolder>() {

    private val MY_MESSAGE=0
    private val USER_MESSAGE=1

    private val items=ArrayList<Int>()
    init {
        for (i in 0..20){
            if (i%2==0){
                items.add(MY_MESSAGE)
            }
            else{
                items.add(USER_MESSAGE)
            }
        }
        notifyDataSetChanged()
    }


    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): RecyclerView.ViewHolder {
       val inflater=LayoutInflater.from(parent.context)
        return if (viewType==MY_MESSAGE){
            val view=inflater.inflate(R.layout.my_message_recycler_cell_design,parent,false)
            return MyMessageViewHolder(view)
        }
        else{
            val view=inflater.inflate(R.layout.user_message_recycler_cell_design,parent,false)
            return UserMessageViewHolder(view)
        }
    }

    override fun getItemCount(): Int {
        return items.size
    }

    override fun onBindViewHolder(holder: RecyclerView.ViewHolder, position: Int) {
        if (holder is MyMessageViewHolder){
            holder.message.text="this is an example of my message"
        }
        if (holder is UserMessageViewHolder){
            holder.message.text="this is an example of users message"
        }
    }


    override fun getItemViewType(position: Int): Int {
        if (items[position]==MY_MESSAGE)
            return MY_MESSAGE
        else
            return USER_MESSAGE
    }

    private inner class MyMessageViewHolder(itemView: View):RecyclerView.ViewHolder(itemView){
        val message=itemView.my_message_text

    }

    private inner class UserMessageViewHolder(itemView: View):RecyclerView.ViewHolder(itemView){
        val message=itemView.user_message_text
    }
}
${SPLIT_CHAR}
<b>my_message_recycler_cell_design.xml</b>
${SPLIT_CHAR}
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout
 xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_marginBottom="20dp">

    <androidx.cardview.widget.CardView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        app:cardBackgroundColor="#3EB3F1"
        android:id="@+id/my_message_text_cardview"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent"
       >
        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:textColor="#ffff"
            android:id="@+id/my_message_text"
            android:textSize="20sp"/>
    </androidx.cardview.widget.CardView>
</androidx.constraintlayout.widget.ConstraintLayout>
${SPLIT_CHAR}
<b>user_message_recycler_cell_design.xml</b>
${SPLIT_CHAR}
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout
 xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_marginBottom="20dp">

    <androidx.cardview.widget.CardView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        app:layout_constraintEnd_toEndOf="parent"
        app:cardBackgroundColor="#07E6AA"
        android:id="@+id/user_message_text_cardview"
        app:layout_constraintTop_toTopOf="parent"
       >
        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:textColor="#ffff"
            android:id="@+id/user_message_text"
            android:textSize="20sp"/>
    </androidx.cardview.widget.CardView>
</androidx.constraintlayout.widget.ConstraintLayout>
${SPLIT_CHAR}

`