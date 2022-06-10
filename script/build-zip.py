import shutil, os

os.system("mkdir bundle")
os.system("npm install")
os.system("parcel build src/index.html --dist-dir bundle")

shutil.make_archive("build/CleanTab", 'zip', "bundle/")
print("Builded to build/ folder")
