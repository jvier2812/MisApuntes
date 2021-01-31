from selenium import webdriver

driver = webdriver.Firefox()

driver.get('https://www.duckduckgo.com')
print(driver.title)

driver.quit()
