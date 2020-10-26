const SPLIT_CHAR="$$"

export default
`
<b>SplashScreen.kt</b>
${SPLIT_CHAR}
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle

class SplashScreen : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val intent=Intent(this, MainActivity::class.java)
        startActivity(intent)
        finish() 
        //close splash screen , we don't need it anymore
        //otherwise, if we press on the back button, the user
        //will see this screen again.
    }
}
${SPLIT_CHAR}
<b>MainActivity.kt</b>
${SPLIT_CHAR}
class MainActivity : AppCompatActivity() {
 
  override fun onCreate(savedInstanceState: Bundle?) {
      super.onCreate(savedInstanceState)
      setContentView(R.layout.activity_main)
     
      // your code here
    }
${SPLIT_CHAR}
<b>In drawable folder -  splash_screen_design.xml</b>
${SPLIT_CHAR}
<?xml version="1.0" encoding="utf-8"?>
<layer-list xmlns:android="http://schemas.android.com/apk/res/android">

<!--your_background is your background to be displayed
    add it to drawable folder
-->
    <item>
        <bitmap
            android:src="@drawable/your_background"
            android:gravity="center"/>

    </item>

</layer-list>
${SPLIT_CHAR}
<b>In res/values/styles.xml</b>
${SPLIT_CHAR}
<style name="SplashTheme" parent="Theme.AppCompat.NoActionBar">
  <item name="android:windowBackground">@drawable/splash_screen_design</item>
</style>
${SPLIT_CHAR}
<b>AndroidManifest.xml in <application tag</b>
Notice ! add your customised theme like in this example
android:theme="@style/SplashTheme"
${SPLIT_CHAR}
<activity android:name=".MainActivity" />
<activity android:name=".SplashScreen"
          android:theme="@style/SplashTheme"> 
    <intent-filter>
        <action android:name="android.intent.action.MAIN" />
       // <!--The trick, start this activity first  -->
        <category android:name="android.intent.category.LAUNCHER" />
    </intent-filter>
</activity>
${SPLIT_CHAR}
`