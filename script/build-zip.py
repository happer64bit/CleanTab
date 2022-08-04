import shutil

shutil.copy("res", "bundle/")

shutil.make_archive("build/CleanTab", 'zip', ".")

print("Builded A zip file")