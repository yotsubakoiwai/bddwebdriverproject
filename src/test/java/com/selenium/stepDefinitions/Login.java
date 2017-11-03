package com.selenium.stepDefinitions;

import com.selenium.ServiceHooks;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.*;
import org.junit.*;

public class Login {
    WebDriver driver = ServiceHooks.driver;
    String pageTitle = "Demo Web Shop. Tricentis";

    @Given("^I am on the \"([^\"]*)\" web page$")
    public void navigateToWebPage(String url) throws Throwable {
        driver.get(url);
        Assert.assertEquals(pageTitle, driver.getTitle());
    }

    @When("^I click \"([^\"]*)\" link from the breadcrumbs$")
    public void clickLinkFromTheBreadcrumbs(String breadcrumb) throws Throwable {
        WebElement breadcrumbLink = driver.findElement(By.xpath("//div[@class='header-links']/ul/li/a[text()='" + breadcrumb + "']"));
        breadcrumbLink.click();
    }

    @And("^I fill in \"([^\"]*)\" with \"([^\"]*)\"$")
    public void fillInWith(String field, String fieldValue) throws Throwable {
        WebElement textboxField = driver.findElement(By.xpath("//input[@id='" + field + "']"));
        textboxField.sendKeys(fieldValue);
    }

    @And("^I click on the \"([^\"]*)\" button$")
    public void clickOnTheButton(String button) throws Throwable {
        WebElement buttonToClick = driver.findElement(By.xpath("//input[@type='submit'][@value='" + button + "']"));
        buttonToClick.click();
    }

    @Then("^I should see \"([^\"]*)\" message$")
    public void messageDisplayed(String msg) throws Throwable {
        WebElement msgToFind = driver.findElement(By.xpath("//div[contains(@class, 'content-body')]/p[text()='" + msg + "']"));
        msgToFind.isDisplayed();
    }

    @And("^I should see the \"([^\"]*)\" link$")
    public void linkDisplayed(String loggedInBreadcrumb) throws Throwable {
        WebElement loggedInBreadcrumbLink = driver.findElement(By.xpath("//div[@class='header-links']/ul/li/a[text()='" + loggedInBreadcrumb + "']"));
        loggedInBreadcrumbLink.isDisplayed();
    }
}
