const SPLIT_CHAR="$$"

export default
`
<b>add this dependencies to buid.gradle(:app)</b>
${SPLIT_CHAR}
    //rxjava
    implementation 'io.reactivex.rxjava3:rxandroid:3.0.0'
    implementation 'io.reactivex.rxjava3:rxjava:3.0.3'

    //Glide
    implementation 'com.github.bumptech.glide:glide:4.11.0'
    annotationProcessor 'com.github.bumptech.glide:compiler:4.11.0'

    //retrofit
    implementation 'com.squareup.retrofit2:retrofit:2.9.0'
    implementation 'com.squareup.retrofit2:converter-gson:2.4.0'
    implementation 'com.squareup.okhttp3:okhttp:3.14.9'
    implementation 'com.squareup.retrofit2:adapter-rxjava3:2.9.0'
    //gson
    implementation 'com.google.code.gson:gson:2.8.6'
${SPLIT_CHAR}
<b>Add Internet permission in the AndroidManifes.xml</b>
${SPLIT_CHAR}
<uses-permission android:name="android.permission.INTERNET" />
${SPLIT_CHAR}
<b>MainActivity.kt</b>
${SPLIT_CHAR}
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.androidexamples.examples.covid19withcountryflag.CountryDetails
import com.androidexamples.examples.covid19withcountryflag.Covid19Api
import com.androidexamples.examples.covid19withcountryflag.Covid19RecyclerViewAdapter
import io.reactivex.rxjava3.android.schedulers.AndroidSchedulers
import io.reactivex.rxjava3.schedulers.Schedulers
import kotlinx.android.synthetic.main.activity_main.*
import retrofit2.Response
import retrofit2.Retrofit
import retrofit2.adapter.rxjava3.RxJava3CallAdapterFactory
import retrofit2.converter.gson.GsonConverterFactory

class MainActivity : AppCompatActivity() {
    private lateinit var adapter: Covid19RecyclerViewAdapter
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        initRecyclerView()
        getCovid19DetailsPerCountry()
    }

    private fun initRecyclerView(){
        adapter= Covid19RecyclerViewAdapter()
        val layoutManager=LinearLayoutManager(this,RecyclerView.VERTICAL,false)
        covid_recycler.layoutManager=layoutManager
        covid_recycler.adapter=adapter
        covid_recycler.setHasFixedSize(true)
    }

    private fun getCovid19DetailsPerCountry() {
        val retrofitBuilder= Retrofit.Builder()
            .baseUrl("https://disease.sh/")
            .addConverterFactory(GsonConverterFactory.create())
            .addCallAdapterFactory(RxJava3CallAdapterFactory.create())
            .build()

        val api=retrofitBuilder.create(Covid19Api::class.java)

        api.getDetailsSummary().subscribeOn(Schedulers.io())
            .observeOn(AndroidSchedulers.mainThread())
            .subscribe(::handleData){ Log.e("MainActivity",it.message)}
    }

    private fun handleData(response: Response<ArrayList<CountryDetails>>){
        if (response.isSuccessful){
            val body=response.body()

            body?.let {
                adapter.addItems(it) //recyclerview adapter
            }
        }
    }
}
${SPLIT_CHAR}
<b>activity_main.xml</b>
${SPLIT_CHAR}
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    tools:context=".MainActivity">

    <androidx.recyclerview.widget.RecyclerView
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:id="@+id/covid_recycler"
        app:layout_constraintTop_toTopOf="parent"/>
</androidx.constraintlayout.widget.ConstraintLayout>
${SPLIT_CHAR}
<b>Covid19RecyclerViewAdapter.kt + ViewHolder</b>
${SPLIT_CHAR}
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.androidexamples.R
import com.bumptech.glide.Glide
import kotlinx.android.synthetic.main.recyclerview_covid19_cell_design.view.*

class Covid19RecyclerViewAdapter:RecyclerView.Adapter<RecyclerView.ViewHolder>() {

    private val items=ArrayList<CountryDetails>()

     fun addItems(items:ArrayList<CountryDetails>) {
        this.items.addAll(items)
         notifyDataSetChanged()
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): RecyclerView.ViewHolder {
       val inflater=LayoutInflater.from(parent.context)
       val view=inflater.inflate(R.layout.recyclerview_covid19_cell_design,parent,false)
       return ViewHolder(view)
    }

    override fun getItemCount() = items.size

    override fun onBindViewHolder(holder: RecyclerView.ViewHolder, position: Int) {
        if (holder is ViewHolder){
            Glide.with(holder.countryImage.context)
                .load(items[position].countryInfo?.flag).into(holder.countryImage)
            
            val stringBuilder=StringBuilder()
            stringBuilder.appendln("country: "+ items[position].country)
            stringBuilder.appendln("active: "+items[position].active )
            stringBuilder.appendln("cases: " +items[position].cases)
            stringBuilder.appendln("recovered: "+ items[position].recovered)
            stringBuilder.appendln("tests: " +items[position].tests)

            holder.countryDetailsTextView.text=stringBuilder.toString()
        }
    }

    inner class ViewHolder(itemView:View):RecyclerView.ViewHolder(itemView){
        val countryDetailsTextView=itemView.country_text_view_covid19
        val countryImage=itemView.country_covid19_img
    }
}
${SPLIT_CHAR}
<b>recyclerview_covid19_cell_design.xml</b>
${SPLIT_CHAR}
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout 
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    xmlns:app="http://schemas.android.com/apk/res-auto">

    <androidx.cardview.widget.CardView
        android:layout_width="match_parent"
        android:layout_height="200dp"
        app:cardUseCompatPadding="true"
        app:cardElevation="5dp"
        app:layout_constraintTop_toTopOf="parent">
        <ImageView
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            android:adjustViewBounds="true"
            android:scaleType="centerCrop"
            android:alpha="0.3"
            android:id="@+id/country_covid19_img"/>
        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:id="@+id/country_text_view_covid19"
            android:textColor="#000000"
            android:textSize="18sp"
            android:layout_gravity="center"
            android:layout_margin="5dp"/>
    </androidx.cardview.widget.CardView>
</androidx.constraintlayout.widget.ConstraintLayout>
${SPLIT_CHAR}
<b>Covid19Api.kt</b>
${SPLIT_CHAR}
import io.reactivex.rxjava3.core.Single
import retrofit2.Response
import retrofit2.http.GET

interface Covid19Api {

    @GET("v3/covid-19/countries?yesterday=false&sort=cases")
    fun getDetailsSummary(): Single<Response<ArrayList<CountryDetails>>>
}
${SPLIT_CHAR}
<b>CountryDetails.kt</b>
${SPLIT_CHAR}
class CountryDetails{

  @SerializedName("country")
  @Expose
   val country: String? = null

  @SerializedName("countryInfo")
  @Expose
   val countryInfo: CountryInfo? = null

  @SerializedName("cases")
  @Expose
   val cases: Int? = null

  @SerializedName("recovered")
  @Expose
   val recovered: Int? = null

  @SerializedName("active")
  @Expose
   val active: Int? = null


  @SerializedName("tests")
  @Expose
   val tests: Int? = null
}
${SPLIT_CHAR}
<b>CountryInfo.kt</b>
${SPLIT_CHAR}
class CountryInfo {

  @SerializedName("flag")
  @Expose
   val flag: String? = null
}
${SPLIT_CHAR}
`