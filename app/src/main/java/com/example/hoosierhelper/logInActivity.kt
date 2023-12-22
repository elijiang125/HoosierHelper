package com.example.hoosierhelper

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.TextView
import android.widget.Toast
import com.google.android.material.button.MaterialButton

class logInActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.log_in)

        val username = findViewById(R.id.username) as TextView;
        val password = findViewById(R.id.password) as TextView;

        val loginBtn = findViewById(R.id.loginButton) as MaterialButton;

        //admin and admin

        loginBtn.setOnClickListener{
            if(username.getText().toString().equals("admin") && password.getText().toString().equals("11042003Jj!")) {
                //then it's the correct admin password
                Toast.makeText(this, "LOGIN SUCCESSFUL", Toast.LENGTH_SHORT).show();
            }
            else {
                //then it's incorrect
                Toast.makeText(this, "LOGIN FAILED", Toast.LENGTH_SHORT).show();
            }
        }
    }
}