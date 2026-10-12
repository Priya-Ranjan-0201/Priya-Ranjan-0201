import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

options = Options()
options.add_argument('--headless=new')
options.add_argument('--window-size=1200,3000')
options.add_argument('--force-device-scale-factor=2')
options.add_argument('--hide-scrollbars')

driver = webdriver.Chrome(options=options)
html_path = 'file:///C:/Users/PRIYE%20RANJAN/OneDrive/Desktop/github/index.html'
driver.get(html_path)
time.sleep(2)

hero = driver.find_element(By.CLASS_NAME, 'hero-card')
hero.screenshot('assets/hero-banner.png')
print('Hero banner screenshot saved successfully!')
driver.quit()
