import shutil

shutil.make_archive("build/CleanTab", 'zip', "bundle/")
print("Builded to build/ folder")