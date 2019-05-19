package com.CommonFunctions;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.safari.SafariDriver;

public class CommonFunc {
	
	WebElement e;
	
	
	public SafariDriver launchSafariBrowser()
	{
		SafariDriver D = new SafariDriver(); 
		 
		 return D;
	}
	
	
	public ChromeDriver launchChromeBrowser()
	{
		System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir")+"/chromedriver");
		
		ChromeDriver D = new ChromeDriver();
		
		return D;
	}
	
	public void maxWindow(WebDriver D)
	{
		D.manage().window().maximize();
	}

//	public void validation(String actual, String expected)
//	
//	{
//		assertTrue(expected.contains(actual));
//	}
	
//	public WebElement findElement(WebDriver d, String locator)
//	{
//		
//		switch(locator)
//		{
//		
//		case "gmail" :
//			
//			e = d.findElement(By.className("gb_d"));
//		    break;
//		    
//		case "signIn" :
//			
//			e = d.findElement(By.linkText("Sign in"));
//			break;
//		
//		case "userId" :
//			
//			e = d.findElement(By.id("identifierId"));
//			break;
//			
//		case "userPass" :
//			
//			e = d.findElement(By.xpath("//*[@id=\'password\']/div[1]/div/div[1]/input"));
//		    break;
//			
//		case "passNext" :
//			
//			e = d.findElement(By.xpath("//*[@id=\'passwordNext\']/content/span"));
//			break;
//		
//		case "idenNext" :
//			
//			e = d.findElement(By.xpath("//*[@id=\'identifierNext\']/content/span"));
//			break;
//			
//		case "search" :
//			
//			e = d.findElement(By.xpath("//*[@id=\'tsf\']/div[2]/div/div[1]/div/div[1]/input"));
//			break;
//		}
//		
//		return e;
//	}
	
	public void screenShottaker(WebDriver D) throws IOException
	{
		
		TakesScreenshot capture = (TakesScreenshot) D;
		
		File actualScreenshot = capture.getScreenshotAs(OutputType.FILE);
		
		File myFile = new File("screenshot.png"); 
		
		FileUtils.copyFile(actualScreenshot, myFile);
	}
	
	String[] splitTheString(String str)
	{
		String[] arrOfStr = str.split(">", 2);
		
		return arrOfStr;
	}
	
}
