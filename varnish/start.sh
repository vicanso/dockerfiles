#!/bin/sh

varnishd -f $VCL_CONFIG -a 0.0.0.0:${PORT} -s malloc,$CACHE_SIZE $PARAMS -F
