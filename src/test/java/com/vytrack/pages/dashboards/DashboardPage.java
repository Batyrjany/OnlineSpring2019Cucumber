package com.vytrack.pages.dashboards;

import com.vytrack.utilities.BasePage;
import com.vytrack.utilities.BrowserUtils;
import com.vytrack.utilities.ConfigurationReader;
import com.vytrack.utilities.Driver;
import org.openqa.selenium.support.ui.WebDriverWait;

public class DashboardPage extends BasePage {

    //WebDriverWait wait = new WebDriverWait(Driver.getDriver(),Long.valueOf(ConfigurationReader.getProperty("SHORT_WAIT")));

    public  String getUserMenuName(){
        waitUntilLoaderScreenDisappear();
        return userMenuName.getText();
    }

    public String getPageTitle(){
        BrowserUtils.waitPlease(5);
        waitUntilLoaderScreenDisappear();
        return Driver.getDriver().getTitle();
    }
}