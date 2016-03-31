# TheFretboardApp

This is a client application for [thefretboard.co.uk](thefretboard.co.uk).  It is currently in **prototype status**.


## Authentication

Authentication is currently mocked up.

A successful login can be simulated by entering username 'test' and password 'abc'.  When logged in, the menu screen shows additional functions such as 'Bookmarks' and 'Messages'.

Alternatively, authentication can be skipped by tapping 'continue as guest'.

The user can return to the login screen from other screens by opening the menu (tap theFB favicon at the top left) and then selecting 'Log in' or 'Log out' as appropriate.


## Server selection

The source from which data is fetched can be changed using the 'Server' dropdown in the menu screen.

* Mock: simulate network requests using a timer, and then return hard-coded data structures.
* Xamarin: fetch data from [forums.xamarin.com](forums.xamarin.com) using the ["hosted" Vanilla API](https://blog.vanillaforums.com/api/).
* theFretBoard (dev server): fetch data from [fretboard.nick-long.com](fretboard.nick-long.com) using the ["open" Vanilla API](https://github.com/kasperisager/vanilla-api/wiki).

