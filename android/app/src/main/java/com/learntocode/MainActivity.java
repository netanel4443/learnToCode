package com.learntocode;

import com.facebook.react.ReactActivity;

//for splash screen we added this line
import android.os.Bundle; // here 
// react-native-splash-screen >= 0.3.1 
import org.devio.rn.splashscreen.SplashScreen; // here 

public class MainActivity extends ReactActivity {

 @Override
    protected void onCreate(Bundle savedInstanceState) {
      
        SplashScreen.show(this,R.style.SplashScreenTheme);  // here 
        super.onCreate(savedInstanceState);
    }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "LearnToCode";
  }
}
