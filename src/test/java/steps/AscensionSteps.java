package steps;

import cucumber.api.java.Before;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import pages.AscensionFindDoctorPage;
import pages.AscensionHomePage;
import pages.AscensionSpecialtyCarePage;
import utils.Driver;
import utils.Waiter;

public class AscensionSteps {

    WebDriver driver;
    AscensionHomePage ascensionHomePage;
    AscensionSpecialtyCarePage ascensionSpecialtyCarePage;
    AscensionFindDoctorPage ascensionFindDoctorPage;

    @Before
    public void setup() {
        driver = Driver.getDriver();
        ascensionHomePage = new AscensionHomePage();
        ascensionSpecialtyCarePage = new AscensionSpecialtyCarePage();
        ascensionFindDoctorPage = new AscensionFindDoctorPage();
    }

    @Then("user should see {string} in the url")
    public void user_should_see_in_the_url(String word) {
        Assert.assertTrue(driver.getCurrentUrl().contains(word));

    }

    @Then("user should see {string} in the title")
    public void user_should_see_in_the_title(String word) {
        Assert.assertTrue(driver.getTitle().contains(word));
    }

    @Then("validate  Ascension Logo displays")
    public void validate_Ascension_Logo_displays() {
        Assert.assertTrue(ascensionHomePage.logo.isDisplayed());
    }

    @Then("user should see menu items display with their texts")
    public void user_should_see_menu_items_display_with_their_texts(DataTable dataTable) {
        for (int i = 0; i < dataTable.asList().size(); i++) {
            Assert.assertTrue(ascensionHomePage.mainMenuItems.get(i).isDisplayed());
            Assert.assertEquals(dataTable.asList().get(i), ascensionHomePage.mainMenuItems.get(i).getText());
        }
    }


    @When("user clicks on {string}")
    public void user_clicks_on(String link) {
        switch (link) {
            case "SPECIALTY CARE":
                Waiter.pause(3);
                ascensionHomePage.mainMenuItems.get(0).click();
                break;
            case "FIND A DOCTOR":
                Waiter.pause(3);
                ascensionHomePage.findADoctorLink.click();
                break;
        }
    }

    @Then("validate {string} is displayed")
    public void validate_is_displayed(String text) {
        Assert.assertTrue(ascensionSpecialtyCarePage.specialtyCareText.isDisplayed());
        Assert.assertEquals(text, ascensionSpecialtyCarePage.specialtyCareText.getText());

    }

    @Then("validate hero placeHolder menu items are displayed")
    public void validateHeroPlaceHolderMenuItemsAreDisplayed() {
        String[] placeHolderMenuItems = {"FIND A DOCTOR", "FIND A LOCATION", "SCHEDULE AN APPOINTMENT", "GET CARE NOW"};
        for (int i = 0; i < ascensionHomePage.heroPlaceHolderMenuItems.size(); i++) {
            Assert.assertEquals(placeHolderMenuItems[i], ascensionHomePage.heroPlaceHolderMenuItems.get(i).getText());
            Assert.assertTrue(ascensionHomePage.heroPlaceHolderMenuItems.get(i).isDisplayed());
            Assert.assertTrue(ascensionHomePage.heroPlaceHolderMenuItems.get(i).isEnabled());
        }
    }

    @Then("user should see {string}")
    public void userShouldSee(String text) {
        Assert.assertEquals(text, ascensionFindDoctorPage.findDoctorHeaderText.getText());
        Assert.assertTrue(ascensionFindDoctorPage.findDoctorHeaderText.isDisplayed());

    }
}
