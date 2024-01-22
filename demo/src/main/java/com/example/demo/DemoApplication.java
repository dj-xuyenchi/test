package com.example.demo;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.IOException;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\anhdq\\Documents\\demo\\chromedriver-win64\\chromedriver.exe");

        // Initialize a new ChromeDriver
        WebDriver driver = new ChromeDriver();

        try {
            // Navigate to the URL
            driver.get("http://localhost:3000/");

            // Wait for some time (you might need to adjust this)
            Thread.sleep(5000);

            // Get the page source after JavaScript has been executed
            String pageSource = driver.getPageSource();

            // Print the page source
            System.out.println(pageSource);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            // Close the browser window
            driver.quit();
        }
    }
}
