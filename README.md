[![Binder](https://mybinder.org/badge_logo.svg)](http://beta.mybinder.org/v2/gh/deeplook/harpology/master) 

# Getting started with Harp.gl and its Leaflet plugin

- https://github.com/heremaps/harp.gl
- https://github.com/heremaps/harp-leaflet

## Phase 1: Get a dummy webservice running

The "webservice" is simply to run `python3 -m http.server 8888` which should be made available inside a container built with binder or repo2docker with some link. Running this iside the contain works, specifying it with an `--appendix` flag like in `jupyter-repo2docker --appendix 'CMD ["python3", "-m", "http.server", "8888"]' .` doesn't. Calling the service via some link like `http://localhost:<jupyter-port>/proxy/8888` also doesn't work, yet. Any help is very welcome!
