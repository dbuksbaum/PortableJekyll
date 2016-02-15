@ECHO OFF
IF NOT "%~f0" == "~f0" GOTO :WinNT
@"D:\Development\Blogs\Jekyll\PortableJekyll\ruby\bin\ruby.exe" "D:/Development/Blogs/Jekyll/PortableJekyll/ruby/bin/jekyll" %1 %2 %3 %4 %5 %6 %7 %8 %9
GOTO :EOF
:WinNT
@"D:\Development\Blogs\Jekyll\PortableJekyll\ruby\bin\ruby.exe" "%~dpn0" %*
