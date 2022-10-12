package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utils.Driver;

public class AscensionFindDoctorPage {
    public AscensionFindDoctorPage() {
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(css = "h1[class='banner-title']")
    public WebElement findDoctorHeaderText;
}
