
1am-proxy
=========

## What is it?

1am.club is a server you can log into via ssh and statically host files over https.

## Features

* static webserver over https (does not support http at all)
* has node and npm for building o nthe server
* peer.js signalling server on port 9000 for webRTC
* es6 transpiling with commonjs support via browserify, just put /t/ before the path e.g. /t/~username/myjsfile.js

## Cost

For now I am hosting it on amazon ec2 at my own expense I may start asking for donations if it seems like it will get expensive. The es6 transpiling feature is cool but may potentially run up costs, I may make it a donator only perk if it comes to donations. 

## Registering:

NB: Only taking accepting a few registrations at the moment to see how wobbly it is. Hopefully it should be okay. Will do more soon. :)

1. Read the [code of conduct](https://1am.club/coc/)
2. Fill in the [registration form](https://1am.club/reg/)
3. Wait for me to set up an account for you.
4. Using `ssh username@1am.club` log in with your emailed password
5. Change your password using `passwd`
6. See [tips](https://1am.club/tips/) for some ideas on what to do next.
