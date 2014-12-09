
### Notice!

log into ssh via the subdomain ssh.1am.club e.g. username@ssh.1am.club

## What is it?

1am.club is a static web server you can log into via ssh. Has various useful tools for building and deving on the server.

## Features

* static webserver over https (http disallowed)
* has node and npm for building on the server
* peer.js signalling server on port 9000 for webRTC
* es6 transpiling with commonjs support via browserify, just put /t/ before the path e.g. /t/~username/myjsfile.js

## NB
Use at your own risk, there are not regular backups.

Follow the code of conduct.

## Cost

For now I am hosting it on amazon ec2 at my own expense I may start asking for donations if it seems like it will get expensive. The es6 transpiling feature is cool but may potentially run up costs, I may make it a donator only perk if it comes to donations. 

## Registering:

1. Read the [code of conduct](https://1am.club/coc/)
2. Fill in the [registration form](https://1am.club/reg/)
3. Wait for me to set up an account for you.
4. Using `ssh username@1am.club` log in with your emailed password
5. Change your password using `passwd`
6. See [tips](https://1am.club/tips/) for some ideas on what to do next.
