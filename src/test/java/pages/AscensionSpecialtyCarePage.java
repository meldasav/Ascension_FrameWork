package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utils.Driver;

public class AscensionSpecialtyCarePage {
    public AscensionSpecialtyCarePage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(css ="div[class='hero-layout-content']>h1")
    public WebElement specialtyCareText;
}
