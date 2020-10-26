const SPLIT_CHAR="$$"

export default
`
<b>MainActivity.kt</b>
${SPLIT_CHAR}
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.androidexamples.examples.genericrecyclerview.TextRecyclerViewAdapter
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {
    private lateinit var adapter:TextRecyclerViewAdapter
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        initRecyclerView()
    }

    private fun initRecyclerView() {
        adapter= TextRecyclerViewAdapter()
        val layoutManager=
            LinearLayoutManager(this,RecyclerView.VERTICAL,false)
        generic_recyclerview.adapter=adapter
        generic_recyclerview.layoutManager=layoutManager
        generic_recyclerview.setHasFixedSize(true)
        setItems()
    }

    private fun setItems(){
        for(i in 0..20){
            adapter.addItem(i)
        }
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
    tools:context=".MainActivity">
    <androidx.recyclerview.widget.RecyclerView
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:id="@+id/generic_recyclerview"
        app:layout_constraintTop_toTopOf="parent"/>

</androidx.constraintlayout.widget.ConstraintLayout>
${SPLIT_CHAR}
<b>GenericRecyclerViewAdapter.kt</b>
${SPLIT_CHAR}
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView

open class GenericRecyclerViewAdapter<T> :RecyclerView.Adapter<GenericViewHolder<T>>() {

    val items=ArrayList<T>()
    var itemClick:((T)->Unit)?=null

    fun addItem(item:T){
        items.add(item)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): GenericViewHolder<T> {
        val inflater=LayoutInflater.from(parent.context)
        val view=inflater.inflate(viewType,parent,false)
        return GenericViewHolder(view)
    }

    override fun getItemCount(): Int {
        return items.size
    }

    override fun onBindViewHolder(holder: GenericViewHolder<T>, position: Int) {
       holder.onBind(items[position])
    }
}
${SPLIT_CHAR}
<b>GenericViewHolder.kt</b>
${SPLIT_CHAR}
open class GenericViewHolder<T>(itemView:View):
    RecyclerView.ViewHolder(itemView), BindRecyclerViewHolder<T> {
    override fun onBind(item: T) {}
}
${SPLIT_CHAR}
<b>BindRecyclerViewHolder.kt</b>
${SPLIT_CHAR}
interface BindRecyclerViewHolder<T> {
  fun onBind(item:T)
}
${SPLIT_CHAR}
<b>TextRecyclerViewAdapter.kt + TextViewHolder</b>
${SPLIT_CHAR}
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.androidexamples.R
import kotlinx.android.synthetic.main.text_recyclerview_adapter_cell_design.view.*

class TextRecyclerViewAdapter: GenericRecyclerViewAdapter<Int>() {
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): GenericViewHolder<Int> {
        val inflater=LayoutInflater.from(parent.context)
        val view=inflater.inflate(R.layout.text_recyclerview_adapter_cell_design,parent,false)
        return TextViewHolder(view)
    }

    private inner class TextViewHolder(itemView: View):GenericViewHolder<Int>(itemView) {
       private val textView=itemView.text_text_recyclerview_adapter_cell_design

       override fun onBind(item: Int) {
         textView.text=item.toString()
       }
   }
}
${SPLIT_CHAR}
<b>text_recyclerview_adapter_cell_design.xml</b>
${SPLIT_CHAR}
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    xmlns:app="http://schemas.android.com/apk/res-auto">
    <androidx.cardview.widget.CardView
        android:layout_width="match_parent"
        android:layout_height="50dp"
        app:cardUseCompatPadding="true"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintLeft_toLeftOf="parent"
        app:layout_constraintRight_toRightOf="parent"
        app:layout_constraintTop_toTopOf="parent">
        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:id="@+id/text_text_recyclerview_adapter_cell_design"
            android:layout_gravity="center"
        />
    </androidx.cardview.widget.CardView>
</androidx.constraintlayout.widget.ConstraintLayout>
${SPLIT_CHAR}
`