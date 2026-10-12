import time
import os
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

options = Options()
options.add_argument('--headless=new')
options.add_argument('--window-size=1040,7500')
options.add_argument('--force-device-scale-factor=2')
options.add_argument('--hide-scrollbars')

driver = webdriver.Chrome(options=options)
html_file = os.path.abspath('scripts/render_readme_sections.html')
driver.get(f'file:///{html_file.replace(os.sep, "/")}')
print('Waiting for fonts and images to load...')
time.sleep(3)

sections = [
    ('hero-banner', 'assets/hero-banner.png'),
    ('sec-about', 'assets/about-me.png'),
    ('sec-paradigms', 'assets/engineering-paradigms.png'),
    ('sec-projects', 'assets/featured-projects.png'),
    ('sec-tech', 'assets/tech-stack.png'),
    ('sec-analytics', 'assets/analytics-dashboard.png'),
    ('sec-journey', 'assets/my-journey.png'),
    ('sec-exploring', 'assets/currently-exploring.png'),
    ('sec-achievements', 'assets/achievements-highlights.png'),
    ('sec-connect', 'assets/lets-connect.png'),
]

for elem_id, out_file in sections:
    try:
        el = driver.find_element(By.ID, elem_id)
        el.screenshot(out_file)
        size_kb = os.path.getsize(out_file) / 1024
        print(f'Captured #{elem_id} -> {out_file} ({size_kb:.1f} KB)')
    except Exception as e:
        print(f'Error capturing #{elem_id}: {e}')

driver.quit()
print('All section PNGs captured successfully!')
