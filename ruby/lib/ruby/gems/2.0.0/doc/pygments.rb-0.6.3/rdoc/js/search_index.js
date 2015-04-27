var search_data = {"index":{"searchIndex":["mentoserror","pygments","lexer","popen","[]()","add_ids()","alive?()","all()","create()","css()","filters()","find()","find_by_alias()","find_by_extname()","find_by_mimetype()","find_by_name()","formatters()","get_fixed_bits_from_header()","get_header()","handle_header_and_return()","header_to_json()","highlight()","highlight()","lexer_name_for()","lexers()","lexers!()","mentos()","python_binary()","return_result()","size_check()","start()","stop()","styles()","which()","write_data()","mentos.py"],"longSearchIndex":["mentoserror","pygments","pygments::lexer","pygments::popen","pygments::lexer::[]()","pygments::popen#add_ids()","pygments::popen#alive?()","pygments::lexer::all()","pygments::lexer::create()","pygments::popen#css()","pygments::popen#filters()","pygments::lexer::find()","pygments::lexer::find_by_alias()","pygments::lexer::find_by_extname()","pygments::lexer::find_by_mimetype()","pygments::lexer::find_by_name()","pygments::popen#formatters()","pygments::popen#get_fixed_bits_from_header()","pygments::popen#get_header()","pygments::popen#handle_header_and_return()","pygments::popen#header_to_json()","pygments::lexer#highlight()","pygments::popen#highlight()","pygments::popen#lexer_name_for()","pygments::popen#lexers()","pygments::popen#lexers!()","pygments::popen#mentos()","pygments::popen#python_binary()","pygments::popen#return_result()","pygments::popen#size_check()","pygments::popen#start()","pygments::popen#stop()","pygments::popen#styles()","pygments::popen#which()","pygments::popen#write_data()",""],"info":[["MentosError","","MentosError.html","","<p>Error class\n"],["Pygments","","Pygments.html","","<p>Pygments provides access to the Pygments library via a pipe and a\nlong-running Python process.\n"],["Pygments::Lexer","","Pygments/Lexer.html","",""],["Pygments::Popen","","Pygments/Popen.html","",""],["[]","Pygments::Lexer","Pygments/Lexer.html#method-c-5B-5D","(name)","<p>Public: Alias for find.\n"],["add_ids","Pygments::Popen","Pygments/Popen.html#method-i-add_ids","(code, id)","<p>With the code, prepend the id (with two spaces to avoid escaping weirdness\nif the following text starts …\n"],["alive?","Pygments::Popen","Pygments/Popen.html#method-i-alive-3F","()","<p>Check for a @pid variable, and then hit `kill -0` with the pid to check if\nthe pid is still in the process …\n"],["all","Pygments::Lexer","Pygments/Lexer.html#method-c-all","()","<p>Public: Get all Lexers\n<p>Returns an Array of Lexers\n"],["create","Pygments::Lexer","Pygments/Lexer.html#method-c-create","(hash)","<p>Internal: Create a new Lexer object\n<p>hash - A hash of attributes\n<p>Returns a Lexer object\n"],["css","Pygments::Popen","Pygments/Popen.html#method-i-css","(klass='', opts={})","<p>Public: Return css for highlighted code\n"],["filters","Pygments::Popen","Pygments/Popen.html#method-i-filters","()","<p>Public: Return an array of all available filters\n"],["find","Pygments::Lexer","Pygments/Lexer.html#method-c-find","(name)","<p>Public: Look up Lexer by name or alias.\n<p>name - A String name or alias\n\n<pre class=\"ruby\"><span class=\"ruby-constant\">Lexer</span>.<span class=\"ruby-identifier\">find</span>(<span class=\"ruby-string\">&#39;Ruby&#39;</span>)\n=<span class=\"ruby-operator\">&gt;</span> <span class=\"ruby-comment\">#&lt;Lexer name=&quot;Ruby&quot;&gt;</span>\n</pre>\n"],["find_by_alias","Pygments::Lexer","Pygments/Lexer.html#method-c-find_by_alias","(name)","<p>Public: Look up Lexer by one of its aliases.\n<p>name - A String alias of the Lexer\n<p>Examples\n"],["find_by_extname","Pygments::Lexer","Pygments/Lexer.html#method-c-find_by_extname","(extname)","<p>Public: Look up Lexer by one of it&#39;s file extensions.\n<p>extname - A String file extension.\n<p>Examples\n"],["find_by_mimetype","Pygments::Lexer","Pygments/Lexer.html#method-c-find_by_mimetype","(type)","<p>Public: Look up Lexer by one of it&#39;s mime types.\n<p>type - A mime type String.\n<p>Examples\n"],["find_by_name","Pygments::Lexer","Pygments/Lexer.html#method-c-find_by_name","(name)","<p>Public: Look up Lexer by its proper name.\n<p>name - The String name of the Lexer\n<p>Examples\n"],["formatters","Pygments::Popen","Pygments/Popen.html#method-i-formatters","()","<p>Public: Get an array of available Pygments formatters\n<p>Returns an array of formatters.\n"],["get_fixed_bits_from_header","Pygments::Popen","Pygments/Popen.html#method-i-get_fixed_bits_from_header","(out_header)",""],["get_header","Pygments::Popen","Pygments/Popen.html#method-i-get_header","()","<p>Read the header via the pipe.\n<p>Returns a header.\n"],["handle_header_and_return","Pygments::Popen","Pygments/Popen.html#method-i-handle_header_and_return","(header, id)","<p>Based on the header we receive, determine if we need to read more bytes,\nand read those bytes if necessary. …\n"],["header_to_json","Pygments::Popen","Pygments/Popen.html#method-i-header_to_json","(header)","<p>Convert a text header into JSON for easy access.\n"],["highlight","Pygments::Lexer","Pygments/Lexer.html#method-i-highlight","(text, options = {})","<p>Public: Highlight syntax of text\n<p>text    - String of code to be highlighted options - Hash of options …\n"],["highlight","Pygments::Popen","Pygments/Popen.html#method-i-highlight","(code, opts={})","<p>Public: Highlight code.\n<p>Takes a first-position argument of the code to be highlighted, and a\nsecond-position …\n"],["lexer_name_for","Pygments::Popen","Pygments/Popen.html#method-i-lexer_name_for","(*args)","<p>Public: Return the name of a lexer.\n"],["lexers","Pygments::Popen","Pygments/Popen.html#method-i-lexers","()","<p>Public: Get all lexers from a serialized array. This avoids needing to\nspawn mentos when it&#39;s not …\n"],["lexers!","Pygments::Popen","Pygments/Popen.html#method-i-lexers-21","()","<p>Public: Get back all available lexers from mentos itself\n<p>Returns an array of lexers\n"],["mentos","Pygments::Popen","Pygments/Popen.html#method-i-mentos","(method, args=[], kwargs={}, original_code=nil)","<p>Our &#39;rpc&#39;-ish request to mentos. Requires a method name, and then\noptional args, kwargs, code. …\n"],["python_binary","Pygments::Popen","Pygments/Popen.html#method-i-python_binary","(is_windows)","<p>Detect a suitable Python binary to use.\n"],["return_result","Pygments::Popen","Pygments/Popen.html#method-i-return_result","(res, method)","<p>Return the final result for the API. Return Ruby objects for the methods\nthat want them, text otherwise. …\n"],["size_check","Pygments::Popen","Pygments/Popen.html#method-i-size_check","(size)","<p>Sanity check for size (32-arity of 0&#39;s and 1&#39;s)\n"],["start","Pygments::Popen","Pygments/Popen.html#method-i-start","(pygments_path = File.expand_path('../../../vendor/pygments-main/', __FILE__))","<p>Get things started by opening a pipe to mentos (the freshmaker), a Python\nprocess that talks to the  …\n"],["stop","Pygments::Popen","Pygments/Popen.html#method-i-stop","(reason)","<p>Stop the child process by issuing a kill -9.\n<p>We then call waitpid() with the pid, which waits for that …\n"],["styles","Pygments::Popen","Pygments/Popen.html#method-i-styles","()","<p>Public: Return an array of all available styles\n"],["which","Pygments::Popen","Pygments/Popen.html#method-i-which","(command)","<p>Cross platform which command from stackoverflow.com/a/5471032/284795\n"],["write_data","Pygments::Popen","Pygments/Popen.html#method-i-write_data","(out_header, code=nil)","<p>Write data to mentos, the Python Process.\n<p>Returns nothing.\n"],["mentos.py","","lib/pygments/mentos_py.html","","<p>#!/usr/bin/env python\n<p>import sys, re, os, signal import traceback if &#39;PYGMENTS_PATH&#39; in\nos.environ …\n"]]}}