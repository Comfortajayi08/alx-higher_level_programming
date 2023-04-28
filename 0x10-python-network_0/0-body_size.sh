#!/bin/bash

# Check if an argument was provided
if [ -z "$1" ]; then
    echo "Please provide a URL"
    exit 1
fi

# Make the request and store the response body in a variable
response=$(curl -s -w '%{size_download}' -o /dev/null "$1")

# Display the size of the response body in bytes
echo "The size of the response body is $response bytes."
