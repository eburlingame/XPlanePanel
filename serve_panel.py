import subprocess, time, os
from winreg import * 

CHROME_PATH = "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
PANEL_URL = "http://localhost:5000"

subprocess.Popen(["serve", "-s", "build"], shell=True)
time.sleep(2)
subprocess.Popen([CHROME_PATH, "--kiosk", PANEL_URL], shell=True)