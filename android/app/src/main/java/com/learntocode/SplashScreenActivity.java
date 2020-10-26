package com.learntocode;
import android.content.*;
import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;


public class SplashScreenActivity extends AppCompatActivity{
 @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Intent intent = new Intent(this, MainActivity.class);
        startActivity(intent);
        finish();
    }
}