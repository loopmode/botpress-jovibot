#!/bin/sh

# Creates a tarball that can be imported to botpress

package_name="jovibot"
input_dir="./data"
output_dir="./"
timestamp=$(date +%s%3N)

mkdir $output_dir -p
output_file="${output_dir}/${package_name}_${timestamp}.tgz"
tar -czf $output_file $input_dir
