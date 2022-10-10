package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utils.Driver;

import java.util.List;

public class AscensionHomePage {

    public AscensionHomePage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(css = "div[class*='primary-navigation-logo']")
    public WebElement logo;

    @FindBy(css="ul[class='primary-navigation-heading']>li")
    public List<WebElement> mainMenuItems;
}
