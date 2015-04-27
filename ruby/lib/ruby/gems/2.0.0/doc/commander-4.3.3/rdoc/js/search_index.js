var search_data = {"index":{"searchIndex":["array","blank","commander","command","options","delegates","helpformatter","base","terminal","terminalcompact","methods","platform","runner","commanderror","invalidcommanderror","ui","askforclass","progressbar","highline","object","__hash__()","action()","add_command()","alias?()","alias_command()","always_trace!()","applescript()","ask_editor()","available_editor()","choose()","color()","command()","command_exists?()","completed?()","configure()","configure()","converse()","default()","default_command()","defined_commands()","enable_paging()","erase_line()","example()","finished?()","generate_tokens()","get_binding()","global_option()","included()","increment()","indent()","inspect()","instance()","io()","jruby?()","log()","method_missing()","never_trace!()","new()","new()","new()","new()","new()","option()","parse()","password()","percent_complete()","program()","progress()","progress_bar()","render()","render()","render_command()","render_command()","reset_io()","run()","run!()","say_error()","say_ok()","say_warning()","show()","speak()","steps_remaining()","template()","template()","time_elapsed()","time_remaining()","version()","when_called()"],"longSearchIndex":["array","blank","commander","commander::command","commander::command::options","commander::delegates","commander::helpformatter","commander::helpformatter::base","commander::helpformatter::terminal","commander::helpformatter::terminalcompact","commander::methods","commander::platform","commander::runner","commander::runner::commanderror","commander::runner::invalidcommanderror","commander::ui","commander::ui::askforclass","commander::ui::progressbar","highline","object","commander::command::options#__hash__()","commander::command#action()","commander::runner#add_command()","commander::runner#alias?()","commander::runner#alias_command()","commander::runner#always_trace!()","commander::ui#applescript()","commander::ui#ask_editor()","commander::ui#available_editor()","commander::ui#choose()","commander::ui#color()","commander::runner#command()","commander::runner#command_exists?()","commander::ui::progressbar#completed?()","commander#configure()","commander::configure()","commander::ui#converse()","commander::command::options#default()","commander::runner#default_command()","commander::delegates#defined_commands()","commander::ui#enable_paging()","commander::ui::progressbar#erase_line()","commander::command#example()","commander::ui::progressbar#finished?()","commander::ui::progressbar#generate_tokens()","object#get_binding()","commander::runner#global_option()","blank::included()","commander::ui::progressbar#increment()","commander::helpformatter#indent()","commander::command::options#inspect()","commander::runner::instance()","commander::ui#io()","commander::platform::jruby?()","commander::ui#log()","commander::command::options#method_missing()","commander::runner#never_trace!()","commander::command::new()","commander::command::options::new()","commander::helpformatter::base::new()","commander::runner::new()","commander::ui::progressbar::new()","commander::command#option()","array::parse()","commander::ui#password()","commander::ui::progressbar#percent_complete()","commander::runner#program()","commander::ui#progress()","commander::ui::progressbar#progress_bar()","commander::helpformatter::base#render()","commander::helpformatter::terminal#render()","commander::helpformatter::base#render_command()","commander::helpformatter::terminal#render_command()","commander::ui#reset_io()","commander::command#run()","commander::runner#run!()","commander::ui#say_error()","commander::ui#say_ok()","commander::ui#say_warning()","commander::ui::progressbar#show()","commander::ui#speak()","commander::ui::progressbar#steps_remaining()","commander::helpformatter::terminal#template()","commander::helpformatter::terminalcompact#template()","commander::ui::progressbar#time_elapsed()","commander::ui::progressbar#time_remaining()","commander::runner#version()","commander::command#when_called()"],"info":[["Array","","Array.html","",""],["Blank","","Blank.html","",""],["Commander","","Commander.html","",""],["Commander::Command","","Commander/Command.html","",""],["Commander::Command::Options","","Commander/Command/Options.html","","<p>Options struct.\n"],["Commander::Delegates","","Commander/Delegates.html","",""],["Commander::HelpFormatter","","Commander/HelpFormatter.html","","<p>Help Formatter\n<p>Commander&#39;s help formatters control the output when either the help\ncommand, or –help …\n"],["Commander::HelpFormatter::Base","","Commander/HelpFormatter/Base.html","",""],["Commander::HelpFormatter::Terminal","","Commander/HelpFormatter/Terminal.html","",""],["Commander::HelpFormatter::TerminalCompact","","Commander/HelpFormatter/TerminalCompact.html","",""],["Commander::Methods","","Commander/Methods.html","",""],["Commander::Platform","","Commander/Platform.html","",""],["Commander::Runner","","Commander/Runner.html","",""],["Commander::Runner::CommandError","","Commander/Runner/CommandError.html","",""],["Commander::Runner::InvalidCommandError","","Commander/Runner/InvalidCommandError.html","",""],["Commander::UI","","Commander/UI.html","","<p>User Interaction\n<p>Commander&#39;s user interaction module mixes in common methods which\nextend HighLine&#39;s …\n"],["Commander::UI::AskForClass","","Commander/UI/AskForClass.html","","<p>Implements ask_for_CLASS methods.\n"],["Commander::UI::ProgressBar","","Commander/UI/ProgressBar.html","","<p>Progress Bar\n<p>Terminal progress bar utility. In its most basic form requires that the\ndeveloper specifies …\n"],["HighLine","","HighLine.html","",""],["Object","","Object.html","",""],["__hash__","Commander::Command::Options","Commander/Command/Options.html#method-i-__hash__","()",""],["action","Commander::Command","Commander/Command.html#method-i-action","(*args, &block)",""],["add_command","Commander::Runner","Commander/Runner.html#method-i-add_command","(command)","<p>Add a command object to this runner.\n"],["alias?","Commander::Runner","Commander/Runner.html#method-i-alias-3F","(name)","<p>Check if command <em>name</em> is an alias.\n"],["alias_command","Commander::Runner","Commander/Runner.html#method-i-alias_command","(alias_name, name, *args)","<p>Alias command <em>name</em> with <em>alias_name</em>. Optionally\n<em>args</em> may be passed as if they were being passed straight …\n"],["always_trace!","Commander::Runner","Commander/Runner.html#method-i-always_trace-21","()","<p>Enable tracing on all executions (bypasses –trace)\n"],["applescript","Commander::UI","Commander/UI.html#method-i-applescript","(script)","<p>Execute apple <em>script</em>.\n"],["ask_editor","Commander::UI","Commander/UI.html#method-i-ask_editor","(input = nil, preferred_editor = nil)","<p>Prompt an editor for input. Optionally supply initial <em>input</em> which\nis written to the editor.\n<p><em>preferred_editor</em> …\n"],["available_editor","Commander::UI","Commander/UI.html#method-i-available_editor","(preferred = nil)","<p>Find an editor available in path. Optionally supply the <em>preferred</em>\neditor. Returns the name as a string, …\n"],["choose","Commander::UI","Commander/UI.html#method-i-choose","(message = nil, *choices, &block)","<p>Choose from a set array of <em>choices</em>.\n"],["color","Commander::UI","Commander/UI.html#method-i-color","(*args)","<p>&#39;Say&#39; something using the specified color\n<p>Examples\n\n<pre>color &#39;I am blue&#39;, :blue\ncolor &#39;I am bold&#39;, ...</pre>\n"],["command","Commander::Runner","Commander/Runner.html#method-i-command","(name, &block)","<p>Creates and yields a command instance when a block is passed. Otherwise\nattempts to return the command, …\n"],["command_exists?","Commander::Runner","Commander/Runner.html#method-i-command_exists-3F","(name)","<p>Check if a command <em>name</em> exists.\n"],["completed?","Commander::UI::ProgressBar","Commander/UI/ProgressBar.html#method-i-completed-3F","()","<p>Whether or not the operation has completed.\n"],["configure","Commander","Commander.html#method-i-configure","(*configuration_opts, &configuration_block)",""],["configure","Commander","Commander.html#method-c-configure","(*configuration_opts, &configuration_block)",""],["converse","Commander::UI","Commander/UI.html#method-i-converse","(prompt, responses = {})","<p>Converse with speech recognition.\n<p>Currently a “poorman&#39;s” DSL to utilize applescript and …\n"],["default","Commander::Command::Options","Commander/Command/Options.html#method-i-default","(defaults = {})",""],["default_command","Commander::Runner","Commander/Runner.html#method-i-default_command","(name)","<p>Default command <em>name</em> to be used when no other command is found in\nthe arguments.\n"],["defined_commands","Commander::Delegates","Commander/Delegates.html#method-i-defined_commands","(*args, &block)",""],["enable_paging","Commander::UI","Commander/UI.html#method-i-enable_paging","()","<p>Enable paging of output after called.\n"],["erase_line","Commander::UI::ProgressBar","Commander/UI/ProgressBar.html#method-i-erase_line","()","<p>Erase previous terminal line.\n"],["example","Commander::Command","Commander/Command.html#method-i-example","(description, command)","<p>Add a usage example for this command.\n<p>Usage examples are later displayed in help documentation created …\n"],["finished?","Commander::UI::ProgressBar","Commander/UI/ProgressBar.html#method-i-finished-3F","()","<p>Whether or not the operation is complete, and we have finished.\n"],["generate_tokens","Commander::UI::ProgressBar","Commander/UI/ProgressBar.html#method-i-generate_tokens","()","<p>Generates tokens for this step.\n"],["get_binding","Object","Object.html#method-i-get_binding","()","<p>Return the current binding.\n"],["global_option","Commander::Runner","Commander/Runner.html#method-i-global_option","(*args, &block)","<p>Add a global option; follows the same syntax as Command#option This would\nbe used for switches such as …\n"],["included","Blank","Blank.html#method-c-included","(base)",""],["increment","Commander::UI::ProgressBar","Commander/UI/ProgressBar.html#method-i-increment","(tokens = {})","<p>Increment progress. Optionally pass <em>tokens</em> which can be displayed\nin the output format.\n"],["indent","Commander::HelpFormatter","Commander/HelpFormatter.html#method-i-indent","(amount, text)",""],["inspect","Commander::Command::Options","Commander/Command/Options.html#method-i-inspect","()",""],["instance","Commander::Runner","Commander/Runner.html#method-c-instance","()","<p>Return singleton Runner instance.\n"],["io","Commander::UI","Commander/UI.html#method-i-io","(input = nil, output = nil, &block)","<p>Normalize IO streams, allowing for redirection of <code>input</code> and/or\n<code>output</code>, for example:\n\n<pre>$ foo             ...</pre>\n"],["jruby?","Commander::Platform","Commander/Platform.html#method-c-jruby-3F","()",""],["log","Commander::UI","Commander/UI.html#method-i-log","(action, *args)","<p>&#39;Log&#39; an <em>action</em> to the terminal. This is typically used\nfor verbose output regarding actions …\n"],["method_missing","Commander::Command::Options","Commander/Command/Options.html#method-i-method_missing","(meth, *args)",""],["never_trace!","Commander::Runner","Commander/Runner.html#method-i-never_trace-21","()","<p>Hide the trace option from the help menus and don&#39;t add it as a global\noption\n"],["new","Commander::Command","Commander/Command.html#method-c-new","(name)","<p>Initialize new command with specified <em>name</em>.\n"],["new","Commander::Command::Options","Commander/Command/Options.html#method-c-new","()",""],["new","Commander::HelpFormatter::Base","Commander/HelpFormatter/Base.html#method-c-new","(runner)",""],["new","Commander::Runner","Commander/Runner.html#method-c-new","(args = ARGV)","<p>Initialize a new command runner. Optionally supplying <em>args</em> for\nmocking, or arbitrary usage.\n"],["new","Commander::UI::ProgressBar","Commander/UI/ProgressBar.html#method-c-new","(total, options = {})","<p>Creates a new progress bar.\n<p>Options\n\n<pre>:title              Title, defaults to &quot;Progress&quot;\n:width           ...</pre>\n"],["option","Commander::Command","Commander/Command.html#method-i-option","(*args, &block)","<p>Add an option.\n<p>Options are parsed via OptionParser so view it for additional usage\ndocumentation. A block …\n"],["parse","Array","Array.html#method-c-parse","(string)","<p>Split <em>string</em> into an array. Used in conjunction with\nHighline&#39;s #ask, or #ask_for_array methods, …\n"],["password","Commander::UI","Commander/UI.html#method-i-password","(message = 'Password: ', mask = '*')","<p>Ask the user for a password. Specify a custom <em>message</em> other than\n&#39;Password: &#39; or override the …\n"],["percent_complete","Commander::UI::ProgressBar","Commander/UI/ProgressBar.html#method-i-percent_complete","()","<p>Completion percentage.\n"],["program","Commander::Runner","Commander/Runner.html#method-i-program","(key, *args, &block)","<p>Assign program information.\n<p>Examples\n\n<pre># Set data\nprogram :name, &#39;Commander&#39;\nprogram :version, Commander::VERSION ...</pre>\n"],["progress","Commander::UI","Commander/UI.html#method-i-progress","(arr, options = {})","<p>Output progress while iterating <em>arr</em>.\n<p>Examples\n\n<pre>uris = %w( http://vision-media.ca http://google.com )\nprogress ...</pre>\n"],["progress_bar","Commander::UI::ProgressBar","Commander/UI/ProgressBar.html#method-i-progress_bar","()","<p>Formatted progress bar.\n"],["render","Commander::HelpFormatter::Base","Commander/HelpFormatter/Base.html#method-i-render","()",""],["render","Commander::HelpFormatter::Terminal","Commander/HelpFormatter/Terminal.html#method-i-render","()",""],["render_command","Commander::HelpFormatter::Base","Commander/HelpFormatter/Base.html#method-i-render_command","(command)",""],["render_command","Commander::HelpFormatter::Terminal","Commander/HelpFormatter/Terminal.html#method-i-render_command","(command)",""],["reset_io","Commander::UI","Commander/UI.html#method-i-reset_io","()","<p>Reset IO to initial constant streams.\n"],["run","Commander::Command","Commander/Command.html#method-i-run","(*args)","<p>Run the command with <em>args</em>.\n<p>parses options, call option blocks\n<p>invokes when_called proc\n"],["run!","Commander::Runner","Commander/Runner.html#method-i-run-21","()","<p>Run command parsing and execution process.\n"],["say_error","Commander::UI","Commander/UI.html#method-i-say_error","(*args)","<p>&#39;Say&#39; something using the ERROR color (red).\n<p>Examples\n\n<pre>say_error &#39;Everything is not fine&#39;\nsay_error ...</pre>\n"],["say_ok","Commander::UI","Commander/UI.html#method-i-say_ok","(*args)","<p>&#39;Say&#39; something using the OK color (green).\n<p>Examples\n\n<pre>say_ok &#39;Everything is fine&#39;\nsay_ok &#39;It is ...</pre>\n"],["say_warning","Commander::UI","Commander/UI.html#method-i-say_warning","(*args)","<p>&#39;Say&#39; something using the WARNING color (yellow).\n<p>Examples\n\n<pre>say_warning &#39;This is a warning&#39;\nsay_warning ...</pre>\n"],["show","Commander::UI::ProgressBar","Commander/UI/ProgressBar.html#method-i-show","()","<p>Output the progress bar.\n"],["speak","Commander::UI","Commander/UI.html#method-i-speak","(message, voice = :Alex, rate = 175)","<p>Speak <em>message</em> using <em>voice</em> at a speaking rate of\n<em>rate</em>\n<p>Voice defaults to &#39;Alex&#39;, which is one of …\n"],["steps_remaining","Commander::UI::ProgressBar","Commander/UI/ProgressBar.html#method-i-steps_remaining","()","<p>Number of steps left.\n"],["template","Commander::HelpFormatter::Terminal","Commander/HelpFormatter/Terminal.html#method-i-template","(name)",""],["template","Commander::HelpFormatter::TerminalCompact","Commander/HelpFormatter/TerminalCompact.html#method-i-template","(name)",""],["time_elapsed","Commander::UI::ProgressBar","Commander/UI/ProgressBar.html#method-i-time_elapsed","()","<p>Time that has elapsed since the operation started.\n"],["time_remaining","Commander::UI::ProgressBar","Commander/UI/ProgressBar.html#method-i-time_remaining","()","<p>Estimated time remaining.\n"],["version","Commander::Runner","Commander/Runner.html#method-i-version","()","<p>Return program version.\n"],["when_called","Commander::Command","Commander/Command.html#method-i-when_called","(*args, &block)","<p>Handle execution of command. The handler may be a class, object, or block\n(see examples below).\n<p>Examples …\n"]]}}